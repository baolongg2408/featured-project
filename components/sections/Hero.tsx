"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0] as const, // Thêm "as const" vào đây
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="md:col-span-6 space-y-6"
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs font-semibold tracking-widest uppercase text-neutral-400 block"
        >
          PHOTOGRAPHER
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight"
        >
          Sở thích và <br /> trải nghiệm
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-neutral-600 leading-relaxed text-sm max-w-md"
        >
          Mỗi dự án đều là những dấu ấn những trải nghiệm của tôi mọi thứ thật
          đáng giá và thú vị khi bạn được làm việc gì đó mà bạn thích.
        </motion.p>

        <motion.div variants={fadeInUp} className="pt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="bg-black text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition-shadow shadow-md hover:shadow-lg"
          >
            Liên hệ
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="md:col-span-6"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace Laptop"
            className="w-full h-[380px] md:h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </motion.div>
    </section>
  );
}