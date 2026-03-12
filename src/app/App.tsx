/**
 * src/app/App.tsx — Root Component
 *
 * Composes the entire single-page portfolio.
 * Each section is a separate component — clean separation of concerns.
 *
 * Order of sections:
 * 1. Navbar     — fixed at top
 * 2. ScrollProgress — thin bar at very top
 * 3. Hero       — full-height intro
 * 4. About      — who Keith is
 * 5. Work       — case studies
 * 6. Skills     — tech stack
 * 7. Experience — timeline
 * 8. Contact    — get in touch
 * 9. Footer     — bottom links
 */

import Navbar from '@/components/ui/NavBar'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Work from '@/components/sections/Work'
import Skills from '@/components/sections/Skills'
import Timeline from '@/components/sections/Timeline'
import Contact from '@/components/sections/Contact'


export default function App() {
  return (
    <>
      {/* Fixed elements — always visible */}
      <ScrollProgress />
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}