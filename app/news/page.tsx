import type { Metadata } from "next"
import Image from "next/image"
import { newsItems } from "@/lib/news"

export const metadata: Metadata = { title: "News" }

const publishedItems = newsItems.filter((item) => item.href !== "#")
const [featured, ...rest] = publishedItems

export default function NewsPage() {
  return (
    <main className="mt-16">

      {/* Header */}
      <section className="h-[25vh] w-full bg-primary flex flex-col justify-end px-6 pb-16 border-b-2 border-border">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-4xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            News
          </h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full px-6 py-16 border-b-2 border-border">
        <div className="max-w-3xl mx-auto">
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-6"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-sm md:text-xl uppercase tracking-widest">{featured.date}</span>
                <span className="text-primary text-base">—</span>
                <span className="text-muted-foreground text-sm md:text-xl uppercase tracking-widest">{featured.source}</span>
              </div>
              <h2 className="text-foreground font-bold uppercase tracking-wide leading-snug text-2xl md:text-3xl group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed text-base md:text-xl">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-3 text-base uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors mt-2">
                <span className="w-8 h-px bg-muted-foreground" />
                Read Article
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Remaining Articles */}
      <section className="w-full px-6 py-12">
        <div className="max-w-3xl mx-auto flex flex-col">
          {rest.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-10 border-b-2 border-border flex gap-8 items-start"
            >
              {/* Text */}
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-xs md:text-lg uppercase tracking-widest">{item.date}</span>
                  <span className="text-primary text-base">—</span>
                  <span className="text-muted-foreground text-xs md:text-lg uppercase tracking-widest">{item.source}</span>
                </div>
                <h2 className="text-foreground font-bold uppercase tracking-wide leading-snug text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-lg font-light leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-3 text-md uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors mt-1">
                  <span className="w-6 h-px bg-muted-foreground" />
                  Read Article
                </span>
              </div>

              {/* Thumbnail */}
              <div className="hidden md:block relative shrink-0 w-52 aspect-video overflow-hidden">
                <Image
                  src={item.image!}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}
