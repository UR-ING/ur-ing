export default function AdaptacijePage() {
  return (
    <main className="bg-[#0f0f10] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-[#161616] to-[#0f0f10] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Adaptacije
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Celostne adaptacije hiš, stanovanj in poslovnih prostorov
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Izvajamo kakovostne adaptacije objektov z jasnim poudarkom na
            funkcionalnosti, sodobnem izgledu in strokovno usklajeni izvedbi.
            Poskrbimo za celoten proces prenove — od načrtovanja do zaključnih del.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">
              Prenove brez nepotrebnega stresa
            </h2>

            <p className="text-lg leading-8 text-slate-300">
              Adaptacija objekta zahteva dobro organizacijo, pravilno zaporedje
              del in usklajeno izvedbo. Pri UR-ING poskrbimo, da prenova poteka
              pregledno, učinkovito in kakovostno.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                Adaptacije hiš
              </h3>

              <p className="leading-7 text-slate-300">
                Celostne prenove družinskih hiš, izboljšave razporeditev,
                energetske posodobitve in sodobne bivalne rešitve.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                Prenove stanovanj
              </h3>

              <p className="leading-7 text-slate-300">
                Funkcionalne prenove stanovanj z modernimi materiali,
                optimizacijo prostora in estetsko dovršenimi rešitvami.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                Poslovni prostori
              </h3>

              <p className="leading-7 text-slate-300">
                Prenove poslovnih prostorov, pisarn in drugih objektov z
                usklajenim vodenjem projekta in izvedbe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold">
              Kaj vključujejo adaptacije?
            </h2>

            <p className="leading-8 text-slate-300">
              Adaptacija lahko vključuje manjše osvežitve ali popolno prenovo
              objekta. Obseg del prilagodimo potrebam stranke in stanju objekta.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
            <div className="space-y-4 text-slate-300">
              <div>• rušitvena dela</div>
              <div>• nove inštalacije</div>
              <div>• suhomontažna dela</div>
              <div>• keramika in talne obloge</div>
              <div>• slikopleskarska dela</div>
              <div>• finalizacija prostorov</div>
              <div>• montaža opreme in pohištva</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Načrtujete prenovo?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            Kontaktirajte nas in skupaj bomo poiskali najboljšo rešitev za
            adaptacijo vašega objekta.
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