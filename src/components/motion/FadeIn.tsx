/**
 * src/components/motion/FadeIn.tsx — Scroll-Triggered Fade In
 *
 * Wraps any content and fades it in when it scrolls into view.
 * Uses the IntersectionObserver API — no animation library needed.
 *
 * Usage:
 *   <FadeIn>
 *     <p>This fades in when scrolled into view</p>
 *   </FadeIn>
 *
 *   <FadeIn delay={2}>
 *     <p>This fades in 0.2s after entering view</p>
 *   </FadeIn>
 */

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  // delay: 0-4 maps to CSS classes reveal-delay-0 through reveal-delay-4
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
}

export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  // ref points to the wrapper div — we pass it to IntersectionObserver
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport, add the 'is-visible' class
        // CSS transitions in globals.css handle the actual animation
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          // Once visible, stop observing — no need to re-animate
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        delay > 0 ? `reveal-delay-${delay}` : '',
        className
      )}
    >
      {children}
    </div>
  )
}