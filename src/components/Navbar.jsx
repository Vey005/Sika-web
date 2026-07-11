import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const { downloadUrl, filename } = useLatestDownloadUrl();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-4 top-4 z-50 mx-auto max-w-7xl px-5 transition-all duration-300 md:px-8 ${
      open
        ? "rounded-3xl border border-sika-border/70 bg-white/95 shadow-premium backdrop-blur-lg"
        : scrolled
        ? "rounded-3xl border border-sika-border/35 bg-white/10 shadow-premium backdrop-blur-md md:rounded-full"
        : "rounded-3xl border border-transparent bg-transparent shadow-none backdrop-blur-none"
    }`}>
      <div className="flex h-16 items-center justify-between gap-6">
        {/* Brand Logo */}
        <a href="#home" className="flex shrink-0 items-center gap-3 focus-ring">
          <img
            src={logoImg}
            alt="Sika POS logo"
            className="h-10 w-10 object-contain shadow-soft rounded-full bg-white border border-sika-border/50 p-1"
          />
          <span className="hidden text-lg font-black tracking-normal text-sika-text sm:block">Sika POS</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-tab focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons (Login removed!) */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={downloadUrl}
            download={filename}
            className="rounded-full px-5 py-2.5 text-sm font-bold text-sika-textSoft hover:text-sika-gold hover:bg-sika-goldSoft/10 transition-all duration-200 focus-ring"
          >
            Download App
          </a>
          <a
            href="#pricing"
            className="gold-gradient rounded-full px-6 py-2.5 text-sm font-extrabold text-white shadow-soft hover:shadow-lift hover:scale-[1.02] transition-all duration-200 focus-ring"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sika-border bg-white text-sika-text shadow-sm hover:bg-sika-cream transition-colors focus-ring xl:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu (Login removed!) */}
      {open && (
        <div className="mt-2 border-t border-sika-border/60 py-4 xl:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-tab-mobile focus-ring"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-sika-border/40 pt-3">
              <a
                href={downloadUrl}
                download={filename}
                onClick={() => setOpen(false)}
                className="rounded-full border border-sika-border bg-white py-3 text-center text-sm font-bold text-sika-text hover:bg-sika-cream transition-colors focus-ring"
              >
                Download App
              </a>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="gold-gradient rounded-full py-3 text-center text-sm font-bold text-white shadow-soft hover:shadow-lift transition-all focus-ring"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
