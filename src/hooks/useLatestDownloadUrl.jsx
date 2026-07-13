import { useState, useEffect } from "react";

const DEFAULT_UPDATE_BASE_URL = "https://sikapos-api-production.up.railway.app";
const FALLBACK_FILENAME = "SikaPOS-Setup-1.1.8.exe";
const DOWNLOAD_BASE_URL =
  import.meta.env.VITE_DOWNLOAD_BASE_URL || DEFAULT_UPDATE_BASE_URL;
const UPDATE_FEED_URL =
  import.meta.env.VITE_UPDATE_FEED_URL || `${DOWNLOAD_BASE_URL}/updates/latest.yml`;
const STATIC_INSTALLER_URL = import.meta.env.VITE_WINDOWS_INSTALLER_URL || "";

const buildDownloadUrl = (filename) => {
  if (!filename) return "";
  if (/^https?:\/\//i.test(filename)) return filename;
  return `${DOWNLOAD_BASE_URL}/updates/${filename.replace(/^\/+/, "")}`;
};

/**
 * Resolves the latest installer download URL and filename from the production update feed.
 * Returns { downloadUrl, filename, status, error, isLoading, isReady, isUnavailable }.
 */
export function useLatestDownloadUrl() {
  const [state, setState] = useState(() => ({
    downloadUrl: STATIC_INSTALLER_URL,
    filename: STATIC_INSTALLER_URL ? "" : FALLBACK_FILENAME,
    status: STATIC_INSTALLER_URL ? "ready" : "loading",
    error: null,
  }));

  useEffect(() => {
    if (STATIC_INSTALLER_URL) {
      setState({
        downloadUrl: STATIC_INSTALLER_URL,
        filename: "",
        status: "ready",
        error: null,
      });
      return undefined;
    }

    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    async function resolve() {
      try {
        const res = await fetch(UPDATE_FEED_URL, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`Installer feed returned ${res.status}`);
        }

        const text = await res.text();
        const match = text.match(/^path:\s*['"]?([^'"\n]+)['"]?/m);
        const resolvedFilename = match?.[1]?.trim();
        if (!resolvedFilename) {
          throw new Error("Installer feed did not include a path");
        }

        if (!cancelled) {
          setState({
            downloadUrl: buildDownloadUrl(resolvedFilename),
            filename: resolvedFilename.split("/").pop() || FALLBACK_FILENAME,
            status: "ready",
            error: null,
          });
        }
      } catch (error) {
        if (!cancelled) {
          setState({
            downloadUrl: "",
            filename: "",
            status: "error",
            error:
              error?.name === "AbortError"
                ? "Installer lookup timed out."
                : error?.message || "Installer lookup failed.",
          });
        }
      } finally {
        window.clearTimeout(timeout);
      }
    }

    resolve();

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return {
    ...state,
    isLoading: state.status === "loading",
    isReady: state.status === "ready" && Boolean(state.downloadUrl),
    isUnavailable: state.status === "error",
  };
}
