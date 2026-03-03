import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919082274858"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="global.whatsapp_button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white rounded-full w-14 h-14 flex items-center justify-center shadow-teal"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
