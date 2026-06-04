"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Facebook01Icon, InstagramIcon, YoutubeIcon } from "@hugeicons/core-free-icons"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: null, children: [
    { label: "Billy Branch", href: "/about/billy-branch" },
    { label: "Sons of Blues", href: "/about/sons-of-blues" },
    { label: "Discography", href: "/about/discography" },
  ]},
  { label: "News", href: "/news" },
  { label: "Tour", href: "/tour" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/billy.branch/", icon: Facebook01Icon },
  { label: "Instagram", href: "https://www.instagram.com/bbranch103/", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/c/BillyBranchMusic", icon: YoutubeIcon },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open menu" className="md:hidden text-foreground">
        <HugeiconsIcon icon={Menu01Icon} size={22} />
      </SheetTrigger>

      <SheetContent side="right" className="bg-background border-l-2 border-border w-72 flex flex-col justify-between py-12 px-8">

        {/* Nav Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="flex flex-col gap-3">
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  {item.label}
                </span>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground text-sm uppercase tracking-wider hover:text-primary transition-colors pl-3"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setOpen(false)}
                className="text-foreground text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Socials */}
        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={s.icon} size={18} />
            </a>
          ))}
        </div>

      </SheetContent>
    </Sheet>
  )
}
