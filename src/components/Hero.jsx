import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CircleDollarSign,
  Cloud,
  CreditCard,
  Download,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  WifiOff,
} from "lucide-react";
import heroPos from "../assets/images/hero-pos.png";
import heroPosWebp from "../assets/images/hero-pos.webp";
import logoTransparent from "../assets/images/logo-transparent.png";
import posPayment from "../assets/images/pos-payment.png";
import posPaymentWebp from "../assets/images/pos-payment.webp";
import { useLatestDownloadUrl } from "../hooks/useLatestDownloadUrl";

const badges = [
  "Offline-first sales",
  "Ghana tax ready",
  "MoMo and split payments",
  "Thermal receipts",
  "Owner cloud portal",
];

const floatCards = [
  { label: "Today's Sales", value: "GH₵ 1,193.53", tone: "gold" },
  { label: "Low Stock Alerts", value: "7 Items", tone: "danger" },
  { label: "Active Cashier", value: "Online", tone: "success" },
];

const flowNodes = [
  {
    id: "checkout",
    label: "Checkout",
    icon: WifiOff,
    className: "left-[8%] top-[20%]",
    path: "M16 25 C32 18 40 34 50 50",
    gradientId: "flow-line-green",
    particleColor: "#22c55e",
    particleDelays: ["0s", "2s"],
    duration: 4,
  },
  {
    id: "payment",
    label: "Payment",
    icon: CreditCard,
    className: "left-[50%] top-[9%]",
    style: { x: "-50%" },
    path: "M50 12 C48 28 50 39 50 50",
    gradientId: "flow-line-gold",
    particleColor: "#f3d37a",
    particleDelays: ["0.3s", "2.05s"],
    duration: 3.5,
  },
  {
    id: "receipt",
    label: "Receipt",
    icon: ReceiptText,
    className: "right-[8%] top-[20%]",
    path: "M50 50 C61 34 68 16 84 24",
    gradientId: "flow-line-gold",
    particleColor: "#f3d37a",
    particleDelays: ["0.5s", "2.75s"],
    duration: 4.5,
  },
  {
    id: "sale",
    label: "Sale",
    icon: CircleDollarSign,
    className: "left-[11%] bottom-[22%]",
    path: "M20 78 C32 66 39 62 50 50",
    gradientId: "flow-line-gold",
    particleColor: "#f3d37a",
    particleDelays: ["0s", "1.9s"],
    duration: 3.8,
  },
  {
    id: "momo",
    label: "MoMo",
    icon: Smartphone,
    className: "right-[12%] bottom-[22%]",
    path: "M80 77 C68 66 62 61 50 50",
    gradientId: "flow-line-green",
    particleColor: "#22c55e",
    particleDelays: ["1s", "3.1s"],
    duration: 4.2,
  },
  {
    id: "stock",
    label: "Stock",
    icon: PackageCheck,
    className: "left-[33%] bottom-[10%]",
    path: "M35 90 C42 72 46 62 50 50",
    gradientId: "flow-line-red",
    particleColor: "#ef4444",
    particleDelays: ["0s", "2.4s"],
    duration: 4.8,
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    className: "right-[33%] bottom-[10%]",
    path: "M50 50 C54 62 58 72 65 90",
    gradientId: "flow-line-blue",
    particleColor: "#3b82f6",
    particleDelays: ["1.2s", "3.7s"],
    duration: 5,
  },
];

