import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = { title: "Sons of Blues" }

const members = [
  {
    name: "Giles Corey",
    role: "Guitar",
    image: "/images/giles-img.jpg",
    bio: "Giles joined the SOBs after graduating from the University of Chicago in 1997. In 2001 he joined the band of the legendary Otis Rush, staying with him until the elder bluesman's disabling stroke. Giles then formed his own band, Lubriphonic, releasing 5 albums. As he developed as a songwriter and front man, he sought more of the truth he found in both roots and Blues music, hastening his return to the SOBs as a soulful and riveting guitar player. He continues fronting his own highly acclaimed Giles Corey Band.",
    status: "active",
  },
  {
    name: 'Dionte "McMusik" Skinner',
    role: "Drums",
    image: "/images/dionte-img.jpg",
    bio: "Dionte's hard hitting drum style drives the SOBs and grabs the audience at every gig. He is a highly sought-after studio musician because of his versatility and skill. Although he is the youngest SOB, he has immense commitment and passion regarding the Blues.",
    status: "active",
  },
  {
    name: 'Sumito "Ariyo" Ariyoshi',
    role: "Piano",
    image: "/images/sumito-img.jpg",
    bio: "Ariyo is internationally recognized for his vigorous, innovative piano style. He is both an accomplished arranger and sought-after studio musician. He has shared the stage and toured the world with legends including Otis Rush, Jimmy Rogers, Robert Jr. Lockwood, Eddie Shaw, Valerie Wellington, B.B. King, Albert King, and Stevie Ray Vaughan. He is widely regarded as the best traditional Chicago Blues piano player of his generation, and is beloved around the world.",
    status: "active",
  },
  {
    name: "Ari Seder",
    role: "Bass",
    image: "/images/ari-img.jpg",
    bio: "Ari is the newest SOB. In addition to being an outstanding bass player, he is an accomplished guitarist, composer, and performer. He is in demand for both studio and live work because of his versatility. His creativity and musicianship shine in his contributions to song arrangements and his ever-so-cool stage presence.",
    status: "active",
  },
  {
    name: "Mose Rutues Jr.",
    role: "Drums",
    image: "/images/mose-img.jpg",
    bio: "Mose retired in 2016 after serving as the drummer for the Sons of Blues for nearly 30 years. He previously played with legendary greats including Major Lance, Bobby Rush, McKinley Mitchell, and Joe Tex. His intense energy and unique rhythmic style was the engine that powered the stylistic diversity of the Sons of Blues. His rich, Mississippi voice evoked the deep emotions of his southern Blues roots.",
    status: "retired",
  },
  {
    name: "Nick Charles",
    role: "Bass",
    image: "/images/nick-img.jpg",
    bio: "It is with great sadness that we remember Nick Charles, who lost his courageous battle with cancer on July 2, 2014. He was the griot and big brother to the SOB family — his stories of the old South enlightened the band and gave depth to their Blues roots. Nick was given his first bass guitar and amp by Howlin' Wolf, who later brought him to Chicago alongside Eddie Shaw. He went on to play with Howlin' Wolf, B.B. King, Tina Turner, Eddie Shaw, Valerie Wellington, and the Rolling Stones. His playing is preserved on the DVD Muddy Waters & the Rolling Stones Live.",
    status: "memorial",
  },
]

export default function SonsOfBluesPage() {
  return (
    <main className="mt-16">

      {/* Hero */}
      <section className="h-[25vh] w-full bg-primary flex flex-col justify-end px-6 pb-16 border-b-2 border-border">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-6xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            Sons of Blues
          </h1>
        </div>
      </section>

      {/* Members */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-0">

          {/* About the band */}
          <div className="flex flex-col gap-6 pb-16 border-b-2 border-border mb-16">
            <h2 className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">About</h2>
            <p className="text-foreground font-light text-xl leading-relaxed max-w-3xl">
              Billy Branch and The Sons of Blues have delivered authentic Chicago Blues to audiences around the world for over four decades. From their first paid gig at the 1977 Berlin Jazz Festival to headlining the 2017 Chicago Blues Festival, the SOBs remain one of the most vital forces in Blues music today.
            </p>
          </div>

          <h2 className="text-muted-foreground text-3xl md:4xl font-bold  uppercase tracking-widest leading-tight border-b-2 border-border pb-3 w-fit">The Band</h2>

          {members.map((member, index) => (
            <div
              key={member.name}
              className={`py-16 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start `}
            >
              {/* Photo */}
              <div className={`relative w-full aspect-3/4 overflow-hidden ${member.status === "memorial" ? "opacity-60 grayscale" : ""}`}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 md:pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground text-xl uppercase tracking-widest">
                    {member.role}
                    {member.status === "retired" && " · Retired"}
                    {member.status === "memorial" && " · In Memoriam"}
                  </p>
                  <h2 className="text-foreground text-4xl font-bold uppercase tracking-widest">
                    {member.name}
                  </h2>
                </div>
                <p className={`font-light leading-relaxed text-xl ${member.status === "memorial" ? "text-muted-foreground" : "text-foreground"}`}>
                  {member.bio}
                </p>
              </div>

            </div>
          ))}

          {/* Explore More */}
          <div className="border-t-2 border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 mt-0">
            <Link
              href="/about/billy-branch"
              className="group flex flex-col gap-3 border-2 border-border p-8 hover:border-primary transition-colors"
            >
              <p className="text-muted-foreground text-xl uppercase tracking-widest">Explore</p>
              <p className="text-foreground text-2xl uppercase tracking-wider font-bold group-hover:text-primary transition-colors">Billy Branch</p>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">Emmy winner, three-time Grammy nominee, Blues Hall of Fame inductee.</p>
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

        </div>
      </section>

    </main>
  )
}
