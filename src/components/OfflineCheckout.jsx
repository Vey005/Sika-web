import { motion } from "framer-motion";
import { CheckCircle2, Database, Gauge, ReceiptText, WifiOff } from "lucide-react";
import checkoutScreen from "../assets/images/checkout-screen.png";

const bullets = [
  "Local database for instant sales",
  "Zero-latency product lookup",
  "Continue checkout without internet",
  "Auto-syncs when network returns",
];

function OfflineCheckout() {
  return (
    <section id="offline" className="section-padding overflow-hidden bg-[#f7f1e4]">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[34px] bg-sika-gold/18 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[30px] border border-sika-text/10 bg-white p-3 shadow-premium">
            <img
              src={checkoutScreen}
              alt="Offline-first checkout screen with product search, cart, and receipt controls"
              className="w-full h-auto object-contain rounded-[22px]"
            />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: "Search", value: "0.1s", icon: Gauge },
                { label: "Database", value: "Local", icon: Database },
                { label: "Receipt", value: "Ready", icon: ReceiptText },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-lg border border-white/80 bg-[#070806]/82 p-3 text-white shadow-soft backdrop-blur">
                  <Icon size={17} className="mb-2 text-sika-gold" />
                  <p className="text-xs font-black uppercase text-white/45">{label}</p>
                  <p className="text-sm font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="paper-panel relative rounded-[30px] p-7 md:p-10"
        >
          <div className="ghana-weave absolute inset-0 rounded-[30px] opacity-35" aria-hidden="true" />
          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-sika-goldSoft text-sika-goldDark">
              <WifiOff size={28} />
            </div>
            <p className="editorial-kicker">02 / Offline layer</p>
            <h2 className="mt-5 text-[34px] font-black leading-[0.96] text-sika-text md:text-[56px]">
              Checkout That Works Even When the Internet Fails
            </h2>
            <p className="mt-5 text-lg leading-8 text-sika-textSoft">
              Keep selling even when your network goes down. Cashiers can check out customers, print receipts, and search products with zero downtime.
            </p>
            <div className="mt-7 grid gap-3">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 border-b border-sika-text/10 py-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-sika-success" size={19} />
                  <span className="font-bold text-sika-textSoft">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OfflineCheckout;
