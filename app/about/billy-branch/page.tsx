import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = { title: "Billy Branch" }


export default function BillyBranchPage() {
  return (
    <main className="mt-16">

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/bio.jpg"
          alt="Billy Branch"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16">
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-muted-foreground text-lg uppercase tracking-widest">About</p>
            <h1 className="text-foreground text-6xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
              Billy<br />Branch
            </h1>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Biography</h2>
          <p className="text-foreground font-light leading-relaxed text-xl">
            Billy Branch is an Emmy Award winner, a three time Grammy Award® nominee, and a retired Grammy® governor. He's won multiple Blues Music Awards (B.M.A.s), most recently winning both the 2026 Best Harmonica Instrumentalist Award and the 2026 Living Blues Critics' Award. Billy is also a proud recipient of multiple B.M.A. Keeping the Blues Alive Awards for his forty-five year old Blues in Schools program.
          </p>
          <p className="text-foreground font-light leading-relaxed text-xl">
            In addition to his numerous humanitarian awards, Branch is most proud of being a 2020 inductee into the Blues Foundation's Blues Hall of Fame Museum in Memphis. Branch is on the Board of Directors of both the Blues Foundation and the Little Walter Foundation, and is a recipient of an Addy Award — like an Oscar for TV ads — for his on-screen commercial work.
          </p>
          <p className="text-foreground font-light leading-relaxed text-xl">
            Billy's recording with Dave Spector is included in the Grammy Museum's Woody Guthrie installation entitled <em>Songs of Conscience, Sounds of Freedom</em>. Billy is an honored recipient of the 2026 Mellon Foundation's Taproot Artists & Community Trust Alliance Fellowship, recognizing him as an American Culture-Bearer. He used part of that award to fund a daytime senior citizens' Blues event on the Southside of Chicago, a Blues in Schools concert for 500 Chicago students, and a community concert featuring his new album, <em>The Blues Is My Biography</em>.
          </p>
        </div>
      </section>

      {/* Pull Quote — full bleed */}
      <section className="w-full bg-black px-6 py-24 border-b-2 border-border">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <p className="text-foreground text-3xl md:text-4xl font-light leading-relaxed italic">
            "After learning from the masters, he developed his own, instantly recognizable, signature sound — powerful, melodic, funky, jazzy and contemporary."
          </p>
          <footer className="text-muted-foreground text-sm uppercase tracking-widest">
            — Bruce Iglauer, CEO of Alligator Records
          </footer>
        </div>
      </section>

      {/* Career */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="hidden md:block">
            <h2 className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Career</h2>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="md:hidden text-muted-foreground text-lg uppercase tracking-widest border-b-2 border-border pb-3">Career</h2>
            <p className="text-foreground font-light leading-relaxed text-xl">
              Branch's touring career began in the late Seventies with his seven-year tenure as harmonica player in the Willie Dixon All Stars. He has spent nearly fifty years presenting America's rich cultural Blues heritage to audiences around the globe: from the Halls of Parliament in the Republic of Turkey, to the beautiful countries of South America, Central America, and Mexico, to Europe, to Australia, to the exotic countries of Asia, including Japan and the People's Republic of China. Billy's groundbreaking tours of China introduced authentic Chicago Blues to millions of young Chinese fans.
            </p>
            <p className="text-foreground font-light leading-relaxed text-xl">
              Billy is one of the last living bluesmen to have been mentored by the original blues giants like Willie Dixon, Junior Wells, James Cotton, Bo Diddley, and others. He appears on over 300 recordings, fifteen under his own name. Branch has recorded with such luminaries as Willie Dixon, Koko Taylor, Johnny Winter, Lou Rawls, Taj Mahal, Keb' Mo, Kingfish, Jim Irsay, and many others.
            </p>
          </div>
        </div>
      </section>

      {/* Acting & Collaborations */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="hidden md:block">
            <h2 className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Acting + More</h2>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="md:hidden text-muted-foreground text-lg uppercase tracking-widest border-b-2 border-border pb-3">Acting & Collaborations</h2>
            <p className="text-foreground font-light leading-relaxed text-lg">
              He is the principal actor and narrator in the recently released epic audio drama <em>Moja</em> (<a href="https://mojasaga.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">mojasaga.com</a>), a comprehensive historical fiction saga spanning five generations of the fictional Ellis family, chronicling African American music from Africa to present day USA.
            </p>
            <p className="text-foreground font-light leading-relaxed text-lg">
              Billy Branch was honored to be a member of the Jim Irsay Collection Band that featured Rock & Roll Hall of Famers like Vince Gill, Stephen Stills, Ann Hart, Kevin Cronin (REO Speedwagon), Mike Mills (R.E.M.), Buddy Guy, Billy Gibbons, and Kenny Wayne Shepherd. (See more at <a href="https://www.jimirsaycollection.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">jimirsaycollection.com</a>)
            </p>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/about/sons-of-blues"
            className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors"
          >
            <p className="text-muted-foreground text-xl uppercase tracking-widest">Explore</p>
            <p className="text-foreground text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Sons of Blues</p>
            <p className="text-muted-foreground text-xl font-light leading-relaxed">The band behind the music — Billy's longtime crew and collaborators.</p>
          </Link>
          <Link
            href="/about/discography"
            className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors"
          >
            <p className="text-muted-foreground text-xl uppercase tracking-widest">Explore</p>
            <p className="text-foreground text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Discography</p>
            <p className="text-muted-foreground text-xl font-light leading-relaxed">Fifteen albums under his own name — five decades of recorded Blues.</p>
          </Link>
        </div>
      </section>

    </main>
  )
}
