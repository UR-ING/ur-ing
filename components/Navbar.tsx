import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f10]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-4">
          <Image
            src="/ur-ing-logo-faithful.svg"
            alt="UR-ING logotip"
            width={220}
            height={70}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* MENI */}
        <nav className="hidden items-center gap-6 md:flex">
          
          <a
            href="/o-podjetju"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            O podjetju
          </a>
        <a
           href="/adaptacije"
           className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
           Adaptacije
          </a>

          <a
            href="/novogradnje"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Novogradnje
          </a> 
         <a
            href="/finalizacija-objektov"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Finalizacija objektov
          </a>

          <a
            href="/#storitve"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Storitve
          </a>

          <a
            href="/#kontakt"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Kontakt
          </a>

          <a
            href="/#kontakt"
            className="rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Povpraševanje
          </a>
        </nav>
      </div>
    </header>
  );
}