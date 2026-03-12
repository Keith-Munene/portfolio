/**
 * src/data/skills.ts — Technical Skills
 *
 * Grouped by category so the UI can render them in sections.
 *
 */

import type { Skill } from '@/types'

export const skills: Skill[] = [
  // ── Frontend ──
  { name: 'React',          category: 'frontend', level: 'expert' },
  { name: 'TypeScript',     category: 'frontend', level: 'expert' },
  { name: 'JavaScript ES6+',category: 'frontend', level: 'expert' },
  { name: 'Next.js',        category: 'frontend', level: 'expert' },
  { name: 'HTML5',          category: 'frontend', level: 'expert' },
  { name: 'CSS3 / SCSS',    category: 'frontend', level: 'expert' },
  { name: 'Tailwind CSS',   category: 'frontend', level: 'proficient' },
  { name: 'D3.js',          category: 'frontend', level: 'proficient' },
  { name: 'WCAG 2.2 / Accessibility', category: 'frontend', level: 'proficient' },

  // ── Backend ──
  { name: 'Node.js',        category: 'backend', level: 'expert' },
  { name: 'Express.js',     category: 'backend', level: 'expert' },
  { name: 'RESTful APIs',   category: 'backend', level: 'expert' },
  { name: 'GraphQL',        category: 'backend', level: 'proficient' },
  { name: 'PostgreSQL',     category: 'backend', level: 'proficient' },
  { name: 'MongoDB',        category: 'backend', level: 'proficient' },
  { name: 'Redis',          category: 'backend', level: 'proficient' },
  { name: 'Prisma ORM',     category: 'backend', level: 'proficient' },
  { name: 'Python',         category: 'backend', level: 'proficient' },
  { name: 'Java / Spring Boot', category: 'backend', level: 'familiar' },
  { name: '.NET Core / C#', category: 'backend', level: 'familiar' },

  // ── DevOps & Cloud ──
  { name: 'AWS (EC2, S3, Lambda)', category: 'devops', level: 'proficient' },
  { name: 'Docker',         category: 'devops', level: 'proficient' },
  { name: 'GitHub Actions', category: 'devops', level: 'proficient' },
  { name: 'CI/CD Pipelines',category: 'devops', level: 'proficient' },
  { name: 'Azure',          category: 'devops', level: 'familiar' },

  // ── Testing ──
  { name: 'Jest',           category: 'testing', level: 'proficient' },
  { name: 'Cypress',        category: 'testing', level: 'proficient' },
  { name: 'React Testing Library', category: 'testing', level: 'proficient' },
]

// Helper: get unique categories
export const skillCategories = ['frontend', 'backend', 'devops', 'testing'] as const
export type SkillCategory = typeof skillCategories[number]

// Category display labels
export const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend:  'Backend & Databases',
  devops:   'Cloud & DevOps',
  testing:  'Testing',
}