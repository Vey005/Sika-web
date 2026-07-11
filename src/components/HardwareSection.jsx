import { motion } from "framer-motion";
import { FileText, Printer, ReceiptText, ScanBarcode } from "lucide-react";
import cashierCounter from "../assets/images/cashier-counter.png";

const hardware = [
  {
    title: "Barcode Scanner",
    description: "USB/HID scanner support for quick item entry.",
    icon: ScanBarcode,
  },
  {
    title: "Thermal Receipt Printer",
    description: "ESC/POS printing for fast receipts.",
    icon: Printer,
  },
  {
    title: "Receipt Barcodes",
    description: "Transaction barcodes for quick returns and receipt lookups.",
    icon: ReceiptText,
  },
  {
    title: "PDF Reports",
    description: "Export clean PDF reports, invoices, and daily summaries.",
    icon: FileText,
  },
];

function HardwareSection() {
  return (
    <section id="hardware" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="editorial-kicker">08 / Counter hardware</p>
            <h2 className="mt-5 text-[34px] font-black leading-[0.96] text-sika-text md:text-[62px]">
              Connect the Tools Your Shop Already Uses
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="overflow-hidden rounded-[30px] border border-sika-text/10 bg-[#070806] p-2 shadow-premium"
          >
            <img
              src={cashierCounter}
              alt="Point-of-sale hardware counter with barcode scanner, receipt printer, and POS screen"
              className="w-full h-auto object-contain rounded-[24px]"
            />
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {hardware.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="paper-panel rounded-[24px] p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-sika-gold shadow-sm">
                <Icon size={24} />
              </div>
              <h3 className="font-black text-sika-text">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-sika-textSoft">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HardwareSection;
