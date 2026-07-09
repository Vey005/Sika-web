import { motion } from "framer-motion";
import { Clock3, ShieldCheck, UserCheck } from "lucide-react";

const features = [
  "PIN-protected cashier login",
  "Shift clock-in and clock-out",
  "Exit safeguard when closing the app",
  "Attendance logs",
  "Live heartbeat every 5 minutes",
  "Role-based permissions",
];

function StaffShift() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-sika-border bg-sika-text p-6 text-white shadow-premium"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase text-white/55">Cashier activity</p>
              <h3 className="mt-1 text-2xl font-black">Shift board</h3>
            </div>
            <span className="rounded-full bg-sika-success/15 px-3 py-1 text-xs font-black text-sika-success">
              Live
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/8 text-xs uppercase text-white/55">
                <tr>
                  <th className="px-4 py-3">Cashier</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ama", "Online", "2 mins ago"],
                  ["Kojo", "Offline", "5:40 PM"],
                  ["Esi", "Online", "Now"],
                ].map(([name, status, seen]) => (
                  <tr key={name} className="border-t border-white/10">
                    <td className="px-4 py-4 font-black">{name}</td>
                    <td className="px-4 py-4">
                      <span
                        className={
                          status === "Online"
                            ? "rounded-full bg-sika-success/15 px-2.5 py-1 text-xs font-black text-sika-success"
                            : "rounded-full bg-white/10 px-2.5 py-1 text-xs font-black text-white/60"
                        }
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-white/70">{seen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { label: "PIN Login", icon: ShieldCheck },
              { label: "Clock-in", icon: Clock3 },
              { label: "Roles", icon: UserCheck },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-lg bg-white/8 p-3">
                <Icon size={18} className="text-sika-gold" />
                <p className="mt-2 text-sm font-black text-white">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase text-sika-goldDark">Staff and shifts</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight text-sika-text md:text-[38px]">
            Control Cashier Access and Shift Activity
          </h2>
          <p className="mt-5 text-lg leading-8 text-sika-textSoft">
            Every cashier uses a secure PIN. Sika POS helps owners know who is working, when they started, and whether they properly closed their shift.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-lg border border-sika-border bg-sika-bg p-4 font-bold text-sika-textSoft">
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StaffShift;
