"use client";

import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#1A1A1A] text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
    >
      <div className="space-y-2 max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Bạn cần một bộ ảnh nghệ thuật?
        </h2>

        <p className="text-xs text-neutral-400">
          Hãy để lại thông tin, tôi sẽ phản hồi trong vòng 24 giờ.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="bg-white text-black font-semibold text-xs px-6 py-3.5 rounded-lg hover:bg-neutral-100 transition-all shadow-md"
      >
        Gửi tin nhắn
      </motion.button>
    </motion.section>
  );
}