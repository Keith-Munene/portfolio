/**
 * src/components/sections/Hero.tsx — Hero Section
 *
 * The first thing every visitor sees.
 * Goal: communicate who Keith is and what he does
 * within 3 seconds — before they scroll.
 *
 * Design choices:
 * - Large serif headline for visual weight
 * - Typewriter effect on the role title — creates a moment
 * - Subtle grid texture in the background for depth
 * - Two CTAs: primary (work) and secondary (contact)
 */

import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import styles from './Hero.module.css'

// Roles to cycle through in the typewriter effect
const ROLES = [
  'Full Stack Developer',
  'React Engineer',
  'Node.js Developer',
  'SaaS Builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect — types out each role, deletes it, moves to next
  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Still typing: add one character
        if (displayed.length < currentRole.length) {
          setDisplayed(currentRole.slice(0, displayed.length + 1))
        } else {
          // Finished typing — pause then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting: remove one character
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          // Finished deleting — move to next role
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, isDeleting ? 50 : 80)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="home" className={styles.hero}>
      {/* Subtle dot-grid background */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        {/* Status badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for opportunities
        </div>

        {/* Main headline */}
        <h1 className={styles.headline}>
          Hi, I'm{' '}
          <span className={styles.name}>Keith Munene</span>
          <br />
          <span className={styles.role}>
            {displayed}
            {/* Blinking cursor */}
            <span className={styles.cursor} aria-hidden="true">|</span>
          </span>
        </h1>

        {/* Sub-headline — written like a human, not a CV */}
        <p className={styles.sub}>
          I build fast, accessible SaaS products from front-end to back-end.
          Five years turning complex problems into clean, maintainable code
          — currently based in Nairobi, working with teams worldwide.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#work" className={styles.ctaPrimary}>
            See my work
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            Get in touch
          </a>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href="https://github.com/Keith-Munene"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="GitHub profile"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/keith-munene/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className={styles.scrollDown} aria-label="Scroll to about section">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}