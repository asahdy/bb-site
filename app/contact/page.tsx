import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { Facebook01Icon, InstagramIcon, YoutubeIcon } from "@hugeicons/core-free-icons"

export const metadata: Metadata = { title: "Contact" }

const professionalContacts = [
  {
    category: "Booking",
    entries: [
      { label: null, value: "booking@billybranch.com", href: "mailto:billybranchmusic@gmail.com" },
    ],
  },
  {
    category: "Publicist",
    entries: [
      { label: "Email:", name: "Lynn Orman", value: "ormanmusic@gmail.com", href: "mailto:ormanmusic@gmail.com" },
      { label: "Number:", value: "847-452-6469", href: "tel:18474526469" }
    ],
  },
  {
    category: "Management, Press & Blues in Schools",
    entries: [
      { label: "Rosa Enrico", value: "rosa@billybranch.com", href: "mailto:rosa@billybranch.com" },
      { label: "Billy Branch Music", value: "773-351-4200", href: "tel:17733514200" },
    ],
  },
  {
    category: "Billy Branch",
    entries: [
      { label: null, value: "billy@billybranch.com", href: "mailto:billy@billybranch.com" },
    ],
  },
]

const labelContacts = [
  { label: "Co-Owner", name: "Marni Willenson", value: " 773-597-8224", href: "tel: 17735978224" },
]

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/c/BillyBranchMusic", icon: YoutubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/bbranch103/", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/billy.branch/", icon: Facebook01Icon },
]

export default function ContactPage() {
  return (
    <main className="mt-16">

      {/* Header */}
      <section className="h-[25vh] w-full bg-primary flex flex-col justify-end px-6 pb-16 border-b-2 border-border">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-foreground text-4xl md:text-8xl font-bold uppercase tracking-widest leading-tight">
            Contact
          </h1>
        </div>
      </section>

      {/* Professional Contacts */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

          <div className="hidden md:block sticky top-24 self-start">
            <p className="text-muted-foreground text-2xl uppercase tracking-widest">Professional</p>
          </div>

          <div className="flex flex-col gap-12">
            {professionalContacts.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <p className="text-muted-foreground text-lg uppercase tracking-widest border-b border-border pb-1 w-fit">{group.category}</p>
                {group.entries.map((entry) => (
                  <div key={entry.value} className="flex flex-col gap-0.5">
                    {entry.label && (
                      <span className="text-muted-foreground text-lg">{entry.label}</span>
                    )}
                    <a
                      href={entry.href}
                      className="text-foreground font-light text-base md:text-xl hover:text-foreground transition-colors"
                    >
                      {entry.value}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Record Label */}
      <section className="w-full px-6 py-24 border-b-2 border-border">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

          <div className="hidden md:block sticky top-24 self-start">
            <p className="text-muted-foreground text-2xl uppercase tracking-widest">Record Label</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-0.5">
              <p className="text-muted-foreground text-lg uppercase tracking-widest border-b border-border pb-1 w-fit">Rosa's Lounge Records</p>
              <a
                href="https://rosaslounge-records.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-light text-base md:text-xl hover:text-foreground transition-colors"
              >
                rosaslounge-records.com
              </a>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-lg uppercase tracking-widest border-b border-border pb-1 w-fit">Address</span>
              <a
                href="https://maps.google.com/?q=3420+W+Armitage+Ave,+Chicago,+IL+60647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-light text-base md:text-xl hover:text-foreground transition-colors"
              >
                3420 W Armitage Ave, Chicago, IL 60647
              </a>
            </div>

            {labelContacts.map((contact) => (
              <div key={contact.label} className="flex flex-col gap-0.5">
                <p className="text-muted-foreground text-lg uppercase tracking-widest border-b border-border pb-1 w-fit">{contact.label}</p>
                <span className="text-muted-foreground text-lg">{contact.name}</span>
                <a
                  href={contact.href}
                  className="text-foreground font-light text-base md:text-xl hover:text-foreground transition-colors"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Social / Fan */}
      <section className="w-full px-6 py-24">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

          <div className="hidden md:block sticky top-24 self-start">
            <p className="text-muted-foreground text-2xl uppercase tracking-widest">Socials</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <HugeiconsIcon icon={link.icon} size={28} />
              </a>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
