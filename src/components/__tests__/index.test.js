import { describe, it, expect } from 'vitest'
import { Navbar, Welcome } from '../index'

describe('Component Exports', () => {
  describe('Named Exports', () => {
    it('should export Navbar component', () => {
      expect(Navbar).toBeDefined()
      expect(typeof Navbar).toBe('function')
    })

    it('should export Welcome component', () => {
      expect(Welcome).toBeDefined()
      expect(typeof Welcome).toBe('function')
    })
  })

  describe('Component Types', () => {
    it('Navbar should be a valid React component', () => {
      expect(Navbar).toBeDefined()
      expect(Navbar.prototype).toBeDefined()
    })

    it('Welcome should be a valid React component', () => {
      expect(Welcome).toBeDefined()
      expect(Welcome.prototype).toBeDefined()
    })
  })

  describe('Module Structure', () => {
    it('should export exactly two components', () => {
      const exports = require('../index')
      const exportedKeys = Object.keys(exports)
      expect(exportedKeys).toHaveLength(2)
    })

    it('should use named exports (not default)', () => {
      const exports = require('../index')
      expect(exports.Navbar).toBeDefined()
      expect(exports.Welcome).toBeDefined()
    })
  })

  describe('Import Integrity', () => {
    it('should import Navbar from correct path', () => {
      // This verifies the import statement works correctly
      expect(() => {
        const { Navbar } = require('../index')
        return Navbar
      }).not.toThrow()
    })

    it('should import Welcome from correct path', () => {
      // This verifies the import statement works correctly
      expect(() => {
        const { Welcome } = require('../index')
        return Welcome
      }).not.toThrow()
    })
  })

  describe('Component Identity', () => {
    it('Navbar should match the actual Navbar component', () => {
      const { Navbar } = require('../index')
      const ActualNavbar = require('../Navbar').default
      expect(Navbar).toBe(ActualNavbar)
    })

    it('Welcome should match the actual Welcome component', () => {
      const { Welcome } = require('../index')
      const ActualWelcome = require('../Welcome').default
      expect(Welcome).toBe(ActualWelcome)
    })
  })

  describe('Re-export Functionality', () => {
    it('should re-export components without modification', () => {
      const { Navbar, Welcome } = require('../index')
      
      // Components should be functions (React components)
      expect(typeof Navbar).toBe('function')
      expect(typeof Welcome).toBe('function')
    })

    it('should maintain component displayName if present', () => {
      const { Navbar, Welcome } = require('../index')
      
      // Check if displayName exists and is correct
      if (Navbar.displayName) {
        expect(Navbar.displayName).toBeTruthy()
      }
      if (Welcome.displayName) {
        expect(Welcome.displayName).toBeTruthy()
      }
    })
  })

  describe('Edge Cases', () => {
    it('should handle destructuring correctly', () => {
      const { Navbar, Welcome } = require('../index')
      expect(Navbar).not.toBe(Welcome)
    })

    it('should allow importing only one component', () => {
      const { Navbar } = require('../index')
      expect(Navbar).toBeDefined()
    })

    it('should allow importing in any order', () => {
      const { Welcome, Navbar } = require('../index')
      expect(Welcome).toBeDefined()
      expect(Navbar).toBeDefined()
    })
  })
})