import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, PackageCheck, Printer } from "lucide-react";
import inventoryDashboard from "../assets/images/inventory-dashboard.png";

const items = [
  "Pack and piece unit conversion",
  "Low-stock alerts",
  "Printable shopping list",
  "Restock history",
  "Supplier invoice tracking",
  "Cost price records",
  "Excel/CSV import and export",
];

function InventorySection() {
  return (
    <section id="inventory" className="section-padding bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">Inventory and suppliers</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Know What Is in Stock Before It Becomes a Problem
          </h2>
          <p className="mt-5 text-lg leading-8 text-sika-textSoft">
            Sika POS gives business owners clear control over stock levels, restocking, supplier invoices, and product movement.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-sika-border bg-sika-bg p-3">
                <CheckCircle2 className="shrink-0 text-sika-success" size={18} />
                <span className="text-sm font-bold text-sika-textSoft">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-sika-success/10 via-white to-sika-danger/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[28px] border border-sika-border bg-white p-3 shadow-premium">
            <img
              src={inventoryDashboard}
              alt="Inventory dashboard with stock levels, low stock alerts, and product movement"
              className="aspect-[16/10] w-full rounded-[22px] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "In Stock", value: "1,532", icon: PackageCheck, className: "text-sika-success bg-sika-successSoft" },
                { label: "Low Stock", value: "254", icon: AlertTriangle, className: "text-sika-danger bg-sika-dangerSoft" },
                { label: "Out of Stock", value: "70", icon: Printer, className: "text-sika-goldDark bg-sika-goldSoft" },
              ].map(({ label, value, icon: Icon, className }) => (
                <div key={label} className="rounded-lg border border-white/80 bg-white/94 p-3 shadow-soft backdrop-blur">
                  <div className={`mb-2 inline-flex rounded-full p-1.5 ${className}`}>
                    <Icon size={16} />
                  </div>
                  <p className="text-xs font-black uppercase text-sika-muted">{label}</p>
                  <p className="text-lg font-black text-sika-text">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default InventorySection;
