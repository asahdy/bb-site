export default function VideoSection() {
  const videoId = "nadqF0kuqMc"

  return (
    <section className="w-full bg-black border-t-2 border-border px-6 py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-3">
            <h2 className="text-foreground text-3xl md:text-4xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border w-fit pb-3">
              Featured
            </h2>
            <p className="text-muted-foreground text-xl uppercase tracking-widest">
              Blues in Schools
            </p>
          </div>
          <p className="text-muted-foreground font-light text-2xl leading-relaxed text-right">
            For over 45 years, Billy Branch has brought authentic Chicago Blues into schools across America and around the world, preserving the tradition by passing it to the next generation.
          </p>
        </div>

        {/* Video */}
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Billy Branch & The Sons of Blues — Blues in Schools"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  )
}
