/**
 * src/components/sections/Work.tsx — Projects / Case Studies
 *
 * Maps over the projects data and renders each as a CaseStudyCard.
 * This is the most important section — it's where recruiters
 * decide whether to reach out.
 */

import FadeIn from '@/components/motion/FadeIn'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { projects } from '@/data/projects'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section id="work" className={`${styles.section} section`}>
      <div className="container">
        {/* Section header */}
        <FadeIn>
          <div className={styles.header}>
            <div>
              <p className={styles.label}>Selected Work</p>
              <h2 className={styles.heading}>
                Projects built to solve<br />real problems
              </h2>
            </div>
            <p className={styles.intro}>
              Each project below is documented as a case study —
              the problem it solved, the technical decisions made,
              and the outcome. Not just "what was built" but "why".
            </p>
          </div>
        </FadeIn>

        {/* Case study cards */}
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={1}>
              <CaseStudyCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>

        {/* Link to GitHub for more */}
        <FadeIn>
          <div className={styles.more}>
            <p>More projects on GitHub →</p>
            <a
              href="https://github.com/Keith-Munene"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              github.com/Keith-Munene
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}