import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Facebook01Icon, InstagramIcon, YoutubeIcon } from "@hugeicons/core-free-icons"

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/billy.branch/", icon: Facebook01Icon },
  { label: "Instagram", href: "https://www.instagram.com/bbranch103/", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/c/BillyBranchMusic", icon: YoutubeIcon },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Billy Branch", href: "/about/billy-branch" },
  { label: "Sons of Blues", href: "/about/sons-of-blues" },
  { label: "Discography", href: "/about/discography" },
  { label: "News", href: "/news" },
  { label: "Tour", href: "/tour" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t-2 border-border px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Socials */}
        <div className="flex gap-6" >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={s.icon} size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Billy Branch. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end">
          {quickLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-widest transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
