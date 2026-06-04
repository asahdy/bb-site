"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileMenu from "@/components/MobileMenu"
import { HugeiconsIcon } from "@hugeicons/react"
import { Facebook01Icon, InstagramIcon, YoutubeIcon, ArrowDown01Icon } from "@hugeicons/core-free-icons"

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/billy.branch/", icon: Facebook01Icon },
  { label: "Instagram", href: "https://www.instagram.com/bbranch103/", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/c/BillyBranchMusic", icon: YoutubeIcon },
]

const aboutLinks = [
  { label: "Billy Branch", href: "/about/billy-branch" },
  { label: "Sons of Blues", href: "/about/sons-of-blues" },
  { label: "Discography", href: "/about/discography" },
]

export default function Header() {
  const pathname = usePathname()
  const isHomepage = pathname === "/"
  const [pastHero, setPastHero] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    if (!isHomepage) {
      setPastHero(false)
      return
    }
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 64)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHomepage])

  const isActive = (href: string) => pathname === href
  const isAboutActive = pathname.startsWith("/about")

  const openAbout = () => {
    clearTimeout(closeTimer.current)
    setAboutOpen(true)
  }
  const closeAbout = () => {
    closeTimer.current = setTimeout(() => setAboutOpen(false), 80)
  }

  return (
    <header className={`fixed top-0 w-full z-50 bg-black border-b-2 transition-colors duration-300 ${pastHero ? "border-transparent" : "border-border"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo — visually dominant via size + full cream color */}
        <Link href="/" className="text-foreground font-bold text-2xl tracking-widest uppercase shrink-0">
          Billy Branch
        </Link>

        {/* Nav + Socials */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">

            {/* About — hover dropdown, square, chevron indicator */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
            >
              <button
                className={`flex items-center gap-1.5 text-base uppercase tracking-wider transition-colors outline-none ${isAboutActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                About
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={11}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {aboutOpen && (
                <div
                  className="absolute top-full left-0 bg-black border-2 border-border mt-0 py-1 min-w-44"
                  onMouseEnter={openAbout}
                  onMouseLeave={closeAbout}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 text-sm uppercase tracking-wider transition-colors ${isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/news"
              className={`text-base uppercase tracking-wider transition-colors ${isActive("/news") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              News
            </Link>

            <Link
              href="/tour"
              className={`text-base uppercase tracking-wider transition-colors ${isActive("/tour") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Tour
            </Link>

            <Link
              href="/contact"
              className={`text-base uppercase tracking-wider transition-colors ${isActive("/contact") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Contact
            </Link>

          </nav>

          {/* Divider */}
          <div className="w-px h-4 bg-border" />

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <HugeiconsIcon icon={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <MobileMenu />

      </div>
    </header>
  )
}
