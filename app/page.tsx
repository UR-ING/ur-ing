import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0f0f10] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_24%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#161616] via-[#101010] to-[#0a0a0a]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                GRADBENI INŽINIRING IN SVETOVANJE
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                NOVOGRADNJE, FINALIZACIJE IN PRENOVE vse na enem mestu!
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
                Strokovno vodimo prenove in adaptacije objektov — od začetnega
                načrtovanja do usklajene izvedbe. Poskrbimo za premišljen pristop,
                jasno komunikacijo in kakovostne rešitve pri prenovi doma ali
                poslovnega prostora.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#storitve"
                  className="rounded-2xl bg-[#d4af37] px-6 py-3 font-medium text-black transition hover:opacity-90"
                >
                  Naše storitve
                </a>

                <a
                  href="#kontakt"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
                >
                  Pošljite povpraševanje
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                <span>Hiše</span>
                <span>Stanovanja</span>
                <span>Poslovni prostori</span>
              </div>
            </div>

            <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/hero.png"
                alt="Prenova objekta"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="storitve" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Storitve
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Celovite rešitve za adaptacije in prenove
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              UR-ING nudi strokovno podporo pri celostni prenovi objektov,
              usklajevanju del in pripravi rešitev, prilagojenih vašemu prostoru.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/10">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[#d4af37]" />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Adaptacije hiš
              </h3>
              <p className="leading-7 text-slate-300">
                Celostne prenove stanovanjskih hiš, posodobitve razporeditev,
                izboljšave funkcionalnosti in usklajevanje vseh faz prenove.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/10">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[#b8922e]" />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Novogradnje
              </h3>
              <p className="leading-7 text-slate-300">
                Izvajamo novogradnje z jasnim povdarkom na kakovosti, organizaciji in usklajenem poteku
                gradnje od začetka do zaključka projekta.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/10">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[#8d6b1f]" />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Finalizacije objektov
              </h3>
              <p className="leading-7 text-slate-300">
                Povezujemo preverjene in strokovno usklajene izvajalce različnih področij gradnje in zaključnih del.
                Stranki nudimo enotno koordinacijo strokovno podporo in izvedbo projekta od začetka do končne predaje
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Zakaj UR-ING
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Zanesljiv partner pri prenovi objekta
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Pri prenovah je ključna dobra organizacija, pravilno načrtovanje in
              usklajena izvedba. Poskrbimo, da je projekt voden pregledno,
              strokovno in odgovorno.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#151515] p-8">
              <p className="mb-2 text-2xl font-bold text-white">Celostni pristop</p>
              <p className="text-slate-300">
                Od prve ideje do zaključka prenove spremljamo projekt kot celoto.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#151515] p-8">
              <p className="mb-2 text-2xl font-bold text-white">Jasna organizacija</p>
              <p className="text-slate-300">
                Dobra priprava, pregledna komunikacija in usklajevanje vseh faz del.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#151515] p-8">
              <p className="mb-2 text-2xl font-bold text-white">Kakovostne rešitve</p>
              <p className="text-slate-300">
                Rešitve, ki so estetske, funkcionalne in izvedljive v praksi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  Kaj prenavljamo
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Prenove za različne vrste objektov
                </h2>
                <p className="text-lg leading-8 text-slate-300">
                  Pristop prilagodimo vrsti objekta, obsegu del in ciljem
                  investitorja. Vsaka prenova zahteva svoj načrt, svojo logiko in
                  svojo organizacijo.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">Hiše</h3>
                  <p className="text-slate-300">
                    Celostne prenove družinskih hiš, razporeditev prostorov,
                    izboljšave bivalnega udobja in tehnične posodobitve.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">Stanovanja</h3>
                  <p className="text-slate-300">
                    Funkcionalne in sodobne prenove stanovanj s poudarkom na
                    praktični uporabi prostora.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Poslovni prostori
                  </h3>
                  <p className="text-slate-300">
                    Prilagoditve in prenove poslovnih prostorov glede na potrebe
                    dejavnosti, zaposlenih in uporabnikov.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                Kontakt
              </p>

              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Načrtujete nekaj novega?
              </h2>

              <p className="mb-6 text-lg text-slate-300">
                Pošljite povpraševanje in skupaj bomo pregledali možnosti za
                adaptacijo ali celostno prenovo vašega objekta.
              </p>

              <div className="space-y-3 text-slate-300">
                <p className="flex items-center gap-2">
                  📞{" "}
                  <a href="tel:041759629" className="hover:text-[#d4af37]">
                    041 759 629
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  ✉️{" "}
                  <a
                    href="mailto:info@uring.si"
                    className="hover:text-[#d4af37]"
                  >
                    info@uring.si
                  </a>
                </p>
              </div>
            </div>

            <form
              action="https://formsubmit.co/info@uring.si"
              method="POST"
              className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Novo povpraševanje UR-ING"
              />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">
                  Ime in priimek
                </label>
                <input
                  type="text"
                  name="ime"
                  placeholder="Vaše ime"
                  className="w-full rounded-lg border border-white/10 bg-[#161616] p-3 text-white placeholder:text-slate-500 focus:border-[#d4af37] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">
                  E-pošta
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="vas@email.com"
                  className="w-full rounded-lg border border-white/10 bg-[#161616] p-3 text-white placeholder:text-slate-500 focus:border-[#d4af37] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">
                  Sporočilo
                </label>
                <textarea
                  name="sporocilo"
                  placeholder="Na kratko opišite projekt ali prenovo..."
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-[#161616] p-3 text-white placeholder:text-slate-500 focus:border-[#d4af37] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#d4af37] px-5 py-3 font-medium text-black transition hover:opacity-90"
              >
                Pošlji povpraševanje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}