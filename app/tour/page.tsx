import type { Metadata } from "next"
import TourDate from "@/components/TourDate"

export const metadata: Metadata = { title: "Tour" }

const tourDates: React.ComponentProps<typeof TourDate>[] = [
  // {
  //   date: "May 28, 2026",
  //   venue: "Bourbon St Music Club",
  //   location: "São Paulo, Brazil",
  //   venueUrl: "https://bourbonstreet.com.br/",
  // },
]

export default function TourPage() {
  return (
    <main className="mt-16">

      {/* Header */}
      <section className="w-full bg-primary flex flex-col justify-end px-6 pt-8 pb-8 md:pt-16 md:pb-14">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-4xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            Tour
          </h1>
        </div>
      </section>

      {/* Dates */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto">
          {tourDates.length > 0 ? (
            <div>
              {tourDates.map((date, i) => (
                <TourDate key={i} {...date} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              No upcoming dates are scheduled at this time. Check back soon for announcements.
            </p>
          )}
        </div>
      </section>

    </main>
  )
}
