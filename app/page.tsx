import Hero from "@/components/Hero"
import VideoSection from "@/components/VideoSection"
import Bio from "@/components/Bio"
import News from "@/components/News"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <div className="w-full border-t border-primary" />
      <VideoSection />
      <Bio />
      <News />
    </main>
  )
}
