import type { Metadata } from "next"
import TourDate from "@/components/TourDate"

export const metadata: Metadata = { title: "Tour" }

const tourDates: React.ComponentProps<typeof TourDate>[] = [
  {
    date: "May 28, 2026",
    venue: "Bourbon St Music Club",
    location: "São Paulo, Brazil",
    venueUrl: "https://bourbonstreet.com.br/",
  },
  {
    date: "May 30, 2026",
    venue: "Bourbon St Music Festival",
    location: "Paraty, Rio de Janeiro, Brazil",
  },
  {
    date: "June 3, 2026",
    venue: "Ramova Theatre",
    location: "Chicago, IL",
    venueUrl: "https://ramovachicago.com/",
  },
  {
    date: "June 5, 2026",
    venue: "Chicago Blues Fest — Pritzker Stage",
    location: "Chicago, IL",
    venueUrl: "https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_blues_festival.html",
  },
  {
    date: "June 12, 2026",
    venue: "Broad St BBQ & Blues Fest",
    location: "Griffith, IN",
    venueUrl: "https://www.griffith.in.gov/specialevents/page/broad-street-blues-and-bbq-festival",
  },
  {
    date: "June 16–19, 2026",
    venue: "Pinetop Perkins Blues Camp",
    location: "Hopkins Farm, Clarksdale, MS",
    venueUrl: "https://pinetopperkinsfoundation.org/home",
  },
  {
    date: "July 3, 2026",
    venue: "TBA",
    location: "Milwaukee, WI",
  },
]

export default function TourPage() {
  return (
    <main className="mt-16">

      {/* Header */}
      <section className="h-[25vh] w-full bg-primary flex flex-col justify-end px-6 pb-16 border-b-2 border-border">
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
