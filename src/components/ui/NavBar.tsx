/**
 * src/components/ui/Navbar.tsx — Sticky Navigation
 *
 * Sticks to the top of the page as the user scrolls.
 * Highlights the nav link matching the current visible section
 * using our useActiveSection hook.
 *
 * The navbar starts transparent and gains a background
 * after the user scrolls past the hero — a subtle but
 * professional touch.
 */

import { useState, useEffect } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import styles from './Navbar.module.css'

// The section IDs on the page — must match the id="" attributes
const SECTION_IDS = ['home', 'about', 'work', 'skills', 'experience', 'contact']

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#work' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  // Track whether user has scrolled down (for background effect)
  const [scrolled, setScrolled] = useState(false)
  // Track mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)
  // Which section is currently in view
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when user clicks a link
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        {/* Logo / Name */}
        <a href="#home" className={styles.logo} onClick={handleLinkClick}>
          KM<span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.link} ${
                  activeSection === link.href.slice(1) ? styles.linkActive : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="https://github.com/Keith-Munene"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          GitHub
        </a>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Keith-Munene"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
            onClick={handleLinkClick}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  )
}