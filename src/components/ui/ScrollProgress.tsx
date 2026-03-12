/**
 * src/components/ui/ScrollProgress.tsx — Reading Progress Bar
 *
 * A thin accent-colored bar at the very top of the viewport
 * that grows as the user scrolls down the page.
 */

import { useScrollProgress } from '@/hooks/useScrollProgress'
import styles from './ScrollProgress.module.css'



export default function ScrollProgress() {
  // Get scroll percentage (0-100) from our custom hook
  const progress = useScrollProgress()

  return (
    <div className={styles.track} aria-hidden="true">
      <div
        className={styles.bar}
        // width is driven by scroll position — CSS transition makes it smooth
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}