export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">UR-ING</p>
          <p>Inženiring in svetovanje v gradbeništvu</p>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a href="mailto:info@uring.si" className="hover:text-[#d4af37]">
            info@uring.si
          </a>
          <a href="tel:041759629" className="hover:text-[#d4af37]">
            041 759 629
          </a>
        </div>
      </div>
    </footer>
  );
}