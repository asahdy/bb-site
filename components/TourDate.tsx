interface TourDateProps {
  date: string        // e.g. "July 4, 2026"
  venue: string       // e.g. "Rosa's Lounge"
  location: string    // e.g. "Chicago, IL"
  venueUrl?: string
  ticketsUrl?: string
  notes?: string      // e.g. "Free admission", "with special guests"
}

export default function TourDate({
  date,
  venue,
  location,
  venueUrl,
  ticketsUrl,
  notes,
}: TourDateProps) {
  return (
    <div className="flex items-center justify-between gap-6 py-8 border-b-2 border-border">

      {/* Date + Venue + Location */}
      <div className="flex flex-col gap-1">
        <p className="text-foreground font-bold text-lg uppercase tracking-widest">{date}</p>
        <p className="text-foreground font-bold text-lg uppercase tracking-widest">{venue}</p>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">{location}</p>
        {notes && (
          <p className="text-muted-foreground font-light text-sm mt-1">{notes}</p>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 shrink-0">
        {venueUrl && (
          <a
            href={venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-border text-muted-foreground text-sm uppercase tracking-widest px-4 py-2 hover:border-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Tickets
          </a>
        )}
        {ticketsUrl && (
          <a
            href={ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary text-sm uppercase tracking-widest px-4 py-2 hover:bg-primary hover:text-foreground transition-colors whitespace-nowrap"
          >
            Tickets
          </a>
        )}
      </div>

    </div>
  )
}
