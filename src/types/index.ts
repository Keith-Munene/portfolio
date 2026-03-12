/**
 * src/types/index.ts — All TypeScript Interfaces
 *
 * Centralised types mean every component imports from one place.
 * If a type changes, TypeScript immediately tells you
 * everywhere in the codebase that needs updating.
 */

// ── A portfolio project / case study ──
export interface Project {
  id: string
  title: string
  tagline: string          // One-line description shown on card
  // The case study — this is what makes the portfolio stand out
  // Instead of "I built X", we tell the story: problem → solution → result
  problem: string          // What problem did this solve?
  solution: string         // How did you approach it?
  result: string           // What was the measurable outcome?
  tech: string[]           // Technologies used
  liveUrl?: string         // Link to deployed app
  githubUrl: string        // Link to GitHub repo
  featured: boolean        // Featured projects appear first/larger
  color: string            // Accent color for the card
}

// ── A skill / technology ──
export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'testing' | 'other'
  // Level gives context — "proficient" vs "familiar" is honest and useful
  level: 'expert' | 'proficient' | 'familiar'
}

// ── A timeline entry (experience or education) ──
export interface TimelineEntry {
  id: string
  type: 'work' | 'education' | 'certification'
  title: string            // Job title or degree name
  organisation: string     // Company or university
  location: string
  period: string           // e.g. "Jan 2024 – Present"
  description: string[]    // Bullet points of achievements
  current?: boolean        // Is this the current role?
}

// ── Navigation link ──
export interface NavLink {
  label: string
  href: string             // e.g. "#work", "#about"
}