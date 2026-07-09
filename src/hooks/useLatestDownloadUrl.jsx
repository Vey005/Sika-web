import { useState, useEffect } from "react";

const API_BASE = "https://sikapos-api-production.up.railway.app";
const FALLBACK_FILENAME = "SikaPOS-Setup-1.1.8.exe";

/**
 * Resolves the latest installer download URL and filename from the production update feed.
 * Returns { downloadUrl, filename }.
 */
export function useLatestDownloadUrl() {
  const [filename, setFilename] = useState(FALLBACK_FILENAME);

  useEffect(() => {
    let cancelled = false;
    async function resolve() {
      try {
        const res = await fetch(`${API_BASE}/updates/latest.yml`);
        if (!res.ok) return;
        const text = await res.text();
        const match = text.match(/^path:\s*['"]?([^'"\n]+)['"]?/m);
        if (!cancelled && match?.[1]) {
          setFilename(match[1].trim());
        }
      } catch {
        // Keep fallback on error
      }
    }
    resolve();
    return () => { cancelled = true; };
  }, []);

  const downloadUrl = `${API_BASE}/updates/${filename}`;

  return { downloadUrl, filename };
}
