import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Pill,
  ShoppingBag,
  Smartphone,
  Store,
  Truck,
  Utensils,
} from "lucide-react";
import cashierCounter from "../assets/images/cashier-counter.png";

const businesses = [
  { label: "Retail shops", icon: Store },
  { label: "Supermarkets", icon: ShoppingBag },
  { label: "Pharmacies", icon: Pill },
  { label: "Restaurants", icon: Utensils },
  { label: "Wholesalers", icon: Truck },
  { label: "Mini-marts", icon: Building2 },
  { label: "Hardware stores", icon: Hammer },
  { label: "MoMo vendors", icon: Smartphone },
];

function BusinessTypes() {
  return (
    <section className="section-rule bg-[#f7f1e4]">
      <div className="container-page grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="editorial-kicker">Where Sika operates</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-black leading-none text-sika-text md:text-6xl">
            Built for counters, shelves, queues, and branches.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
            {businesses.map(({ label, icon: Icon }, index) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-sika-text/12 py-3 text-sm font-black uppercase text-sika-text transition hover:border-sika-gold"
              >
              <span className="text-sika-gold">{String(index + 1).padStart(2, "0")}</span>
              <Icon size={18} className="text-sika-muted transition group-hover:text-sika-gold" />
                {label}
              </motion.span>
            ))}
        </div>
      </div>
      <div className="container-page pb-12">
        <div className="relative overflow-hidden rounded-[30px] border border-sika-text/10 bg-white p-2 shadow-premium">
          <img
            src={cashierCounter}
            alt="Shop counter scene with a Sika POS terminal and receipt printer"
            className="w-full h-auto object-contain rounded-[24px]"
          />
          <div className="absolute bottom-5 left-5 rounded-lg border border-white/16 bg-[#070806]/82 px-4 py-3 text-sm font-black uppercase text-white shadow-soft backdrop-blur">
            Counter sales, ready
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessTypes;
