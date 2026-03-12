/**
 * src/components/sections/About.tsx — About Section
 *
 * Written like a human talking about their work — not a CV summary.
 * Numbers make it credible. Personal details make it memorable.
 */

import FadeIn from '@/components/motion/FadeIn'
import styles from './About.module.css'

// Key stats — numbers tell the story faster than paragraphs
const STATS = [
  { value: '5+', label: 'Years experience' },
  { value: '25%', label: 'Avg load time reduction' },
  { value: '40%', label: 'Workflow automation gains' },
  { value: '95%', label: 'SLA compliance maintained' },
]

export default function About() {
  return (
    <section id="about" className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: text content */}
          <div className={styles.text}>
            <FadeIn>
              <p className={styles.label}>About</p>
              <h2 className={styles.heading}>
                I build things that work — <em>properly</em>
              </h2>
            </FadeIn>

            <FadeIn delay={1}>
              <p className={styles.body}>
                I started writing code at USIU-Africa studying Software Engineering,
                graduated in 2019, and have been building production systems ever since.
                What started with internships grew into backend engineering at Crandal Tech
                and eventually into running my own consultancy — Dime City Africa —
                where I ship full-stack SaaS products for clients across Africa and beyond.
              </p>
            </FadeIn>

            <FadeIn delay={2}>
              <p className={styles.body}>
                My background is a bit unusual: I've done backend service reliability,
                API integrations, frontend performance work, DevOps pipelines, and
                AI/ML integrations — often on the same project. That breadth means
                I can own a feature end-to-end without needing to context-switch to
                another team. I care about the whole product, not just my slice of it.
              </p>
            </FadeIn>

            <FadeIn delay={3}>
              <p className={styles.body}>
                I write accessible code by default (WCAG 2.2), obsess over Core Web
                Vitals, and document what I build. Boring things that compound into
                significant differences in production.
              </p>
            </FadeIn>
          </div>

          {/* Right: stats grid */}
          <div className={styles.stats}>
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={(i % 2 + 1) as 1 | 2}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}