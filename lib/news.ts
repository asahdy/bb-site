export type NewsItem = {
  title: string
  description: string
  date: string
  source: string
  href: string
  image?: string
}

export const newsItems: NewsItem[] = [
  {
    title: "16 Oscars: 'Sinners' Sparks Conversation About Chicago Blues History and Its Future",
    description: "The Oscar-winning film 'Sinners' has renewed national attention on Chicago Blues. Billy Branch weighs in on the genre's roots, legacy, and what its future looks like.",
    date: "March 2026",
    source: "WTTW Chicago",
    href: "https://news.wttw.com/2026/03/13/16-oscars-sinners-sparks-conversation-chicago-blues-history-and-its-future",
    image: "/images/BIMB.jpg",
  },
  {
    title: "Rick Kogan: Billy Branch Bought…",
    description: "Tribune columnist Rick Kogan profiles Billy Branch in a wide-ranging feature on the Blues legend's life, music, and enduring presence in Chicago.",
    date: "March 2026",
    source: "AOL / Chicago Tribune",
    href: "https://www.aol.com/rick-kogan-billy-branch-bought-110000400.html",
    image: "https://media.zenfs.com/en/chicago_tribune_national_336/45c1caa10baa5a8cbe24760befc0ecdc",
  },
  {
    title: "Chicago Blues: Billy Branch",
    description: "The Chicago Tribune spotlights Billy Branch and the living tradition of Chicago Blues — its history, its champions, and its place in the city's cultural identity.",
    date: "February 2026",
    source: "Chicago Tribune",
    href: "https://www.chicagotribune.com/2026/02/25/chicago-blues-billy-branch/",
    image: "/images/BIMB.jpg",
  },
  {
    title: "Australian Musician Magazine",
    description: "Placeholder — add title and description when available.",
    date: "2025",
    source: "Australian Musician Magazine",
    href: "#",
  },
  {
    title: "Blues Harp Legend Billy Branch Releases New Album Offering 'Message Music With A Groove'",
    description: "Billy Branch releases 'Blues Is My Biography,' the inaugural record on Rosa's Lounge Records, celebrating the album with a live concert featuring the Sons of Blues in Hyde Park.",
    date: "November 2025",
    source: "Block Club Chicago",
    href: "https://blockclubchicago.org/2025/11/20/blues-harp-legend-billy-branch-releases-new-album-offering-message-music-with-a-groove/",
    image: "https://i0.wp.com/bcc-newspack.s3.amazonaws.com/uploads/2025/11/MixCollage-20-Nov-2025-06-03-AM-7326.jpg?fit=2000%2C1300&ssl=1",
  },
  {
    title: "Review: Billy Branch & The Sons of the Blues — 'The Blues Is My Biography'",
    description: "Grammy-nominated harmonica legend Billy Branch delivers a commanding 11-track collection blending traditional Chicago Blues with modern arrangements, featuring standout cuts like 'Dead End Street' and 'Toxic Love.'",
    date: "November 2025",
    source: "Americana Highways",
    href: "https://americanahighways.org/2025/11/18/review-billy-branch-the-sons-of-the-blues-the-blues-is-my-biography/",
    image: "https://americanahighways.org/wp-content/uploads/2025/11/Billy_Branch_Cover-copy-2.jpg",
  },
]
