/**
 * src/hooks/useScrollProgress.ts — Page Scroll Progress
 *
 * Returns a number 0–100 representing how far the user has
 * scrolled down the page. Used to drive the thin progress
 * bar at the top of the viewport.
 */

import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // scrollHeight - clientHeight = total scrollable distance
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      // Avoid division by zero on short pages
      if (docHeight === 0) {
        setProgress(100)
        return
      }

      const percent = (scrollTop / docHeight) * 100
      setProgress(Math.min(100, Math.max(0, percent)))
    }

    // passive: true tells the browser this handler won't call
    // preventDefault() — allows scroll performance optimisation
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}