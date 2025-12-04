import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Cleanup after each test case
afterEach(() => {
  cleanup()
})

// Mock GSAP for tests
vi.mock('gsap', () => ({
  gsap: {
    to: vi.fn(() => ({ kill: vi.fn() })),
    from: vi.fn(() => ({ kill: vi.fn() })),
    set: vi.fn(),
    timeline: vi.fn(() => ({
      to: vi.fn(),
      from: vi.fn(),
      kill: vi.fn(),
    })),
  },
}))

// Mock @gsap/react
vi.mock('@gsap/react', () => ({
  useGSAP: vi.fn((callback) => {
    if (typeof callback === 'function') {
      const cleanup = callback()
      return cleanup
    }
  }),
}))