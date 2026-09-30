export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-neutral-200/50 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
      <div>
        © 2024 Phạm Bảo Long. Tất cả quyền được bảo lưu.
      </div>

      <div className="flex space-x-6">
        {["LinkedIn", "Facebook", "TikTok"].map((social, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:text-neutral-700 transition-colors duration-300"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
}