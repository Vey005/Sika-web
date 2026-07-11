import { motion } from "framer-motion";
import { BookOpen, CreditCard, Gift, History, UserRound } from "lucide-react";

const cards = [
  { title: "Customer Profiles", icon: UserRound },
  { title: "Debt Tracking", icon: BookOpen },
  { title: "Pay Debt Workflow", icon: CreditCard },
  { title: "Loyalty Points", icon: Gift },
  { title: "Purchase History", icon: History },
];

function CustomerDebt() {
  return (
    <section className="section-padding bg-[#f7f1e4]">
      <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="editorial-kicker">05 / Customer memory</p>
          <h2 className="mt-5 text-[34px] font-black leading-[0.96] text-sika-text md:text-[62px]">
            Replace Credit Notebooks with a Digital Debt Ledger
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-sika-textSoft">
            Track who owes you, how much they owe, when they paid, and reward loyal customers automatically.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="paper-panel rounded-[22px] p-5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <Icon size={22} className="text-sika-gold" />
                <h3 className="mt-4 text-base font-black text-sika-text">{title}</h3>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="rounded-[30px] border border-sika-text/10 bg-[#070806] p-6 text-white shadow-premium"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase text-white/45">Customer ledger</p>
              <h3 className="mt-1 text-3xl font-black text-white">Credit clarity</h3>
            </div>
            <span className="rounded-full bg-sika-gold/14 px-3 py-1 text-xs font-black text-sika-gold">
              GH₵ 2,840 open
            </span>
          </div>
          <div className="space-y-3">
            {[
              { name: "Akosua Mensah", amount: "GH₵ 420.00", status: "Due Friday", tone: "danger" },
              { name: "Kwame Owusu", amount: "GH₵ 180.00", status: "Partial paid", tone: "gold" },
              { name: "Nana Yeboah", amount: "GH₵ 0.00", status: "Cleared", tone: "success" },
            ].map((row) => (
              <div key={row.name} className="grid grid-cols-[1fr_auto] gap-3 rounded-lg border border-white/10 bg-white/7 p-4">
                <div>
                  <p className="font-black text-white">{row.name}</p>
                  <p className="mt-1 text-sm font-bold text-white/58">{row.amount}</p>
                </div>
                <span
                  className={
                    row.tone === "success"
                      ? "self-center rounded-full bg-sika-successSoft px-3 py-1 text-xs font-black text-sika-success"
                      : row.tone === "danger"
                        ? "self-center rounded-full bg-sika-dangerSoft px-3 py-1 text-xs font-black text-sika-danger"
                        : "self-center rounded-full bg-sika-goldSoft px-3 py-1 text-xs font-black text-sika-goldDark"
                  }
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CustomerDebt;
