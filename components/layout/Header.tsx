"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="font-bold text-lg tracking-wider uppercase text-neutral-800"
      >
        PHẠM BẢO LONG
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex space-x-8 text-sm font-medium text-neutral-600"
      >
        {["Dự án", "Thể loại", "Liên hệ"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item}`}
            className="hover:text-black transition-colors duration-300 relative group py-1"
          >
            {item}

            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </motion.nav>
    </header>
  );
}