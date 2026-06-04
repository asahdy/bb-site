import Hero from "@/components/Hero"
import VideoSection from "@/components/VideoSection"
import Bio from "@/components/Bio"
import News from "@/components/News"

const stats = [
  { value: "50+", label: "Years Performing" },
  { value: "300+", label: "Recordings" },
  { value: "15", label: "Albums" },
  { value: "2020", label: "Hall of Fame" },
]

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />

      {/* Stats Strip */}
      <section className="w-full bg-primary px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <span className="text-5xl md:text-6xl font-bold text-primary-foreground tracking-widest">
                {stat.value}
              </span>
              <span className="text-primary-foreground/60 text-base uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <VideoSection />
      <Bio />
      <News />
    </main>
  )
}
