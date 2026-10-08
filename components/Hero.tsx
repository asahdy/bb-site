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
        className="object-cover object-center md:object-[60%_15%]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 md:px-16 md:pb-16">

        {/* Album callout */}
        <Link
          href="/about/discography"
          className="inline-flex items-center gap-3 mb-6 w-fit group"
        >
          <span className="text-muted-foreground text-sm md:text-xl uppercase tracking-widest group-hover:text-foreground transition-colors">
            New Album — The Blues Is My Biography
          </span>
        </Link>

        <h1 className="text-foreground text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-widest leading-none">
          Billy<br />Branch
        </h1>

        <p className="text-muted-foreground text-xs md:text-xl tracking-widest uppercase mt-5 flex flex-wrap gap-x-3 gap-y-1">
          <span>Emmy Award Winner</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>3× Grammy Nominee</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>Blues Hall of Fame</span>
        </p>

      </div>

    </section>
  )
}
