import { motion } from "framer-motion";
import { BarChart3, Building2, Cloud, MapPin, Smartphone } from "lucide-react";

const features = [
  "Consolidated owner dashboard",
  "Multi-store sales comparison",
  "Product performance tracking",
  "Cash flow visibility",
  "Remote role permissions",
  "Mobile-ready owner portal",
  "iOS and Android app support through Capacitor",
];

function CloudPortal() {
  return (
    <section id="cloud" className="section-padding bg-sika-bg">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">Cloud portal and multi-store</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Monitor Every Branch from One Owner Dashboard
          </h2>
          <p className="mt-5 text-lg leading-8 text-sika-textSoft">
            For growing businesses, Sika POS connects shop activity to a cloud portal where owners can compare branches, view sales, monitor stock, and manage permissions remotely.
          </p>
          <div className="mt-7 grid gap-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-lg border border-sika-border bg-white p-3 shadow-sm">
                <Cloud className="shrink-0 text-sika-gold" size={18} />
                <span className="font-bold text-sika-textSoft">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-sika-border bg-white p-5 shadow-premium"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase text-sika-muted">Owner portal</p>
              <h3 className="mt-1 text-2xl font-black text-sika-text">Branch pulse</h3>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sika-goldSoft text-sika-goldDark">
              <BarChart3 size={22} />
            </span>
          </div>
          <div className="grid gap-4">
            {[
              { name: "Main Branch", place: "Achimota", sales: "GH₵ 8,940", status: "Online" },
              { name: "East Legon Branch", place: "East Legon", sales: "GH₵ 5,220", status: "Online" },
              { name: "Achimota Branch", place: "Accra", sales: "GH₵ 3,610", status: "Syncing" },
            ].map((branch) => (
              <article key={branch.name} className="rounded-lg border border-sika-border bg-sika-bg p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-sika-gold shadow-sm">
                      <Building2 size={20} />
                    </span>
                    <div>
                      <h4 className="font-black text-sika-text">{branch.name}</h4>
                      <p className="mt-1 flex items-center gap-1 text-sm font-bold text-sika-muted">
                        <MapPin size={14} />
                        {branch.place}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-sika-successSoft px-3 py-1 text-xs font-black text-sika-success">
                    {branch.status}
                  </span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-black uppercase text-sika-muted">Today</p>
                    <p className="text-2xl font-black text-sika-text">{branch.sales}</p>
                  </div>
                  <div className="h-10 w-28 rounded-lg bg-gradient-to-r from-sika-gold/10 via-sika-success/20 to-sika-blueSubtle/10" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-lg bg-sika-text p-4 text-white">
            <Smartphone size={20} className="text-sika-gold" />
            <p className="font-bold">Owner portal stays mobile-ready for quick checks away from the shop.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CloudPortal;
