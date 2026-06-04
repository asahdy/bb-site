import Link from "next/link"
import Image from "next/image"
import { newsItems } from "@/lib/news"

export default function News() {
  return (
    <section className="w-full px-6 py-24 border-t-2 border-border">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-foreground text-3xl md:text-4xl font-bold uppercase tracking-widest leading-tight border-b-2 border-border w-fit pb-2 mb-10">
          News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-0 group border-t-2 border-border"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted-foreground/10">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 pt-4">
                <p className="text-muted-foreground text-xl uppercase tracking-widest">
                  {item.date} &nbsp;·&nbsp; {item.source}
                </p>
                <h3 className="text-foreground font-light uppercase tracking-wider leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-md leading-relaxed">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Section footer link */}
        <div className="flex justify-center mt-16 border-t-2 border-border pt-10">
          <Link href="/news" className="inline-block border-2 border-primary text-foreground text-xl uppercase tracking-widest px-8 py-3 hover:bg-primary transition-colors">
            All News
          </Link>
        </div>

      </div>
    </section>
  )
}
