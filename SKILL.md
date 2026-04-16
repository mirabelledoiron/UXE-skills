---
name: uxe-senior
description: "Apply senior UX engineering judgment to build production-grade, accessible React/TypeScript component libraries with design tokens, WCAG 2.1 AA-focused QA, Storybook stories (including play() + a11y checks), Tailwind theming, versioning with Changesets, and AI-integrated developer tooling via MCP/Claude workflows."
metadata:
  version: 1.0.0
  required_bins: [node, pnpm, git]
---
## Mission fit (hard gates)
1. If the request is pure backend / no UI layer: stop and ask for the missing UI scope.
2. If the request is mobile native (Swift/Kotlin) with no React Native/Web React scope: stop.
3. If the request implies network use: do not add network calls; proceed with offline scaffolding guidance.
4. Never generate a component without:
   - ARIA roles where applicable
   - keyboard support for all interactive controls
   - focus management and focus-visible behavior
5. Never bypass token-based theming:
   - Do not hardcode colors outside tokens.
6. Never output component code that fails axe-core automated checks.
   - If you cannot verify, add a11y test scaffolding and explicitly mark verification as required.
7. Never auto-publish to npm.
   - Require human confirmation before any publication step.
8. Compatibility constraint:
   - If a prop API change would break existing consumers, require a major version bump and draft an explicit migration note.

## Read-first knowledge (priority order)
1. references/knowledge-accessibility-wcag-2-1-aa-checklist.md
2. references/knowledge-storybook-quickstart-and-concepts.md
3. references/knowledge-radix-primitives-architecture-hooks.md
4. references/knowledge-mcp-and-claude-tooling-integration-notes.md

## Workflow (progressive disclosure)
### 1) Clarify the target artifact (fast)
- Identify which trigger you’re responding to:
  - build a component / create a React component / component API
  - design system / build a design system
  - add dark mode / theming system
  - accessibility review / WCAG audit
  - Figma to code
  - Storybook story / Storybook play() / a11y checks
  - design tokens / theming + token exports
- Output a single “target map”:
  - Component name + intended variant/state coverage
  - Token inputs/outputs (light/dark/multi-theme)
  - Interaction model (mouse, keyboard, focus order)
  - Accessibility expectations (roles/labels/errors/contrast)
  - Documentation/test requirements (Storybook + a11y)

### 2) Accessibility-first component spec (before code)
- Use the WCAG 2.1 AA checklist as your component QA contract.
- Produce an “a11y acceptance list” for the component:
  - Keyboard operability + no keyboard trap
  - Focus-visible + no unexpected context changes
  - Proper labeling/instructions and error states (when relevant)
  - Contrast checks aligned to AA (text ≥ 4.5:1; non-text UI states where applicable ≥ 3:1)
  - Hover/focus disclosure requirements (dismissible/hoverable/persistent as applicable)
- If the component is a known pattern, prefer Radix Primitives as the behavior layer.

### 3) Architecture choice: headless vs styled
- Decide headless vs styled based on library strategy:
  - Prefer headless/un-styled behavior primitives (Radix-style) when you need consistent UX and a single token-driven styling layer.
  - Prefer styled wrappers when consumers need turnkey look/feel AND you can still enforce token usage.
- Produce a parts-level plan (what is behavior vs what is tokens/styles).

### 4) Design tokens + theming system plan
- Define token categories required by the component (e.g., color.surface, color.text, color.border, spacing, radius, typography).
- Define multi-theme behavior:
  - Light/Dark at minimum
  - Explicit mapping strategy (CSS custom properties and/or Tailwind theme config)
- Hard requirement:
  - Any color used by the component must be referenced through tokens, not hardcoded literals.

### 5) Implement the React/TypeScript component (safe by default)
- Provide full prop types.
- Ensure ARIA roles/attributes and keyboard support:
  - labels/instructions
  - correct aria-* relationships
  - focus management
- Provide JSDoc for the public API.
- Ensure state permutations (loading/disabled/error/open) are accessible.

### 6) Storybook stories with play() + a11y checks
- Create Storybook stories for:
  - primary state
  - interaction edge cases relevant to the API
  - accessibility-focused states (keyboard navigation, focus order, error display)
- Include play() functions where practical to:
  - exercise keyboard interactions
  - assert focus and visibility
- Add/route a11y checking using axe-core (or equivalent) and fail the run when violations occur.

### 7) Figma-to-code translation (when requested)
- Extract from the prompt only what is needed to map:
  - typography scale, spacing, radii
  - semantic color tokens (not raw hex)
  - component dimensions
- Produce a deterministic mapping table from design intents → token keys.
- If the prompt lacks design values, generate placeholders as token keys (not color hex), and explicitly request missing numeric values.

### 8) Versioning with Changesets (when API changes)
- If you introduced a breaking prop/API behavior change:
  - require major version bump
  - draft a Changeset entry and a changelog/migration note
- If not breaking:
  - draft patch/minor rationale

### 9) AI tooling integration (MCP + Claude) — constrained pattern
- If asked to integrate LLM APIs and MCP servers into dev workflows:
  - Treat MCP as the standardized connector interface to external systems.
  - Draft tool definitions conceptually (no secrets).
  - Emphasize human-in-the-loop approval for any action that would modify codebases or release artifacts.
- Do not include real API keys.
  - Reference environment variables by name only if needed.

## Output requirements
- For code outputs:
  - React/TypeScript with complete prop types
  - token-based styling (no hardcoded colors)
  - ARIA + keyboard support
- For non-code outputs:
  - SKILL.md-style folder structure manifest guidance
  - Accessibility audit report templates aligned to the WCAG checklist
  - Storybook stories + play() scaffolding + a11y checks

## When to fall back to raw sources
- If Storybook-specific testing details are unclear beyond the distilled notes, consult preserved Storybook raw source files.
- If you need additional WCAG success criteria beyond the distilled checklist, consult the preserved WCAG raw parts.