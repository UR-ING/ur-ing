export default function OPodjetjuPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            O podjetju
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Strokoven partner za gradbeni inženiring
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            UR-ING je podjetje, usmerjeno v kakovostno, zanesljivo in premišljeno
            podporo na področju gradbenega inženiringa, svetovanja in usklajevanja
            projektov. Naš cilj je strankam ponuditi strokovne rešitve, jasno
            komunikacijo in odgovoren pristop v vseh fazah projekta.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          
          <div>
            <h2 className="mb-4 text-2xl font-bold">Naša zgodba</h2>

            <p className="mb-4 leading-8 text-slate-600">
              Verjamemo, da je uspešen projekt rezultat dobrega načrtovanja,
              strokovnega znanja in usklajenega sodelovanja vseh vpletenih.
              Zato pri vsakem projektu stremimo k natančnosti, preglednosti in
              dolgoročno kakovostnim rešitvam.
            </p>

            <p className="leading-8 text-slate-600">
              S svojim pristopom združujemo tehnično znanje, praktične izkušnje
              in odgovornost do investitorja, prostora in končnega rezultata.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
              Naše vrednote
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-[#d4af37]">Zanesljivost</h3>
                <p className="mt-1 text-slate-600">
                  Dogovorjeno delo opravimo odgovorno, natančno in pravočasno.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#d4af37]">Strokovnost</h3>
                <p className="mt-1 text-slate-600">
                  Pri delu temeljimo na znanju, izkušnjah in premišljenih rešitvah.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#d4af37]">
                  Jasna komunikacija
                </h3>
                <p className="mt-1 text-slate-600">
                  Verjamemo, da je pregledna komunikacija ključ do dobrega sodelovanja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">
            Zakaj izbrati UR-ING?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Celovit pristop
              </h3>
              <p className="leading-7 text-slate-600">
                Projekt obravnavamo celostno, od začetne ideje do usklajene izvedbe.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Praktične rešitve
              </h3>
              <p className="leading-7 text-slate-600">
                Iščemo rešitve, ki so strokovno ustrezne in hkrati izvedljive v praksi.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Osebni pristop
              </h3>
              <p className="leading-7 text-slate-600">
                Vsaki stranki in projektu se posvetimo individualno in odgovorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Potrebujete zanesljivega partnerja?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-600">
            Stopite v stik z nami in skupaj bomo poiskali najboljšo rešitev za vaš projekt.
          </p>

          <a
            href="/#kontakt"
            className="inline-flex rounded-2xl bg-[#d4af37] px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Kontaktirajte nas
          </a>
        </div>
      </section>
    </main>
  );
}