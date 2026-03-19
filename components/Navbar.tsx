import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f10]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-4">
          <Image
            src="/ur-ing-logo-faithful.svg"
            alt="UR-ING logotip"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden gap-6 md:flex">
          <a
            href="/o-podjetju"
            className="text-sm font-medium text-slate-300 hover:text-white"
          >
            O podjetju
          </a>
          <a
            href="/#storitve"
            className="text-sm font-medium text-slate-300 hover:text-white"
          >
            Storitve
          </a>
          <a
            href="/#kontakt"
            className="text-sm font-medium text-slate-300 hover:text-white"
          >
            Kontakt
          </a>
          <a
            href="/#kontakt"
            className="rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-medium text-black hover:opacity-90"
          >
            Povpraševanje
          </a>
        </nav>
      </div>
    </header>
  );
}