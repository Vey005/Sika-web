import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLatestDownloadUrl } from "../hooks/useLatestDownloadUrl";
import logoImg from "../assets/images/logo.png";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Offline Mode", href: "#offline" },
  { label: "Inventory", href: "#inventory" },
  { label: "Cloud Portal", href: "#cloud" },
  { label: "Hardware", href: "#hardware" },
  { label: "Pricing", href: "#pricing" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { downloadUrl, filename } = useLatestDownloadUrl();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-sika-border/80 bg-white/88 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#home" className="flex shrink-0 items-center gap-3 focus-ring">
          <img
            src={logoImg}
            alt="Sika POS logo"
            className="h-14 w-14 object-contain shadow-soft rounded-full bg-white border border-sika-border/60 p-1"
          />
          <span className="text-xl font-black tracking-normal text-sika-text">
            Sika POS
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-sika-textSoft transition hover:text-sika-goldDark focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={downloadUrl}
            download={filename}
            className="rounded-full border border-sika-border bg-white px-5 py-2.5 text-sm font-bold text-sika-text transition hover:bg-sika-cream focus-ring"
          >
            Download App
          </a>
          <a
            href="#contact"
            className="rounded-full border border-sika-border bg-white px-5 py-2.5 text-sm font-bold text-sika-text transition hover:bg-sika-cream focus-ring"
          >
            Login
          </a>
          <a
            href="#pricing"
            className="gold-gradient rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:shadow-lift focus-ring"
          >
            Book Demo
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sika-border bg-white text-sika-text shadow-sm focus-ring lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sika-border bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-bold text-sika-textSoft transition hover:bg-sika-cream hover:text-sika-goldDark focus-ring"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={downloadUrl}
                download={filename}
                onClick={() => setOpen(false)}
                className="gold-gradient rounded-full px-4 py-3 text-center text-sm font-bold text-white shadow-soft focus-ring"
              >
                Download App
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-sika-border bg-white px-4 py-3 text-center text-sm font-bold focus-ring"
                >
                  Login
                </a>
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-sika-border bg-white px-4 py-3 text-center text-sm font-bold text-sika-text hover:bg-sika-cream focus-ring"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
