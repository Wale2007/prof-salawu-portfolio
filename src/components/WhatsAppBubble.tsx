"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsAppBubble() {
  const whatsappUrl = "https://wa.me/2348137886171?text=Hello%20Prof.%20Salawu%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20reach%20out%20regarding...";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform flex items-center justify-center cursor-pointer group relative"
        >
          <FaWhatsapp className="w-8 h-8" />
          
          {/* Tooltip */}
          <span className="absolute -top-12 right-0 w-max bg-white text-slate-800 text-sm py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with Prof. Salawu on WhatsApp
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
