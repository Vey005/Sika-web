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
    <footer className="bg-white">
      <div className="container-page border-t border-sika-border py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#home" className="flex items-center gap-3 focus-ring">
              <img
                src={logoImg}
                alt="Sika POS logo"
                className="h-14 w-14 object-contain shadow-soft rounded-full bg-white border border-sika-border/60 p-1"
              />
              <span className="text-xl font-black text-sika-text">Sika POS</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-sika-textSoft">
              Offline-first point-of-sale software built for Ghanaian shops, stock rooms, cashiers, and business owners.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black uppercase text-sika-text">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.download ? downloadUrl : link.href}
                        download={link.download ? filename : undefined}
                        className="text-sm font-bold text-sika-textSoft transition hover:text-sika-goldDark focus-ring"
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
        <div className="mt-10 flex flex-col gap-3 border-t border-sika-border pt-6 text-sm font-bold text-sika-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sika POS. Built for Ghanaian businesses.</p>
          <p>DanniTech Solutions, Achimota, Accra</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
