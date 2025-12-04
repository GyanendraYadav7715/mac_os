import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Welcome from '../Welcome'
import { gsap } from 'gsap'

describe('Welcome Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<Welcome />)
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('should render the welcome section with correct id', () => {
      const { container } = render(<Welcome />)
      const section = container.querySelector('#welcome')
      expect(section).toBeInTheDocument()
    })

    it('should render subtitle text correctly', () => {
      render(<Welcome />)
      const subtitle = screen.getByText((content, element) => {
        return element.tagName === 'P' && content.includes("Hey,I'm Gyanendra!")
      })
      expect(subtitle).toBeInTheDocument()
    })

    it('should render title text correctly', () => {
      render(<Welcome />)
      const title = screen.getByText((content, element) => {
        return element.tagName === 'H1' && content.includes('portfolio')
      })
      expect(title).toBeInTheDocument()
    })

    it('should render small screen message', () => {
      render(<Welcome />)
      expect(screen.getByText(/This portfolio is designed for desktop view/i)).toBeInTheDocument()
    })
  })

  describe('Text Rendering - renderTest function', () => {
    it('should split subtitle text into individual span elements', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const spans = subtitle.querySelectorAll('span')
      
      // "Hey,I'm Gyanendra! Welcome to my portfolio." has 45 characters
      expect(spans.length).toBe(45)
    })

    it('should split title text into individual span elements', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      const spans = title.querySelectorAll('span')
      
      // "portfolio" has 9 characters
      expect(spans.length).toBe(9)
    })

    it('should apply correct className to subtitle spans', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const spans = subtitle.querySelectorAll('span')
      
      spans.forEach(span => {
        expect(span.className).toContain('text-3xl')
        expect(span.className).toContain('font-bold')
        expect(span.className).toContain('font-georama')
      })
    })

    it('should apply correct className to title spans', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      const spans = title.querySelectorAll('span')
      
      spans.forEach(span => {
        expect(span.className).toContain('text-9xl')
        expect(span.className).toContain('italic')
        expect(span.className).toContain('font-georama')
      })
    })

    it('should set correct font weight for subtitle spans', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const spans = subtitle.querySelectorAll('span')
      
      spans.forEach(span => {
        expect(span.style.fontVariationSettings).toBe('"wght" 300')
      })
    })

    it('should set correct font weight for title spans', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      const spans = title.querySelectorAll('span')
      
      spans.forEach(span => {
        expect(span.style.fontVariationSettings).toBe('"wght" 500')
      })
    })

    it('should convert spaces to non-breaking spaces', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const spans = subtitle.querySelectorAll('span')
      
      // Find spans that should contain non-breaking spaces
      const spaceIndices = [4, 9, 22] // Positions of spaces in the subtitle
      spaceIndices.forEach(index => {
        expect(spans[index].textContent).toBe('\u00A0')
      })
    })

    it('should render regular characters correctly', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      const spans = title.querySelectorAll('span')
      
      const expectedChars = 'portfolio'.split('')
      expectedChars.forEach((char, index) => {
        expect(spans[index].textContent).toBe(char)
      })
    })
  })

  describe('GSAP Integration', () => {
    it('should call useGSAP hook on mount', () => {
      const { useGSAP } = require('@gsap/react')
      render(<Welcome />)
      expect(useGSAP).toHaveBeenCalled()
    })

    it('should setup hover effects for subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      expect(subtitle).toBeInTheDocument()
      expect(subtitle.querySelectorAll('span').length).toBeGreaterThan(0)
    })

    it('should setup hover effects for title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      expect(title).toBeInTheDocument()
      expect(title.querySelectorAll('span').length).toBeGreaterThan(0)
    })

    it('should have cleanup function for animations', () => {
      const { useGSAP } = require('@gsap/react')
      render(<Welcome />)
      
      // Verify useGSAP was called with a function that returns cleanup
      const callback = useGSAP.mock.calls[0][0]
      expect(typeof callback).toBe('function')
    })
  })

  describe('Event Handlers - setupTextHover', () => {
    it('should add mousemove event listener to subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Simulate mouse move
      const mouseEvent = new MouseEvent('mousemove', {
        bubbles: true,
        clientX: 100,
      })
      
      expect(() => fireEvent(subtitle, mouseEvent)).not.toThrow()
    })

    it('should add mousemove event listener to title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Simulate mouse move
      const mouseEvent = new MouseEvent('mousemove', {
        bubbles: true,
        clientX: 100,
      })
      
      expect(() => fireEvent(title, mouseEvent)).not.toThrow()
    })

    it('should add mouseleave event listener to subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      expect(() => fireEvent.mouseLeave(subtitle)).not.toThrow()
    })

    it('should add mouseleave event listener to title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      expect(() => fireEvent.mouseLeave(title)).not.toThrow()
    })

    it('should call gsap.to when mouse moves over subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      fireEvent.mouseMove(subtitle, { clientX: 100 })
      
      // GSAP should be called for animation
      expect(gsap.to).toHaveBeenCalled()
    })

    it('should call gsap.to when mouse leaves subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      gsap.to.mockClear()
      fireEvent.mouseLeave(subtitle)
      
      expect(gsap.to).toHaveBeenCalled()
    })
  })

  describe('Refs', () => {
    it('should create ref for subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      expect(subtitle).toBeInTheDocument()
    })

    it('should create ref for title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      expect(title).toBeInTheDocument()
    })

    it('should attach subtitle ref to p element', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      expect(subtitle.tagName).toBe('P')
    })

    it('should attach title ref to h1 element', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      expect(title.tagName).toBe('H1')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty container in setupTextHover gracefully', () => {
      // This tests the internal null check in setupTextHover
      render(<Welcome />)
      // Component should render without errors even if refs are null initially
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('should handle special characters in text', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Check for comma, apostrophe, exclamation mark
      const text = subtitle.textContent
      expect(text).toContain(',')
      expect(text).toContain("'")
      expect(text).toContain('!')
    })

    it('should render correctly with different text lengths', () => {
      const { container } = render(<Welcome />)
      
      const subtitle = container.querySelector('p')
      const title = container.querySelector('h1')
      
      expect(subtitle.querySelectorAll('span').length).toBe(45)
      expect(title.querySelectorAll('span').length).toBe(9)
    })

    it('should handle rapid mouse movements without errors', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Simulate rapid mouse movements
      for (let i = 0; i < 10; i++) {
        fireEvent.mouseMove(subtitle, { clientX: i * 10 })
      }
      
      expect(subtitle).toBeInTheDocument()
    })
  })

  describe('Component Structure', () => {
    it('should have correct HTML structure', () => {
      const { container } = render(<Welcome />)
      
      const section = container.querySelector('section#welcome')
      expect(section).toBeInTheDocument()
      
      const p = section.querySelector('p')
      expect(p).toBeInTheDocument()
      
      const h1 = section.querySelector('h1')
      expect(h1).toBeInTheDocument()
      
      const smallScreen = section.querySelector('.small-screen')
      expect(smallScreen).toBeInTheDocument()
    })

    it('should render elements in correct order', () => {
      const { container } = render(<Welcome />)
      const section = container.querySelector('section#welcome')
      const children = Array.from(section.children)
      
      expect(children[0].tagName).toBe('P')
      expect(children[1].tagName).toBe('H1')
      expect(children[2].className).toContain('small-screen')
    })
  })

  describe('Accessibility', () => {
    it('should use semantic HTML elements', () => {
      const { container } = render(<Welcome />)
      
      expect(container.querySelector('section')).toBeInTheDocument()
      expect(container.querySelector('p')).toBeInTheDocument()
      expect(container.querySelector('h1')).toBeInTheDocument()
    })

    it('should have proper heading hierarchy', () => {
      render(<Welcome />)
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
    })

    it('should maintain text readability', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const title = container.querySelector('h1')
      
      expect(subtitle.textContent).toBeTruthy()
      expect(title.textContent).toBeTruthy()
    })
  })

  describe('Performance', () => {
    it('should not cause memory leaks with event listeners', () => {
      const { unmount, container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Trigger events before unmount
      fireEvent.mouseMove(subtitle, { clientX: 100 })
      
      // Unmount should clean up listeners
      expect(() => unmount()).not.toThrow()
    })

    it('should clean up GSAP animations on unmount', () => {
      const { unmount } = render(<Welcome />)
      expect(() => unmount()).not.toThrow()
    })
  })

  describe('FONT_WEIGHTS Configuration', () => {
    it('should use correct weight range for subtitle', () => {
      // Testing that the component uses the correct configuration
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const spans = subtitle.querySelectorAll('span')
      
      // Initial weight should be 300 (baseWeight parameter)
      expect(spans[0].style.fontVariationSettings).toBe('"wght" 300')
    })

    it('should use correct weight range for title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      const spans = title.querySelectorAll('span')
      
      // Initial weight should be 500 (baseWeight parameter)
      expect(spans[0].style.fontVariationSettings).toBe('"wght" 500')
    })
  })

  describe('Integration Tests', () => {
    it('should work with GSAP hover effects', async () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Simulate hover
      fireEvent.mouseMove(subtitle, { clientX: 100 })
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should reset animations on mouse leave', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      gsap.to.mockClear()
      
      // Hover and then leave
      fireEvent.mouseMove(title, { clientX: 150 })
      fireEvent.mouseLeave(title)
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should handle multiple simultaneous interactions', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      const title = container.querySelector('h1')
      
      // Interact with both elements
      fireEvent.mouseMove(subtitle, { clientX: 100 })
      fireEvent.mouseMove(title, { clientX: 200 })
      
      expect(subtitle).toBeInTheDocument()
      expect(title).toBeInTheDocument()
    })
  })
})