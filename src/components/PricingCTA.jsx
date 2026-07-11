import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download, Mail, MapPin, Phone } from "lucide-react";
import { useLatestDownloadUrl } from "../hooks/useLatestDownloadUrl";

// Google Sheet Apps Script Web App URL config
const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbxNii-w2e8_jhFiifNcIO5GjbSdHxgjh3FG2k4Mw2nuobk-zvVtvd5S83Nt7EXS8tb0/exec";

const plans = [
  {
    title: "Starter Shop",
    description: "For small retail shops and mini-marts.",
    points: ["Fast checkout", "Receipts", "Basic inventory"],
  },
  {
    title: "Growing Business",
    description: "For businesses that need inventory, debt tracking, and reports.",
    points: ["Supplier records", "Debt ledger", "Daily reports"],
  },
  {
    title: "Multi-Branch",
    description: "For owners managing multiple shops from one dashboard.",
    points: ["Branch comparison", "Cloud portal", "Remote permissions"],
  },
];

function PricingCTA() {
  const { downloadUrl, filename } = useLatestDownloadUrl();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send to Google Sheets (if configured)
    if (GOOGLE_SHEET_URL) {
      const data = new URLSearchParams();
      data.append("Name", name);
      data.append("Phone", phone);
      data.append("Business", business);
      data.append("Timestamp", new Date().toLocaleString());

      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }).catch((err) => console.error("Error submitting to Google Sheet:", err));
    }
    
    setSubmitted(true);
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 border-b border-sika-text/10 pb-10 lg:grid-cols-[0.42fr_1fr]"
        >
          <p className="editorial-kicker">10 / Deployment</p>
          <div>
            <h2 className="display-section text-sika-text">
              Simple Pricing for Ghanaian Businesses
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sika-textSoft">
              Configure Sika POS for one shop or multiple branches. Simple, scale-ready pricing.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="paper-panel rounded-[24px] p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="mb-5 text-xs font-black uppercase text-sika-goldDark">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-black text-sika-text">{plan.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-sika-textSoft">{plan.description}</p>
              <div className="mt-6 space-y-3">
                {plan.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-bold text-sika-textSoft">
                    <CheckCircle2 size={17} className="text-sika-success" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-[30px] border border-sika-border bg-sika-text text-white shadow-premium"
        >
          <div className="micro-grid grid gap-8 p-7 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-sika-gold">Ready to modernize your shop?</p>
              <h2 className="mt-3 text-[28px] font-black leading-tight md:text-[34px]">
                Sell faster, track stock accurately, and manage debts clearly.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/72">
                Book a demo to see how Sika POS fits your retail store, pharmacy, restaurant, or multi-branch business.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={downloadUrl}
                  download={filename}
                  className="gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-black text-[#070806] shadow-soft focus-ring"
                >
                  <Download size={18} />
                  Download Installer
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-base font-black text-white hover:bg-white/10 focus-ring"
                >
                  Book a Demo
                </a>
                <span className="text-xs font-bold text-white/60">
                  Free 14-day trial
                </span>
              </div>
            </div>

            {submitted ? (
              <div id="contact" className="rounded-[24px] border border-white/10 bg-white/8 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sika-success/20 text-sika-success">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="mt-4 text-xl font-black text-white">Demo Request Sent!</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  Thank you! We've received your request and will call you back shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setPhone("");
                    setBusiness("");
                  }}
                  className="mt-6 text-xs font-black uppercase tracking-wider text-sika-gold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div id="contact" className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                <h3 className="text-xl font-black">Book a Free Personal Demo</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  We'll call you back, show you Sika POS over video or visit your shop, and help you get set up.
                </p>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-black uppercase tracking-wider text-white/60">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Kofi Mensah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-md border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder-white/36 outline-none focus:border-sika-gold focus:bg-white/10"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-black uppercase tracking-wider text-white/60">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      placeholder="024 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-md border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder-white/36 outline-none focus:border-sika-gold focus:bg-white/10"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-black uppercase tracking-wider text-white/60">
                      Business Name & Location
                    </label>
                    <input
                      type="text"
                      id="contact-business"
                      placeholder="Adom Supermarket, Kumasi"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="mt-2 w-full rounded-md border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder-white/36 outline-none focus:border-sika-gold focus:bg-white/10"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="gold-gradient w-full rounded-md py-3.5 text-center text-sm font-black text-[#070806] shadow-soft transition hover:shadow-lift focus-ring"
                  >
                    Send Demo Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 border-t border-sika-border/60 pt-10 sm:grid-cols-3">
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sika-cream text-sika-goldDark shadow-sm">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs font-black uppercase text-sika-muted">Call or WhatsApp</p>
              <a href="tel:+233548470413" className="mt-1 block text-sm font-bold text-sika-text transition hover:text-sika-goldDark focus-ring">
                +233 548 470 413
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sika-cream text-sika-goldDark shadow-sm">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs font-black uppercase text-sika-muted">Email Us</p>
              <a href="mailto:info@dannitech.com" className="mt-1 block text-sm font-bold text-sika-text transition hover:text-sika-goldDark focus-ring">
                info@dannitech.com
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sika-cream text-sika-goldDark shadow-sm">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs font-black uppercase text-sika-muted">Office Location</p>
              <p className="mt-1 text-sm font-bold text-sika-text">
                Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingCTA;
