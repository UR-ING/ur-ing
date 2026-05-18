export default function NovogradnjePage() {
  return (
    <main className="bg-[#0f0f10] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-[#161616] to-[#0f0f10] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Novogradnje
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Strokovno vodenje in izvedba novogradenj
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Pri UR-ING sodelujemo pri izvedbi novogradenj z jasnim poudarkom
            na kakovosti, organizaciji in usklajenem poteku gradnje od začetka
            do zaključka projekta.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                Stanovanjske hiše
              </h3>

              <p className="leading-7 text-slate-300">
                Izvedba sodobnih stanovanjskih objektov z usklajenim vodenjem
                gradnje in nadzorom izvedbe.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                Poslovni objekti
              </h3>

              <p className="leading-7 text-slate-300">
                Gradnja poslovnih prostorov in objektov glede na potrebe
                investitorja in uporabnikov.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                Organizacija gradnje
              </h3>

              <p className="leading-7 text-slate-300">
                Koordinacija izvajalcev, organizacija faz gradnje in nadzor
                kakovosti izvedbe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold">
              Gradnja z jasnim ciljem
            </h2>

            <p className="leading-8 text-slate-300">
              Dobra novogradnja temelji na pravilnem načrtovanju, kakovostni
              izvedbi in usklajenem sodelovanju vseh vpletenih izvajalcev.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
            <div className="space-y-4 text-slate-300">
              <div>• koordinacija gradnje</div>
              <div>• organizacija izvajalcev</div>
              <div>• nadzor kakovosti</div>
              <div>• spremljanje poteka del</div>
              <div>• tehnične rešitve</div>
              <div>• zaključna izvedba projekta</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Načrtujete novogradnjo?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            Stopite v stik z nami in skupaj bomo poiskali najboljšo rešitev za
            vaš projekt.
          </p>

          <a
            href="/#kontakt"
            className="inline-flex rounded-2xl bg-[#d4af37] px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Pošljite povpraševanje
          </a>
        </div>
      </section>
    </main>
  );
}