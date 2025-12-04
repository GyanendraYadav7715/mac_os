# Quick Test Commands Reference

## Basic Commands

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run tests once (no watch mode)
npm test -- --run
```

## Specific Test Files

```bash
# Test Welcome component only
npm test Welcome

# Test App component only
npm test App

# Test component exports only
npm test index.test
```

## Test Patterns

```bash
# Run tests matching "Rendering"
npm test -- --grep "Rendering"

# Run tests matching "GSAP"
npm test -- --grep "GSAP"

# Run tests matching "Edge Cases"
npm test -- --grep "Edge Cases"
```

## Debug Commands

```bash
# Run tests with verbose output
npm test -- --reporter=verbose

# Run single test file with output
npm test Welcome -- --reporter=verbose

# Run tests and show console logs
npm test -- --reporter=verbose --silent=false
```

## Coverage Commands

```bash
# Generate coverage report
npm run test:coverage

# Generate coverage and open in browser
npm run test:coverage -- --reporter=html
```

## Watch Mode Options

```bash
# Run in watch mode (default)
npm test

# Run once and exit
npm test -- --run

# Run in UI mode
npm run test:ui
```

## Useful Vitest Flags

```bash
# Run tests in parallel
npm test -- --pool=threads

# Run tests in sequence
npm test -- --pool=forks --poolOptions.forks.singleFork

# Bail after first failure
npm test -- --bail=1

# Update snapshots
npm test -- -u
```

## CI/CD Commands

```bash
# Run all tests once (for CI)
npm test -- --run --reporter=json --outputFile=test-results.json

# Run with coverage for CI
npm run test:coverage -- --run --reporter=json
```