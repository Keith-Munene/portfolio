/**
 * src/data/projects.ts — Project Case Studies
 *
 * Each project is written as a story — problem → solution → result.
 
 */

import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'stock-dashboard',
    title: 'MarketLens',
    tagline: 'Real-time stock dashboard with D3.js candlestick charts and live portfolio tracking',
    problem:
      'Retail investors tracking multiple stocks were constantly switching between tabs — a broker for prices, a spreadsheet for portfolio math, a news site for context. There was no single place that showed everything together, updating live.',
    solution:
      'Built a fully client-side dashboard using React and D3.js — implementing Geometric Brownian Motion (the same mathematical model behind Black-Scholes options pricing) to simulate realistic price feeds. Architected global state with useReducer and a discriminated union action type, giving compile-time guarantees over every state transition. Charts are rendered directly in SVG via D3, with a ResizeObserver making them fully responsive without any layout recalculation.',
    result:
      'A portfolio tracker, watchlist, live price alerts, and D3 candlestick charts — all in one interface updating every 1.5 seconds. Zero API costs: the simulation is statistically valid and visually indistinguishable from live data, making it a compelling demo at any stage.',
    tech: ['React', 'TypeScript', 'D3.js', 'Vite', 'useReducer', 'ResizeObserver API'],
    githubUrl: 'https://github.com/Keith-Munene/stock-dashboard',
    featured: true,
    color: '#00d9b8',
  },
  {
    id: 'nexus-chat',
    title: 'Nexus Chat',
    tagline: 'Production-grade real-time chat with authentication, rooms, and typing indicators',
    problem:
      'Most chat app tutorials stop at the happy path — they show messages appearing in real time but skip authentication, room permissions, message persistence, and the dozens of edge cases that make an app actually usable. The goal was to build one that handles all of it.',
    solution:
      'Chose Next.js App Router to demonstrate the server/client component boundary — pages fetch initial data server-side (no loading spinners, better SEO) then hand off to client components for real-time interactivity. Authentication uses NextAuth with JWT strategy and bcrypt password hashing. Pusher Channels handles WebSocket delivery without a persistent server — critical for a Next.js deployment. Prisma gives type-safe database access with cascade deletes, composite unique constraints, and multi-column indexes for fast message pagination.',
    result:
      'Full authentication flow, multiple rooms, live typing indicators, message persistence, soft deletes, and cursor-based pagination — all deployed on a serverless stack. The architecture decisions (server components, JWT sessions, Prisma transactions) are the same ones used at scale by production SaaS companies.',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Pusher', 'NextAuth', 'CSS Modules'],
    githubUrl: 'https://github.com/Keith-Munene/nexus-chat',
    featured: true,
    color: '#6366f1',
  },
]