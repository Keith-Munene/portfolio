/**
 * src/components/sections/Contact.tsx — Contact Section
 *
 * Simple and direct — email link, LinkedIn, GitHub.
 * No contact form (that requires a backend).
 * A mailto link is more reliable and actually gets used.
 */

import FadeIn from '@/components/motion/FadeIn'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.inner}>
          <FadeIn>
            <p className={styles.label}>Contact</p>
            <h2 className={styles.heading}>
              Let's build something<br />
              <em>worth building</em>
            </h2>
            <p className={styles.sub}>
              I'm open to full-time roles, contract work, and interesting
              collaborations. If you're building something with real users
              and need someone who cares about the whole product — get in touch.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className={styles.links}>
              {/* Primary CTA — email */}
              <a
                href="mailto:keythmunene@gmail.com"
                className={styles.emailBtn}
              >
                <Mail size={18} />
                keythmunene@gmail.com
              </a>

              {/* Secondary links */}
              <div className={styles.secondary}>
                <a
                  href="https://www.linkedin.com/in/keith-munene/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Keith-Munene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  <Github size={16} />
                  GitHub
                </a>
                <span className={styles.location}>
                  <MapPin size={14} />
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}