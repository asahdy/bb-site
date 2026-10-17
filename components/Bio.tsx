import Image from "next/image"
import Link from "next/link"

export default function Bio() {
  return (
    <section className="w-full px-6 py-24 border-t-2 border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest leading-none border-l-2 border-primary pl-4">
          About
        </h2>

        {/* Pull Quote — full width centerpiece */}
        <blockquote className="flex flex-col gap-4">
          <p className="text-foreground font-light italic leading-tight text-xl md:text-3xl lg:text-4xl">
            &ldquo;After learning from the masters, he developed his own, instantly recognizable, signature sound &mdash; powerful, melodic, funky, jazzy and contemporary.&rdquo;
          </p>
          <footer className="text-muted-foreground text-sm uppercase tracking-widest">
            &mdash; Bruce Iglauer, CEO of Alligator Records
          </footer>
        </blockquote>

        {/* Image + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start border-t-2 border-border pt-12">

          {/* Image */}
          <div className="relative aspect-square md:aspect-3/4 w-full">
            <Image
              src="/images/port0.jpg"
              alt="Billy Branch"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-muted-foreground font-light leading-loose text-base md:text-lg text-right">
                Billy Branch — Emmy Award winner, 3-time Grammy Award® nominee, retired Grammy® governor, and winner of multiple Blues Music Awards — recently received the 2026 B.M.A. Best Harmonica Award and the 2026 Living Blues Award. He's also received multiple B.M.A. Keeping the Blues Alive Awards for his fifty-year International Blues in Schools program.
              </p>
              <p className="text-muted-foreground font-light leading-loose text-base md:text-lg text-right">
                Branch is an honored recipient of the Mellon Foundation's 2026 Taproot Artists Fellowship, recognizing him as an American Culture-Bearer — honoring a 50-year Blues career that began with his seven-year tenure as Willie Dixon's harmonica player. He is a 2020 inductee into the Blues Foundation's Blues Hall of Fame Museum in Memphis, and serves on the Board of Directors of both the Blues Foundation and the Little Walter Foundation.
              </p>
            </div>
            <Link href="/about/billy-branch" className="inline-flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              <span className="w-8 h-px bg-muted-foreground" />
              Full Biography
              <span className="w-8 h-px bg-muted-foreground" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
