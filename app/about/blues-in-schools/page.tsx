import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = { title: "Blues in Schools" }

export default function BluesInSchoolsPage() {
  return (
    <main className="mt-16">

      {/* Hero */}
      <section className="w-full bg-primary flex flex-col justify-end px-6 pt-8 pb-8 md:pt-16 md:pb-14 border-b-2 border-border">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-4xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            Blues in Schools
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <h2 className="text-muted-foreground text-xl md:text-3xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Overview</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-foreground font-light leading-relaxed text-xl md:flex-1">
              Since Billy Branch&apos;s first Blues in Schools Program in Chicago thirty years ago, he has delivered his empowering curriculum to students all over the world. For example, the Ford Foundation funded a two-week program in Xalapa, Veracruz, Mexico to demonstrate the common legacy of African-American and African-Mexican cultural roots.
            </p>
            <figure className="relative w-full md:w-72 shrink-0 overflow-hidden flex flex-col gap-2">
              <div className="relative w-full aspect-3/2 overflow-hidden">
                <Image src="/images/bismexico.jpg" alt="Xalapa, Veracruz, Mexico" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground uppercase tracking-widest">Xalapa, Mexico</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <h2 className="text-muted-foreground text-xl md:text-3xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">What Students Gain</h2>
          <p className="text-foreground font-light leading-relaxed text-xl">
            Billy Branch&apos;s Blues in Schools interactive program provides students with the opportunity to:
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Develop collaboration & teamwork skills",
              "Cultivate multi-cultural appreciation",
              "Enhance their creative expression",
              "Practice their writing skills",
              "Broaden their horizons",
              "Explore their musical interests & aptitudes",
              "Interact with world class musicians",
              "Increase their understanding of American History",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground font-light text-xl">
                <span className="text-muted-foreground mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground font-light leading-relaxed text-xl">
            After writing original songs, learning old Blues standards, and developing musical performance skills, the students perform at a local festival or venue with Billy Branch & the Sons of Blues!
          </p>
        </div>
      </section>

      {/* Indianola / BB King Museum */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <h2 className="text-muted-foreground text-xl md:text-3xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Indianola, Mississippi</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <p className="text-foreground font-light leading-relaxed text-xl md:flex-1">
              Billy Branch spent two weeks in Mississippi teaching 1,500 students to play the BB King Special on harmonica. On the day of the grand opening of the BB King Museum, over a thousand students from neighboring towns met at Indianola High School. Like the Pied Piper of Hamelin, Billy led the students down the streets of Indianola to the BB King Museum, playing their harmonicas the whole way — what a way to honor the King of the Blues!
            </p>
            <figure className="relative w-full md:w-64 shrink-0 flex flex-col gap-2">
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image src="/images/bisbbking.jpg" alt="Indianola, Mississippi" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground uppercase tracking-widest">Indianola, Mississippi</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Long-term Residencies */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <h2 className="text-muted-foreground text-xl md:text-3xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Long-Term Residencies</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-foreground font-light leading-relaxed text-xl md:flex-1">
              BIS students learn to play drums, bass, guitar, and piano in long-term residencies. The students learn from world class performing musicians.
            </p>
            <figure className="relative w-full md:w-80 shrink-0 flex flex-col gap-2">
              <div className="relative w-full aspect-2/1 overflow-hidden">
                <Image src="/images/biswitserland.jpg" alt="Blues in Schools in Switzerland" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground uppercase tracking-widest">BIS in Switzerland</figcaption>
            </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-foreground font-light leading-relaxed text-xl md:flex-1">
              Since 2022, Billy Branch has partnered with the Pinetop Perkins Foundation each summer, hosting workshops where accomplished young musicians sharpen their skills alongside blues legends.
            </p>
            <figure className="relative w-full md:w-72 shrink-0 flex flex-col gap-2">
              <div className="relative w-full aspect-3/2 overflow-hidden">
                <Image src="/images/pinetopperkins2026.webp" alt="Pinetop Perkins Annual Harp Workshop, 2026" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground uppercase tracking-widest">Pinetop Perkins Annual Harp Workshop, 2026</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <h2 className="text-muted-foreground text-xl md:text-3xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Alumni Spotlight</h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-foreground font-light leading-relaxed text-xl md:flex-1">
              Owuor Arunga is a Blues in Schools alum who has exploded onto the world stage. Even at 12 years of age he was a standout trumpet player and songwriter. Now he graces the stage with international sensation Macklemore & Ryan Lewis — whether it&apos;s the American Music Awards, the Grammy Awards, or Billboard Magazine, these artists deliver with both passion and social consciousness.
            </p>
            <figure className="relative w-full md:w-72 shrink-0 flex flex-col gap-2">
              <div className="relative w-full aspect-3/2 overflow-hidden">
                <Image src="/images/bisowuor.webp" alt="Owuor Arunga with Macklemore & Ryan Lewis" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground uppercase tracking-widest">Owuor Arunga, BIS Alum</figcaption>
            </figure>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <p className="text-foreground font-light leading-relaxed text-xl md:flex-1">
              DeAndre Enrico is another Blues in Schools alum making his mark. He played bass with former BIS student Ayron Jones in his band A.J. and the Way — a hard-hitting Blues rock band making waves with original tunes like &ldquo;Baptized in Muddy Waters,&rdquo; giving reference to their Blues roots. Now these musicians are full grown artists playing to sold-out crowds.
            </p>
            <figure className="relative w-full md:w-72 shrink-0 flex flex-col gap-2">
              <div className="relative w-full aspect-3/2 overflow-hidden">
                <Image src="/images/bisayron.jpg" alt="DeAndre Enrico with Ayron Jones and the Way" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground uppercase tracking-widest">DeAndre Enrico & Ayron Jones</figcaption>
            </figure>
          </div>

        </div>
      </section>

      {/* Explore More */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/about/billy-branch"
            className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors items-center text-center"
          >
            <p className="text-muted-foreground text-sm md:text-xl uppercase tracking-widest">Explore</p>
            <p className="text-foreground text-xl md:text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Billy Branch</p>
          </Link>
          <Link
            href="/about/sons-of-blues"
            className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors items-center text-center"
          >
            <p className="text-muted-foreground text-sm md:text-xl uppercase tracking-widest">Explore</p>
            <p className="text-foreground text-xl md:text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Sons of Blues</p>
          </Link>
        </div>
      </section>

    </main>
  )
}
