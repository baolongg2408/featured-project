"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Kinh nghiệm */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 space-y-6"
      >
        <h2 className="text-2xl font-bold text-neutral-900">
          Kinh nghiệm
        </h2>

        <div className="space-y-6">
          <div className="border-b border-neutral-200/60 pb-4">
            <h3 className="text-base font-bold text-neutral-800">
              Freelance Photographer
            </h3>

            <span className="text-xs text-neutral-400">
              2023 - Hiện tại
            </span>

            <p className="text-xs text-neutral-500 mt-2">
              Chụp ảnh tự do phong cách cảm xúc thương mại/life style.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-neutral-800">
              Developer in home
            </h3>

            <span className="text-xs text-neutral-400">
              2023 - Hiện tại
            </span>

            <p className="text-xs text-neutral-500 mt-2">
              Phát triển các dự án cá nhân.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Thể loại */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5"
      >
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-neutral-900">
            Thể loại
          </h3>

          <ul className="space-y-3 text-xs text-neutral-600">
            {["Chân dung", "Thời trang", "Đồ họa"].map((cat, i) => (
              <li
                key={i}
                className="hover:text-black hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />

                {cat}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}