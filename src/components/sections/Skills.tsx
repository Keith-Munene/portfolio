/**
 * src/components/sections/Skills.tsx — Technical Skills
 *
 * Groups skills by category (Frontend, Backend, DevOps, Testing).
 * Uses the level field to give context — "Expert" vs "Familiar"
 * is honest and builds trust with technical recruiters.
 */

import FadeIn from '@/components/motion/FadeIn'
import { skills, skillCategories, categoryLabels } from '@/data/skills'
import type { SkillCategory } from '@/data/skills'
import styles from './Skills.module.css'

// Map level to a visual indicator
const LEVEL_CONFIG = {
  expert:     { label: 'Expert',     dots: 3 },
  proficient: { label: 'Proficient', dots: 2 },
  familiar:   { label: 'Familiar',   dots: 1 },
}

export default function Skills() {
  return (
    <section id="skills" className={`${styles.section} section`}>
      <div className="container">
        <FadeIn>
          <p className={styles.label}>Tech Stack</p>
          <h2 className={styles.heading}>
            Tools I work with
          </h2>
          <p className={styles.sub}>
            Five years across the stack means comfort with a wide range of tools.
            Honest about levels — expert where I've shipped production code,
            familiar where I've built projects but wouldn't claim mastery.
          </p>
        </FadeIn>

        {/* Render one block per category */}
        <div className={styles.categories}>
          {skillCategories.map((category: SkillCategory, i) => {
            const categorySkills = skills.filter(s => s.category === category)
            return (
              <FadeIn key={category} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className={styles.category}>
                  <h3 className={styles.categoryTitle}>
                    {categoryLabels[category]}
                  </h3>
                  <div className={styles.skillList}>
                    {categorySkills.map(skill => {
                      const config = LEVEL_CONFIG[skill.level]
                      return (
                        <div key={skill.name} className={styles.skill}>
                          <div className={styles.skillLeft}>
                            {/* Level dots — visual shorthand for proficiency */}
                            <div
                              className={styles.dots}
                              title={config.label}
                              aria-label={`${skill.level} level`}
                            >
                              {[1, 2, 3].map(dot => (
                                <span
                                  key={dot}
                                  className={`${styles.dot} ${dot <= config.dots ? styles.dotFilled : ''}`}
                                />
                              ))}
                            </div>
                            <span className={styles.skillName}>{skill.name}</span>
                          </div>
                          <span className={styles.skillLevel}>{config.label}</span>
                        </div>
                      )
                    })}
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