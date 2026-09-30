"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProfileNavigation from "./ProfileNavigation";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center border-b border-neutral-400">

          {/* Bên trái */}
          <motion.button
            type="button"
            onClick={() => setIsProfileOpen(true)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="flex flex-col gap-[3px] justify-center items-center w-5 h-5">
              <span className="w-full h-[2px] bg-neutral-900" />
              <span className="w-full h-[2px] bg-neutral-900" />
              <span className="w-full h-[2px] bg-neutral-900" />
              <span className="w-full h-[2px] bg-neutral-900" />
            </div>

            <span className="font-extrabold text-sm md:text-base tracking-wider uppercase text-neutral-900">
              PHẠM BẢO LONG
            </span>
          </motion.button>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6 md:space-x-10 text-xs md:text-sm font-semibold text-neutral-800"
          >
            {["Dự án", "Thể loại", "Liên hệ"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-black transition-colors duration-300 relative group py-1"
              >
                {item}

                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      <ProfileNavigation
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}