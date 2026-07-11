import { motion } from "framer-motion";
import {
  BookOpen,
  Cloud,
  CreditCard,
  Package,
  ReceiptText,
  ScanBarcode,
  ShoppingCart,
  Users,
  WifiOff,
} from "lucide-react";
import { coreFeatures } from "../data/features.js";

const icons = {
  ShoppingCart,
  WifiOff,
  CreditCard,
  Package,
  BookOpen,
  ReceiptText,
  Users,
  Cloud,
  ScanBarcode,
};

function FeatureGrid() {
  return (
    <section id="features" className="section-padding bg-sika-bg">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">01 / Our edge</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Everything your shop needs, without the clutter
          </h2>
          <p className="mt-4 text-lg leading-8 text-sika-textSoft">
            Sika POS keeps checkout fast while giving owners control over stock, cash flow, and customers.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-lg border border-sika-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sika-goldSoft text-sika-goldDark">
                  <Icon size={23} strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-black text-sika-text">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-sika-textSoft">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
