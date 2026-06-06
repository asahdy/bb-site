import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)] w-full overflow-hidden mt-16">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Billy Branch"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-10 pb-16 md:px-16">

        {/* Album callout */}
        <Link
          href="/about/discography"
          className="inline-flex items-center gap-3 mb-6 w-fit group"
        >

          <span className="text-muted-foreground text-xl uppercase tracking-widest group-hover:text-foreground transition-colors">
            New Album — The Blues Is My Biography
          </span>
        </Link>

        <h1 className="text-foreground text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-widest leading-none">
          Billy<br />Branch
        </h1>

        <p className="text-muted-foreground text-base md:text-xl tracking-widest uppercase mt-5">
          Emmy Award Winner &nbsp;·&nbsp; 3× Grammy Nominee &nbsp;·&nbsp; Blues Hall of Fame
        </p>

      </div>

    </section>
  )
}
