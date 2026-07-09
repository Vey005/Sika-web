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
    <section className="border-y border-sika-border bg-white">
      <div className="container-page grid gap-6 py-8 lg:grid-cols-[1fr_320px] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-black uppercase text-sika-goldDark">
            Built for everyday Ghanaian businesses
          </p>
          <div className="flex flex-wrap gap-2.5">
            {businesses.map(({ label, icon: Icon }, index) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="inline-flex items-center gap-2 rounded-full border border-sika-border bg-sika-bg px-3.5 py-2 text-sm font-bold text-sika-textSoft"
              >
                <Icon size={16} className="text-sika-gold" />
                {label}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="relative hidden overflow-hidden rounded-[28px] border border-sika-border bg-sika-cream p-2 shadow-soft lg:block">
          <img
            src={cashierCounter}
            alt="Shop counter scene with a Sika POS terminal and receipt printer"
            className="h-40 w-full rounded-[22px] object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-white/92 px-3 py-2 text-sm font-black text-sika-text shadow-soft">
            Ready for counter sales
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessTypes;