function FlowNode({ label, icon: Icon, className, index, onHoverStart, onHoverEnd, style, reduceMotion }) {
  const duration = 2.8 + (index % 3) * 0.7;
  const delay = (index % 4) * 0.4;
  const floatY = 5 + (index % 2) * 4;

  return (
    <motion.div
      style={style}
      className={`absolute z-10 flex items-center gap-1.5 rounded-full border border-sika-border/50 bg-white/92 px-2 py-1 text-[9px] font-black uppercase text-sika-textSoft shadow-soft backdrop-blur-md pointer-events-auto md:gap-2 md:px-3 md:py-2 md:text-xs ${className}`}
      animate={reduceMotion ? { y: 0, opacity: 1 } : { y: [0, -floatY, 0], opacity: [0.85, 1, 0.85] }}
      transition={reduceMotion ? { duration: 0 } : { duration, repeat: Infinity, ease: "easeInOut", delay }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileHover={
        reduceMotion
          ? {
              borderColor: "rgba(216, 161, 29, 0.45)",
              backgroundColor: "#ffffff",
              color: "#111827",
            }
          : {
              scale: 1.06,
              y: -floatY - 3,
              borderColor: "rgba(216, 161, 29, 0.45)",
              backgroundColor: "#ffffff",
              color: "#111827",
            }
      }
    >
      <Icon size={15} className="text-sika-gold" />
      {label}
    </motion.div>
  );
}

function HeroFlowAnimation() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 1.2 }}
      className="hero-flow relative w-full h-full overflow-hidden"
      aria-label="Animated Sika POS sales, stock, payments, receipt, and cloud flow"
    >
      <div className="hero-flow__grid" aria-hidden="true" />
      <div className="hero-flow__ring hero-flow__ring--outer" aria-hidden="true" />
      <div className="hero-flow__ring hero-flow__ring--inner" aria-hidden="true" />
      
      <svg className="hero-flow__mesh" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="flow-line-gold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8a11d" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#f3d37a" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#d8a11d" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="flow-line-green" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#15803d" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="flow-line-blue" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="flow-line-red" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.08" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {flowNodes.map((node) => {
          const isHighlighted = hoveredNode === node.id;
          const isAnyHovered = hoveredNode !== null;
          let pathClass = "";
          if (isAnyHovered) {
            pathClass = isHighlighted ? "path-highlighted" : "path-dimmed";
          }

          return (
            <path
              key={node.id}
              d={node.path}
              stroke={`url(#${node.gradientId})`}
              className={pathClass}
              style={{
                color: node.particleColor
              }}
            />
          );
        })}

        {!reduceMotion &&
          flowNodes.map((node) => {
            const isHighlighted = hoveredNode === node.id;
            const isAnyHovered = hoveredNode !== null;

            return node.particleDelays.map((delay, pIdx) => (
              <circle
                key={`${node.id}-particle-${pIdx}`}
                r={isHighlighted ? 0.95 : 0.68}
                fill={node.particleColor}
                filter="url(#glow)"
                opacity={isAnyHovered && !isHighlighted ? 0.32 : 1}
                style={{ transition: "r 0.3s ease, opacity 0.3s ease" }}
              >
                <animateMotion
                  dur={`${isHighlighted ? node.duration * 0.65 : node.duration}s`}
                  repeatCount="indefinite"
                  path={node.path}
                  begin={delay}
                />
              </circle>
            ));
          })}
      </svg>

      {!reduceMotion && (
        <>
          <div className="hero-flow__scan" aria-hidden="true" />
          <div className="hero-flow__particle hero-flow__particle--one" aria-hidden="true" />
          <div className="hero-flow__particle hero-flow__particle--two" aria-hidden="true" />
          <div className="hero-flow__particle hero-flow__particle--three" aria-hidden="true" />
        </>
      )}

      {flowNodes.map((node, idx) => (
        <FlowNode
          key={node.id}
          index={idx}
          label={node.label}
          icon={node.icon}
          className={node.className}
          style={node.style}
          reduceMotion={reduceMotion}
          onHoverStart={() => setHoveredNode(node.id)}
          onHoverEnd={() => setHoveredNode(null)}
        />
      ))}

      <motion.div
        style={{ x: "-50%", y: "-50%" }}
        className="hero-flow__core absolute left-1/2 top-1/2 z-20 flex h-36 w-36 items-center justify-center rounded-full border border-sika-gold/45 bg-white/90 shadow-premium backdrop-blur-xl pointer-events-auto md:h-44 md:w-44"
        animate={
          reduceMotion
            ? { boxShadow: "0 30px 90px rgba(17, 24, 39, 0.14)", scale: 1 }
            : {
                boxShadow: hoveredNode
                  ? [
                      "0 0 0 rgba(216,161,29,0.2)",
                      "0 0 85px rgba(216,161,29,0.58)",
                      "0 0 0 rgba(216,161,29,0.2)",
                    ]
                  : [
                      "0 0 0 rgba(216,161,29,0)",
                      "0 0 70px rgba(216,161,29,0.34)",
                      "0 0 0 rgba(216,161,29,0)",
                    ],
                scale: hoveredNode ? 1.05 : 1,
              }
        }
        transition={reduceMotion ? { duration: 0 } : { duration: hoveredNode ? 1.6 : 3.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={reduceMotion ? { scale: 1.02 } : { scale: 1.06, rotate: 2 }}
      >
        <div className={`absolute inset-2 rounded-full border border-dashed border-black/5 ${reduceMotion ? "" : "animate-spin"}`} style={{ animationDuration: "25s" }} />
        <div className={`absolute inset-4 rounded-full border border-dashed border-sika-gold/20 ${reduceMotion ? "" : "animate-spin"}`} style={{ animationDuration: "15s", animationDirection: "reverse" }} />

        <img
          src={logoTransparent}
          alt="Sika POS"
          className="h-28 w-28 object-contain drop-shadow-[0_16px_34px_rgba(216,161,29,0.34)] md:h-36 md:w-36 relative z-10"
        />
      </motion.div>

      <h1 className="sr-only">Run Your Shop Faster with Sika POS</h1>
    </motion.div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const {
    downloadUrl,
    filename,
    isLoading: isDownloadLoading,
    isReady: isDownloadReady,
  } = useLatestDownloadUrl();
  const downloadLabel = isDownloadLoading
    ? "Checking installer..."
    : isDownloadReady
      ? "Download for Windows"
      : "Contact for installer";

  return (
    <section id="home" className="relative overflow-hidden pb-16 text-sika-text">
      {/* 1. Full-bleed showblock for animation at the top */}
      <div className="relative w-full h-[460px] md:h-[520px] lg:h-[580px] pt-20 border-b border-sika-border/30 bg-transparent">
        <HeroFlowAnimation />
      </div>

      <div className="absolute left-0 top-[600px] h-56 w-56 rounded-full bg-sika-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-[700px] h-64 w-64 rounded-full bg-sika-success/10 blur-3xl" aria-hidden="true" />

      <div className="container-page pt-10 md:pt-14">
        <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="max-w-xl text-lg leading-8 text-sika-textSoft"
            >
              Sika POS turns checkout, stock, customer debt, staff shifts, receipts, MoMo payments, and branch reporting into one fast offline-first system for real shop conditions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={isDownloadReady ? downloadUrl : isDownloadLoading ? undefined : "#contact"}
                download={isDownloadReady && filename ? filename : undefined}
                className="gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-black text-[#070806] shadow-soft transition hover:shadow-lift focus-ring"
                aria-disabled={!isDownloadReady}
              >
                <Download size={18} />
                {downloadLabel}
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sika-border bg-white px-6 py-3.5 text-base font-black text-sika-text transition hover:bg-sika-cream focus-ring"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-8 grid gap-2 sm:grid-cols-2"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-3 rounded-lg border border-sika-border bg-white/80 px-3 py-3 text-sm font-bold text-sika-muted"
                >
                  <span className="h-2 w-2 rounded-full bg-sika-gold" />
                  {badge}
                </span>
              ))}
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-sika-border pt-6">
              {[
                ["Windows", "10 & 11"],
                ["Install", "Ready"],
                ["Currency", "GH₵"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[11px] font-black uppercase text-sika-muted">{label}</p>
                  <p className="mt-1 text-base font-black text-sika-text">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative lg:pt-7"
          >
            <div className="absolute -inset-8 rounded-[42px] bg-gradient-to-br from-sika-gold/18 via-white to-sika-success/10 blur-3xl" aria-hidden="true" />
            <div className="relative rotate-0 overflow-hidden rounded-[30px] border border-white bg-sika-cream p-3 shadow-premium lg:-rotate-2">
              <picture>
                <source srcSet={heroPosWebp} type="image/webp" />
                <img
                  src={heroPos}
                  alt="Sika POS checkout screen showing product cards, cart totals, and cashier controls"
                  className="w-full h-auto object-contain rounded-[22px] shadow-soft"
                  decoding="async"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </picture>
              <div className="absolute left-5 top-5 hidden rounded-full border border-sika-success/20 bg-white/94 px-4 py-2 text-sm font-black text-sika-text shadow-soft backdrop-blur md:flex md:items-center md:gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sika-success" />
                System Up-to-Date
              </div>

              <motion.div
                className="absolute -left-4 bottom-7 hidden w-48 rounded-lg border border-sika-border bg-white p-3 text-sika-text shadow-premium backdrop-blur md:block z-10"
                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={reduceMotion ? { borderColor: "rgba(216, 161, 29, 0.35)" } : { scale: 1.04, y: -10, borderColor: "rgba(216, 161, 29, 0.35)" }}
              >
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
              </motion.div>

              <motion.div
                className="absolute -right-3 top-8 hidden w-56 rounded-lg border border-sika-border bg-white p-3 text-sika-text shadow-premium backdrop-blur md:block z-10"
                animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
                transition={reduceMotion ? undefined : { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                whileHover={reduceMotion ? { borderColor: "rgba(216, 161, 29, 0.35)" } : { scale: 1.04, y: 10, borderColor: "rgba(216, 161, 29, 0.35)" }}
              >
                <div className="flex items-center gap-3">
                  <picture>
                    <source srcSet={posPaymentWebp} type="image/webp" />
                    <img
                      src={posPayment}
                      alt="Sika POS payment method panel"
                      className="h-14 w-16 rounded-lg object-cover"
                      decoding="async"
                      loading="lazy"
                    />
                  </picture>
                  <div>
                    <p className="text-xs font-black uppercase text-sika-muted">Payment layer</p>
                    <p className="text-sm font-black text-sika-text">Split payment ready</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-12 lg:left-8 lg:right-8 lg:mt-0 z-20">
              {floatCards.map((card, idx) => (
                <motion.div
                  key={card.label}
                  className="rounded-lg border border-sika-border bg-white/96 p-3 text-sika-text shadow-soft backdrop-blur hover:border-sika-gold/30"
                  animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                  transition={reduceMotion ? undefined : { duration: 4.2 + idx * 0.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  whileHover={reduceMotion ? { scale: 1.01 } : { scale: 1.03, y: -7 }}
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
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute -bottom-4 -right-2 hidden rounded-full border border-sika-border bg-white px-4 py-2 text-sm font-black text-sika-text shadow-soft lg:flex lg:items-center lg:gap-2 z-20"
              animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={reduceMotion ? undefined : { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={reduceMotion ? { scale: 1.01 } : { scale: 1.04 }}
            >
              <WifiOff size={16} className="text-sika-gold" />
              Offline checkout active
            </motion.div>

            <motion.div
              className="absolute -top-3 left-5 hidden rounded-full border border-sika-border bg-white/90 px-4 py-2 text-xs font-black uppercase text-sika-muted backdrop-blur lg:flex lg:items-center lg:gap-2 z-20"
              animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={reduceMotion ? undefined : { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={reduceMotion ? { scale: 1.01 } : { scale: 1.04 }}
            >
              <ShieldCheck size={15} className="text-sika-success" />
              Secure cashier layer
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-3 border-y border-sika-border py-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex items-center gap-3 text-sm font-black uppercase text-sika-muted">
            <CircleDollarSign size={18} className="text-sika-gold" />
            Built around cash flow
          </div>
          <div className="overflow-hidden whitespace-nowrap text-sm font-black uppercase text-sika-textSoft">
            <div className="ticker-track inline-flex min-w-max gap-8">
              {[...badges, ...badges, ...badges].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="hidden justify-end text-sm font-black uppercase text-sika-muted md:flex">
            DanniTech Solutions / Accra
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
