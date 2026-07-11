import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs.js";

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-[#f7f1e4]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="editorial-kicker">11 / Questions</p>
          <h2 className="mt-5 text-[34px] font-black leading-[0.96] text-sika-text md:text-[62px]">
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
                className="rounded-[22px] border border-sika-text/10 bg-white shadow-sm"
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
