# Storybook — use for isolated component states & documentation

## Why this matters (from the field)
Static stories catch static bugs. They show you that a component renders — they don't show you that it's usable. The failures worth catching happen *between* renders: focus moves to the wrong element after a menu closes, a keyboard user gets trapped inside a dialog, an error state announces itself visually but not to a screen reader. Those bugs only surface when something drives the component the way a real user would, and that's what `play()` functions are for. Any story that represents an interactive state — open/close, keyboard navigation, form errors — should have a `play()` that exercises the interaction and asserts the result, plus an axe check gating the run. If a story doesn't have a `play()`, ask whether the state it's showing is actually static; if it isn't, the test coverage is a lie. Treat Storybook as a test runner that happens to render components, not a gallery that happens to run tests.

## Source basis
- `references/source-03-get-started-with-storybook-storybook-docs.md`

## What Storybook is
- Storybook is a **frontend workshop** for building UI components and pages **in isolation**.
- It helps developers develop/share **hard-to-reach states and edge cases** without running the whole app.
- It is **open source and free**.

## Why it matters for a component library
- **UI development & documentation:** helps build and share component usage guidelines.
- **Testing:** stories are a pragmatic starting point for UI testing.
- **Sharing:** publishing/embed allows others to view stories (also mentioned as embedding into tools like Notion/Figma).

## Install (from excerpt)
- Install into an existing project or create a new one:
  - `npm create storybook@latest`

## Core concepts (from excerpt)
- **Story:** captures the **rendered state** of a UI component.
  - Each component can have **multiple stories** describing different states.
- **Docs / autodocs:** Storybook can **analyze components** to auto-create documentation alongside stories.
- **Testing:** using stories helps prevent UI bugs by testing story states.

## Types of testing and accessibility testing mentioned
- **Accessibility tests** (explicitly listed)
- **Visual tests / snapshot tests**
- **Interaction tests**

## Framework support mentioned
- Supported frameworks include Next.js, React (with Vite/webpack), React Native (web/on device), Preact, Vue, Angular, SvelteKit, Web Components.

## Minimal agent guidance when using Storybook
- Create stories that cover edge cases and state permutations relevant to the component API.
- Include accessibility/interaction-focused stories that exercise keyboard and focus-sensitive behavior (aligned with your WCAG audit goals).