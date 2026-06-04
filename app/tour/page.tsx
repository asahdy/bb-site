import type { Metadata } from "next"

export const metadata: Metadata = { title: "Tour" }

export default function TourPage() {
  return (
    <main className="mt-16">

      {/* Header */}
      <section className="h-[25vh] w-full bg-primary flex flex-col justify-end px-6 pb-16 border-b-2 border-border">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-6xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            Tour
          </h1>
        </div>
      </section>

      {/* No dates */}
      <section className="w-full px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            No upcoming dates are scheduled at this time. Check back soon for announcements.
          </p>
        </div>
      </section>

    </main>
  )
}
