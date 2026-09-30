"use client";

import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 block mb-1">
            DỰ ÁN NỔI BẬT
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
            Một số dự án gần đây
          </h2>
        </div>

        <a
          href="#all"
          className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors flex items-center gap-1 group"
        >
          Xem tất cả

          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
        >
          <div className="h-64 overflow-hidden bg-neutral-900 relative">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
              alt="Portrait Series"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6 space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              CHÂN DUNG
            </span>

            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
              Portrait Series
            </h3>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Bộ ảnh tập trung vào ánh sáng tự nhiên và cảm xúc chân thực.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
        >
          <div className="h-64 overflow-hidden bg-neutral-100 relative">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Editorial Fashion"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6 space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              THỜI TRANG
            </span>

            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
              Editorial Fashion
            </h3>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Dự án chụp hình cho thương hiệu thời trang với phong cách tối
              giản.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}