import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = { title: "Discography" }

const featured = {
  title: "Blues Is My Biography",
  year: "2025",
  label: "Rosa's Lounge Records",
  image: "/images/BIMB.jpg",
  listenUrl: "https://open.spotify.com/album/5jRwTsJwBhDxtHP34l2Exc",
  description: "Billy Branch's latest album — the inaugural release on Rosa's Lounge Records — is a commanding 11-track collection blending traditional Chicago Blues with contemporary arrangements. Celebrated with a live concert in Hyde Park, the record features standout cuts like 'Dead End Street' and 'Toxic Love.'",
}

const albums = [
  {
    title: "Roots and Branches: The Songs of Little Walter",
    year: "2019",
    label: "Alligator Records",
    image: "/images/lilwalter.jpg",
    listenUrl: "https://open.spotify.com/album/57L9MBy1QxsMRCYPvOE4Hv",
  },
  {
    title: "Blues Shock",
    year: "2014",
    label: "Blind Pig Records",
    image: "/images/bluesshock.jpg",
    listenUrl: "https://open.spotify.com/album/0uelDUzgXSfd4f5pw6RITE",
  },
  {
    title: "Live & Kicking! At Rosa's Lounge",
    year: "2009",
    label: "P-Vine Records",
    image: "/images/kicking.jpg",
    listenUrl: "https://music.apple.com/jp/album/live-kicking-at-rosas-lounge/320485558?l=en-US",
  },
]

export default function DiscographyPage() {
  return (
    <main className="mt-16">

      {/* Hero */}
      <section className="h-[25vh] w-full bg-primary flex flex-col justify-end px-6 pb-16">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-6xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            Discography
          </h1>
        </div>
      </section>

      {/* Latest Release */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <p className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Latest Release</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground text-xl uppercase tracking-widest">{featured.year} · {featured.label}</p>
                <h2 className="text-foreground text-3xl md:text-4xl font-bold uppercase tracking-widest leading-tight">
                  {featured.title}
                </h2>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-xl">
                {featured.description}
              </p>
              <a
                href={featured.listenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-base uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-8 h-px bg-muted-foreground" />
                Listen on Spotify
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Earlier Albums */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

          <h2 className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">Albums</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {albums.map((album) => (
              <div key={album.title} className="flex flex-col gap-4">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground text-xl uppercase tracking-widest pb-1">{album.year} · {album.label}</p>
                  <h3 className="text-foreground font-bold uppercase tracking-wide leading-snug text-base">
                    {album.title}
                  </h3>
                </div>
                <a
                  href={album.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-base uppercase tracking-widest py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors mt-auto"
                >
                  Listen
                </a>
              </div>
            ))}
          </div>

          {/* Explore More */}
          <div className="border-t-2 border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/about/billy-branch"
              className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors"
            >
              <p className="text-muted-foreground text-xl uppercase tracking-widest">Explore</p>
              <p className="text-foreground text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Billy Branch</p>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">Emmy winner, three-time Grammy nominee, Blues Hall of Fame inductee.</p>
            </Link>
            <Link
              href="/about/sons-of-blues"
              className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors"
            >
              <p className="text-muted-foreground text-xl uppercase tracking-widest">Explore</p>
              <p className="text-foreground text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Sons of Blues</p>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">The band behind the music — Billy's longtime crew and collaborators.</p>
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
