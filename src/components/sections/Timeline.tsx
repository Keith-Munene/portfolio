/**
 * src/components/sections/Timeline.tsx — Experience Section
 *
 * A vertical timeline of Keith's professional journey.
 * Each entry shows role, company, period, and achievement bullets.
 */

import FadeIn from '@/components/motion/FadeIn'
import { timeline } from '@/data/timeline'
import { Briefcase, GraduationCap, Award } from 'lucide-react'
import styles from './Timeline.module.css'

// Icon and colour per entry type
const TYPE_CONFIG = {
  work:          { icon: <Briefcase size={14} />,      color: 'var(--accent)' },
  education:     { icon: <GraduationCap size={14} />,  color: '#6366f1' },
  certification: { icon: <Award size={14} />,          color: '#f59e0b' },
}

export default function Timeline() {
  return (
    <section id="experience" className={`${styles.section} section`}>
      <div className="container">
        <FadeIn>
          <p className={styles.label}>Background</p>
          <h2 className={styles.heading}>Experience & Education</h2>
        </FadeIn>

        <div className={styles.timeline}>
          {timeline.map((entry, i) => {
            const config = TYPE_CONFIG[entry.type]
            return (
              <FadeIn key={entry.id} delay={1}>
                <div className={`${styles.entry} ${entry.current ? styles.entryCurrent : ''}`}>
                  {/* Timeline dot + vertical line */}
                  <div className={styles.line}>
                    <div
                      className={styles.dot}
                      style={{ color: config.color, borderColor: config.color }}
                    >
                      {config.icon}
                    </div>
                    {/* Vertical connecting line — hidden on last item */}
                    {i < timeline.length - 1 && <div className={styles.connector} />}
                  </div>

                  {/* Content */}
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span className={styles.period}>{entry.period}</span>
                      {entry.current && (
                        <span className={styles.currentBadge}>Current</span>
                      )}
                    </div>

                    <h3 className={styles.title}>{entry.title}</h3>

                    <div className={styles.org}>
                      {entry.organisation}
                      <span className={styles.location}> — {entry.location}</span>
                    </div>

                    {/* Achievement bullets — only for work entries */}
                    {entry.description.length > 0 && (
                      <ul className={styles.bullets}>
                        {entry.description.map((bullet, j) => (
                          <li key={j} className={styles.bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}