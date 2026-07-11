import { useLatestDownloadUrl } from "../hooks/useLatestDownloadUrl";
import logoImg from "../assets/images/logo.png";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Offline Checkout", href: "#offline" },
      { label: "Inventory", href: "#inventory" },
      { label: "Cloud Portal", href: "#cloud" },
      { label: "Hardware", href: "#hardware" },
      { label: "Download App", href: "#", download: true },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Retail Shops", href: "#features" },
      { label: "Supermarkets", href: "#features" },
      { label: "Pharmacies", href: "#features" },
      { label: "Restaurants", href: "#features" },
      { label: "Wholesale Rooms", href: "#features" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Sika POS", href: "#home" },
      { label: "DanniTech Solutions", href: "#contact" },
    ],
  },
];

function Footer() {
  const { downloadUrl, filename } = useLatestDownloadUrl();

  return (
    <footer className="section-rule-dark bg-[#070806] text-white">
      <div className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#home" className="flex items-center gap-3 focus-ring">
              <img
                src={logoImg}
                alt="Sika POS logo"
                className="h-14 w-14 rounded-full border border-white/14 bg-white object-contain p-1 shadow-soft"
              />
              <span className="text-xl font-black text-white">Sika POS</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Offline-first point-of-sale software built for Ghanaian shops, stock rooms, cashiers, and business owners.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black uppercase text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.download ? downloadUrl : link.href}
                        download={link.download ? filename : undefined}
                        className="text-sm font-bold text-white/56 transition hover:text-sika-gold focus-ring"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm font-bold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sika POS. Built for Ghanaian businesses.</p>
          <p>DanniTech Solutions, Achimota, Accra</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
