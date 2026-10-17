"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons"

const slides = [
  {
    type: "image" as const,
    src: "/images/bbranch flyer.jpg",
    alt: "Billy Branch Flyer",
    title: "Click here to vote!",
    subtitle: "Billy Branch & The Sons of Blues",
    href: "https://www.billybranchfyc.com/",
  },
  {
    type: "video" as const,
    videoId: "ajrB-sC_MsI",
    title: "Sons of Blues + Marion Diaz",
    subtitle: "Billy Branch & The Sons of Blues",
  },
  {
    type: "video" as const,
    videoId: "VTzNiBBFOZo",
    title: "Whenever You Come Around -- Live Performance",
    subtitle: "Billy Branch & The Sons of Blues",
  },
  {
    type: "video" as const,
    videoId: "1mnmV7HFZAA",
    title: "Begging for Change -- Lyric Video",
    subtitle: "Billy Branch & The Sons of Blues",
  },
  {
    type: "video" as const,
    videoId: "nadqF0kuqMc",
    title: "Blues in Schools",
    subtitle: "Preserving the Tradition",
  },
]

const DURATION = 15000

export default function VideoSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setActive(index)
  }, [])

  const prev = useCallback(() => {
    setActive((a) => (a - 1 + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => {
    setActive((a) => (a + 1) % slides.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length)
    }, DURATION)
    return () => clearTimeout(timer)
  }, [active, paused])

  const slide = slides[active]

  return (
    <section
      className="w-full bg-black px-6 py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest leading-none border-l-2 border-primary pl-4">
              Featured
            </h2>
            <p className="text-muted-foreground text-sm md:text-xl uppercase tracking-widest pt-8">
              {slide.title}
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={28} />
            </button>
            <span className="text-muted-foreground text-xs uppercase tracking-widest font-mono">
              {active + 1} / {slides.length}
            </span>
            <button
              onClick={next}
              aria-label="Next slide"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={ArrowRight02Icon} size={28} />
            </button>
          </div>
        </div>

        {/* Slide */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {slides.map((s, i) => (
            <div
              key={s.type === "video" ? s.videoId : s.src}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
            >
              {s.type === "video" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${s.videoId}?enablejsapi=1`}
                  title={s.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : s.href ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                  <Image
                    src={s.src!}
                    alt={s.alt!}
                    fill
                    className="object-contain"
                  />
                </a>
              ) : (
                <Image
                  src={s.src!}
                  alt={s.alt!}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          ))}

        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-primary" : "bg-border/40 hover:bg-border"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
