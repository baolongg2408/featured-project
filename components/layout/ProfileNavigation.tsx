"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ProfileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileNavigation({
  isOpen,
  onClose,
}: ProfileNavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />

          {/* Navigation Panel */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed left-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-[#F7F4EF] z-50 shadow-2xl overflow-y-auto"
          >
            {/* Header panel */}
            <div className="flex justify-end p-5">
              <button
                onClick={onClose}
                className="text-2xl leading-none hover:rotate-90 transition-transform duration-300"
              >
                ×
              </button>
            </div>

            <div className="px-8 pb-10">

              {/* Avatar */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="/avatar.jpg"
                    alt="Phạm Bảo Long"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="mt-5 text-xl font-extrabold tracking-wide">
                  PHẠM BẢO LONG
                </h2>

                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                  IT • CREATIVE
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-300 my-8" />

              {/* Thông tin */}
              <section className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase">
                  Thông tin cá nhân
                </h3>

                <div className="space-y-3 text-sm text-neutral-600">
                  <p>📍 Bình Dương</p>
                  <p>💻 Công nghệ thông tin</p>
                  <p>🎓 IT Graduate</p>
                </div>
              </section>

              {/* Kỹ năng */}
              <section className="mt-8 space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase">
                  Kỹ năng
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "C#",
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "Flutter",
                    "Next.js",
                    "React",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white rounded-full text-xs text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Kỹ năng mềm */}
              <section className="mt-8 space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase">
                  Kỹ năng mềm
                </h3>

                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Tư duy sáng tạo</li>
                  <li>• Làm việc nhóm</li>
                  <li>• Học hỏi nhanh</li>
                  <li>• Tỉ mỉ và chú ý chi tiết</li>
                </ul>
              </section>

              {/* Sở thích */}
              <section className="mt-8 space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase">
                  Sở thích
                </h3>

                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>🎹 Âm nhạc</li>
                  <li>📷 Nhiếp ảnh</li>
                  <li>🌿 Thủy sinh</li>
                </ul>
              </section>

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}