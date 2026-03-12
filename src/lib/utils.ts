/**
 * src/lib/utils.ts — Utility Functions
 *
 * Small helper functions used across multiple components.
 * Keeping them here avoids duplication.
 */

/**
 * cn() — Class Name helper
 *
 * Joins multiple class name strings together, filtering out
 * falsy values (undefined, null, false, empty string).
 *
 * Usage:
 *   cn('base-class', isActive && 'active', hasError && 'error')
 *   // → 'base-class active'  (if isActive=true, hasError=false)
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}