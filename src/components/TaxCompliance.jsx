import { motion } from "framer-motion";
import { CircleDollarSign, FileText, Landmark, ReceiptText } from "lucide-react";

const taxCards = [
  { label: "VAT", detail: "Configurable tax line" },
  { label: "NHIL", detail: "Health insurance levy" },
  { label: "GETFund", detail: "Education fund levy" },
  { label: "COVID-19 Levy", detail: "Local compliance support" },
];

function TaxCompliance() {
  return (
    <section className="section-padding bg-sika-cream">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">Ghana tax compliance</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Built for Ghanaian Tax and Receipt Requirements
          </h2>
          <p className="mt-5 text-lg leading-8 text-sika-textSoft">
            Sika POS helps businesses calculate local levies correctly and print receipts in a format customers understand.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { icon: CircleDollarSign, label: "Native Ghana Cedi", value: "GH₵" },
              { icon: ReceiptText, label: "Local receipts", value: "Thermal + PDF" },
              { icon: FileText, label: "Daily summaries", value: "Clean exports" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg border border-sika-border bg-white p-4 shadow-sm">
                <Icon size={20} className="text-sika-gold" />
                <p className="mt-3 text-xs font-black uppercase text-sika-muted">{label}</p>
                <p className="mt-1 font-black text-sika-text">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {taxCards.map((card, index) => (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-lg border border-sika-gold/20 bg-white p-6 shadow-soft"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sika-goldSoft text-sika-goldDark">
                  <Landmark size={24} />
                </div>
                <span className="rounded-full bg-sika-successSoft px-3 py-1 text-xs font-black text-sika-success">
                  Supported
                </span>
              </div>
              <h3 className="text-2xl font-black text-sika-text">{card.label}</h3>
              <p className="mt-2 text-sm font-bold text-sika-textSoft">{card.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaxCompliance;
