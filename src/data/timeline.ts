/**
 * src/data/timeline.ts — Experience & Education
 *
 * Written as achievements, not job descriptions.
 */

import type { TimelineEntry } from '@/types'

export const timeline: TimelineEntry[] = [
  {
    id: 'dime-city',
    type: 'work',
    title: 'Full Stack Developer (Freelance)',
    organisation: 'Dime City Africa — Independent Software Consultancy',
    location: 'Nairobi, Kenya · Remote',
    period: 'Jan 2024 – Present',
    current: true,
    description: [
      'Slashed application load times by 25% through code splitting, lazy loading, and server-side caching — directly improving Core Web Vitals and SEO rankings for client platforms.',
      'Architected WCAG 2.2-accessible web applications using semantic HTML5 and Vanilla JavaScript, ensuring full keyboard navigability and screen reader compatibility.',
      'Integrated AI/ML model APIs to automate client workflows, reducing manual processing overhead by an estimated 40%.',
      'Delivered a 30% reduction in deployment friction by engineering GitHub Actions CI/CD pipelines, enabling rapid iteration with minimal downtime.',
      'Maintained high SLAs across three concurrent production environments on AWS, resolving incidents proactively before end-user impact.',
    ],
  },
  {
    id: 'crandal',
    type: 'work',
    title: 'Backend Software Developer',
    organisation: 'Crandal Tech Solutions',
    location: 'Nairobi, Kenya',
    period: 'Jan 2022 – Jan 2024',
    description: [
      'Boosted system reliability by 18% by re-engineering Node.js and Java (Spring Boot) backend services with structured logging and automated monitoring.',
      'Cut deployment times by 30% by rebuilding Docker-based CI/CD pipelines, eliminating environment inconsistencies that caused recurring release failures.',
      'Engineered multi-platform API integrations via REST and SOAP, connecting internal SaaS services with five third-party platforms.',
      'Reduced new engineer onboarding time by 50% by authoring a comprehensive technical documentation library covering system architecture and API references.',
    ],
  },
  {
    id: 'ellucian',
    type: 'work',
    title: 'IT Service Desk Officer (Engineering-Facing)',
    organisation: 'Ellucian',
    location: 'Remote',
    period: 'Jan 2021 – Dec 2021',
    description: [
      'Achieved 95% SLA compliance across 500+ enterprise incidents using systematic diagnostics and structured escalation workflows.',
      'Eliminated 20% of recurring incidents by engineering JIRA workflow automations and building a Confluence runbook library, saving the team 5+ hours per week.',
    ],
  },
  {
    id: 'clearpoint',
    type: 'work',
    title: 'Software Engineering Intern',
    organisation: 'ClearPoint Consulting',
    location: 'Nairobi, Kenya',
    period: 'Sep 2019 – Dec 2020',
    description: [
      'Improved deployment success rates by supporting AWS infrastructure provisioning and Docker-based CI/CD pipelines.',
    ],
  },
  {
    id: 'usiu',
    type: 'education',
    title: 'Bachelor of Science in Applied Computer Technology (Software Engineering)',
    organisation: 'United States International University–Africa (USIU-A)',
    location: 'Nairobi, Kenya',
    period: 'Graduated 2019',
    description: [],
  },
  {
    id: 'meta-cert',
    type: 'certification',
    title: 'Meta Front-End Developer Professional Certificate',
    organisation: 'Meta',
    location: 'Online',
    period: '2023',
    description: [],
  },
  {
    id: 'ibm-cert',
    type: 'certification',
    title: 'IBM Back-End Development Professional Certificate',
    organisation: 'IBM',
    location: 'Online',
    period: '2023',
    description: [],
  },
]