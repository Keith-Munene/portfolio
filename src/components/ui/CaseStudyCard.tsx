/**
 * src/components/ui/CaseStudyCard.tsx — Project Case Study Card
 *
 * This is the most important UI component in the portfolio.
 * Instead of a typical project card (screenshot + tech badges),
 * it tells the project's STORY: problem → solution → result.
 *
 */

import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/types'
import styles from '../ui/CaseStudyCard.module.css'


interface Props {
  project: Project
  // index: used to alternate card layout (left/right)
  index: number
}

export default function CaseStudyCard({ project, index }: Props) {
  const isEven = index % 2 === 0

  return (
    <article
      className={`${styles.card} ${isEven ? styles.cardLeft : styles.cardRight}`}
      // CSS custom property lets us apply the project's unique color
      style={{ '--project-color': project.color } as React.CSSProperties}
    >
      {/* Colored accent bar on the side */}
      <div className={styles.accentBar} />

      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.tagline}>{project.tagline}</p>
          </div>
          <div className={styles.links}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={18} />
              <span>Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.linkLive}`}
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink size={18} />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        {/* The case study  */}
        <div className={styles.caseStudy}>
          {/* Problem */}
          <div className={styles.caseBlock}>
            <div className={styles.caseLabel}>
              <span className={styles.caseDot} style={{ background: '#ff6b6b' }} />
              Problem
            </div>
            <p className={styles.caseText}>{project.problem}</p>
          </div>

          {/* Solution */}
          <div className={styles.caseBlock}>
            <div className={styles.caseLabel}>
              <span className={styles.caseDot} style={{ background: '#ffd93d' }} />
              Approach
            </div>
            <p className={styles.caseText}>{project.solution}</p>
          </div>

          {/* Result */}
          <div className={styles.caseBlock}>
            <div className={styles.caseLabel}>
              <span className={styles.caseDot} style={{ background: 'var(--accent)' }} />
              Outcome
            </div>
            <p className={styles.caseText}>{project.result}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className={styles.tech}>
          {project.tech.map(t => (
            <span key={t} className={styles.techBadge}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}