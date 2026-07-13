import { motion } from "framer-motion";
import { BarChart3, Download, ReceiptText } from "lucide-react";
import posPayment from "../assets/images/pos-payment.png";
import posPaymentWebp from "../assets/images/pos-payment.webp";

const reportTypes = [
  "Daily Sales Summary",
  "Checkout Receipts",
  "Inventory Reports",
  "Debt Reports",
  "Restock Reports",
  "Cashier Shift Reports",
  "PDF Export",
];

function ReportsSection() {
  return (
    <section className="section-padding bg-sika-bg">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">09 / Decision layer</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Clear Reports for Better Business Decisions
          </h2>
          <p className="mt-5 text-lg leading-8 text-sika-textSoft">
            Access instant summaries of sales, profit margin, product movement, cash flow, and cashier shifts.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {reportTypes.map((type) => (
              <span key={type} className="rounded-full border border-sika-border bg-white px-3 py-2 text-sm font-bold text-sika-textSoft">
                {type}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="overflow-hidden rounded-[28px] border border-sika-border bg-sika-cream p-2 shadow-premium flex items-center justify-center">
            <picture>
              <source srcSet={posPaymentWebp} type="image/webp" />
              <img
                src={posPayment}
                alt="Sika POS payment and receipt reporting screen"
                className="w-full h-auto object-contain rounded-[22px]"
                decoding="async"
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </picture>
          </div>
          <div className="rounded-lg border border-sika-border bg-white p-6 shadow-premium">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase text-sika-muted">Daily report</p>
                <h3 className="mt-1 text-2xl font-black text-sika-text">Sales mix</h3>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sika-goldSoft text-sika-goldDark">
                <BarChart3 size={22} />
              </span>
            </div>
            <div className="space-y-4">
              {[
                ["Total Sales", "GH₵ 4,850.00", "gold"],
                ["MoMo Sales", "GH₵ 1,420.00", "blue"],
                ["Cash Sales", "GH₵ 3,100.00", "success"],
                ["Credit Sales", "GH₵ 330.00", "danger"],
              ].map(([label, value, tone]) => (
                <div key={label} className="flex items-center justify-between rounded-lg bg-sika-bg p-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={
                        tone === "success"
                          ? "h-3 w-3 rounded-full bg-sika-success"
                          : tone === "danger"
                            ? "h-3 w-3 rounded-full bg-sika-danger"
                            : tone === "blue"
                              ? "h-3 w-3 rounded-full bg-sika-blueSubtle"
                              : "h-3 w-3 rounded-full bg-sika-gold"
                      }
                    />
                    <span className="text-sm font-bold text-sika-textSoft">{label}</span>
                  </div>
                  <span className="font-black text-sika-text">{value}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sika-text px-5 py-3 text-sm font-black text-white transition hover:bg-black focus-ring"
            >
              <Download size={17} />
              Export PDF
            </button>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-sika-muted">
              <ReceiptText size={16} className="text-sika-gold" />
              Receipt-ready summaries for daily close
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ReportsSection;
