import { motion } from "framer-motion";
import { CheckCircle2, Database, Gauge, ReceiptText, WifiOff } from "lucide-react";
import checkoutScreen from "../assets/images/checkout-screen.png";

const bullets = [
  "Local database for fast checkout",
  "Zero-latency product search",
  "Sales continue during internet outages",
  "Receipts and cart actions work offline",
  "Sync-ready architecture for cloud reporting",
];

function OfflineCheckout() {
  return (
    <section id="offline" className="section-padding overflow-hidden bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[34px] bg-sika-goldSoft/80 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] border border-sika-border bg-sika-cream p-3 shadow-premium">
            <img
              src={checkoutScreen}
              alt="Offline-first checkout screen with product search, cart, and receipt controls"
              className="aspect-[16/10] w-full rounded-[22px] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: "Search", value: "0.1s", icon: Gauge },
                { label: "Database", value: "Local", icon: Database },
                { label: "Receipt", value: "Ready", icon: ReceiptText },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-lg border border-white/80 bg-white/92 p-3 shadow-soft backdrop-blur">
                  <Icon size={17} className="mb-2 text-sika-gold" />
                  <p className="text-xs font-black uppercase text-sika-muted">{label}</p>
                  <p className="text-sm font-black text-sika-text">{value}</p>
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
          className="relative rounded-lg border border-sika-border bg-sika-bg p-7 md:p-9"
        >
          <div className="ghana-weave absolute inset-0 rounded-lg opacity-35" aria-hidden="true" />
          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-sika-goldSoft text-sika-goldDark">
              <WifiOff size={28} />
            </div>
            <p className="text-sm font-black uppercase text-sika-goldDark">Offline-first checkout</p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
              Checkout That Works Even When the Internet Fails
            </h2>
            <p className="mt-5 text-lg leading-8 text-sika-textSoft">
              Sika POS is built for real Ghanaian shop conditions. Your cashiers can continue selling, issuing receipts, managing carts, and recording payments even when the internet is unstable.
            </p>
            <div className="mt-7 grid gap-3">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm">
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
