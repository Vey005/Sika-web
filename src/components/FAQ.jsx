import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs.js";

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-sika-bg">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">FAQ</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Common questions before your demo
          </h2>
          <p className="mt-5 text-lg leading-8 text-sika-textSoft">
            Quick answers for owners comparing POS systems for real shop operations in Ghana.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const active = open === index;
            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-lg border border-sika-border bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-ring"
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                >
                  <span className="font-black text-sika-text">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-sika-gold transition ${active ? "rotate-180" : ""}`}
                  />
                </button>
                {active && (
                  <div className="px-5 pb-5 pt-0 text-[15px] leading-7 text-sika-textSoft">
                    {item.answer}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
