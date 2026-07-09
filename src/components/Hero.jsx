import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Download,
  ReceiptText,
  WifiOff,
} from "lucide-react";
import heroPos from "../assets/images/hero-pos.png";
import posPayment from "../assets/images/pos-payment.png";
import { useLatestDownloadUrl } from "../hooks/useLatestDownloadUrl";

const badges = [
  "Offline-first",
  "Ghana tax ready",
  "MoMo friendly",
  "Receipt printing",
  "Multi-store support",
];

const floatCards = [
  { label: "Today's Sales", value: "GH₵ 1,193.53", tone: "gold" },
  { label: "Low Stock Alerts", value: "7 Items", tone: "danger" },
  { label: "Active Cashier", value: "Online", tone: "success" },
];

function Hero() {
  const { downloadUrl, filename } = useLatestDownloadUrl();
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
      <div className="absolute left-0 top-24 h-56 w-56 rounded-full bg-sika-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-32 h-64 w-64 rounded-full bg-sika-success/10 blur-3xl" aria-hidden="true" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-sika-gold/20 bg-white px-4 py-2 text-sm font-bold text-sika-goldDark shadow-sm"
          >
            <BadgeCheck size={17} />
            Built for Ghanaian commerce
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="max-w-3xl text-[38px] font-black leading-[1.02] tracking-normal text-sika-text md:text-[56px]"
          >
            Run Your Shop Faster with Sika POS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-sika-textSoft"
          >
            A powerful offline-first point-of-sale system built for Ghanaian businesses. Sell faster, manage stock, track debts, print receipts, accept MoMo, and monitor every branch from one dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={downloadUrl}
              download={filename}
              className="gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-extrabold text-white shadow-soft transition hover:shadow-lift focus-ring"
            >
              <Download size={18} />
              Download for Windows
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-sika-border bg-white px-6 py-3.5 text-base font-extrabold text-sika-text transition hover:bg-sika-cream focus-ring"
            >
              Book a Free Demo
            </a>
            <span className="text-xs font-bold text-sika-muted mt-1 sm:mt-0 sm:ml-2">
              Supports Windows 10 & 11
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-sika-border bg-white/80 px-3 py-2 text-sm font-bold text-sika-muted"
              >
                <CheckCircle2 className="text-sika-success" size={16} />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-sika-gold/18 via-white to-sika-success/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[28px] border border-white bg-sika-cream p-3 shadow-premium">
            <img
              src={heroPos}
              alt="Sika POS checkout screen showing product cards, cart totals, and cashier controls"
              className="aspect-[16/10] w-full rounded-[22px] object-cover shadow-soft"
            />
            <div className="absolute left-4 top-4 hidden rounded-lg border border-sika-success/20 bg-white/94 px-3 py-2 text-sm font-black text-sika-text shadow-soft backdrop-blur md:flex md:items-center md:gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-sika-success" />
              System Up-to-Date
            </div>

            <div className="absolute -left-4 bottom-7 hidden w-48 rounded-lg border border-sika-border bg-white p-3 shadow-premium transition hover:-translate-y-1 md:block">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase text-sika-muted">Receipt</span>
                <ReceiptText size={16} className="text-sika-gold" />
              </div>
              <div className="space-y-1.5 text-xs text-sika-textSoft">
                <div className="flex justify-between"><span>Rice 5kg</span><span>84.00</span></div>
                <div className="flex justify-between"><span>Soap pack</span><span>42.50</span></div>
                <div className="border-t border-dashed border-sika-border pt-1.5 font-black text-sika-text">
                  <div className="flex justify-between"><span>Total</span><span>GH₵126.50</span></div>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-8 hidden w-56 rounded-lg border border-sika-border bg-white p-3 shadow-premium md:block">
              <div className="flex items-center gap-3">
                <img
                  src={posPayment}
                  alt="Sika POS payment method panel"
                  className="h-14 w-16 rounded-lg object-cover"
                />
                <div>
                  <p className="text-xs font-black uppercase text-sika-muted">MoMo friendly</p>
                  <p className="text-sm font-black text-sika-text">Split payment ready</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-9 lg:left-8 lg:right-8 lg:mt-0">
            {floatCards.map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-sika-border bg-white/96 p-3 shadow-soft backdrop-blur transition hover:-translate-y-1"
              >
                <p className="text-xs font-black uppercase text-sika-muted">{card.label}</p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-base font-black text-sika-text">{card.value}</p>
                  <span
                    className={
                      card.tone === "success"
                        ? "rounded-full bg-sika-successSoft px-2 py-1 text-xs font-black text-sika-success"
                        : card.tone === "danger"
                          ? "rounded-full bg-sika-dangerSoft px-2 py-1 text-xs font-black text-sika-danger"
                          : "rounded-full bg-sika-goldSoft px-2 py-1 text-xs font-black text-sika-goldDark"
                    }
                  >
                    {card.tone === "success" ? "Live" : card.tone === "danger" ? "Watch" : "Now"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-3 -right-2 hidden rounded-full border border-sika-border bg-white px-4 py-2 text-sm font-black text-sika-text shadow-soft lg:flex lg:items-center lg:gap-2">
            <WifiOff size={16} className="text-sika-gold" />
            Offline checkout active
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
