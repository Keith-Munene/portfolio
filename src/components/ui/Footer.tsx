/**
 * src/components/ui/Footer.tsx — Site Footer
 */

import { Github, Linkedin, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <p className={styles.copy}>
          © {year} Keith Munene — Built with React & TypeScript
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/Keith-Munene" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/keith-munene/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:keythmunene@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}