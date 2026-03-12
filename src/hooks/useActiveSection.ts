/**
 * src/hooks/useActiveSection.ts — Active Section Tracker
 *
 * Uses the Intersection Observer API to detect which section
 * is currently visible in the viewport.
 *
 * The navbar uses this to highlight the correct nav link
 * as the user scrolls down the page.
 *
 * WHY INTERSECTION OBSERVER instead of scroll events?
 * - scroll events fire hundreds of times per second (expensive)
 * - IntersectionObserver fires only when elements enter/leave the viewport
 * - Much better for performance
 */

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  // Track which section is currently active
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    // IntersectionObserver calls our callback whenever one of the
    // observed elements enters or leaves the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.isIntersecting = true when the element is visible
          if (entry.isIntersecting) {
            // entry.target.id = the id of the section element
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // rootMargin: shrinks the "viewport" used for intersection checks
        // '-20% 0px -70% 0px' means we trigger when the section is
        // between 20% from top and 30% from bottom — feels more natural
        rootMargin: '-20% 0px -70% 0px',
      }
    )

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Cleanup: stop observing when component unmounts
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}