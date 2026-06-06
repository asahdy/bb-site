"use client"

import { useEffect, useRef, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { PauseIcon, PlayIcon } from "@hugeicons/core-free-icons"

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Attempt autoplay — browsers may silently block it
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music/bb - the harmonica man .mp3" loop />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-background border-2 border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
      >
        <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} size={20} />
      </button>
    </>
  )
}
