import Hero from "@/components/Hero"
import VideoSection from "@/components/VideoSection"
import Bio from "@/components/Bio"
import News from "@/components/News"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <section className="w-full bg-primary px-6 py-2"></section>
      <VideoSection />
      <Bio />
      <News />
    </main>
  )
}
