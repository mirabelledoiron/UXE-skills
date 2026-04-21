# UXE Senior — Claude Code Skill

> Created by Mirabelle Doiron — UX Engineer, design systems, accessibility.
> [mirabelledoiron.com](https://mirabelledoiron.com) · [github.com/mirabelledoiron](https://github.com/mirabelledoiron)

A [Claude Code skill](https://docs.anthropic.com/en/docs/claude-code/skills) that applies senior UX engineering judgment to every component you build. It enforces accessibility-first development, token-based theming, and production-grade testing — so Claude works like a seasoned UX engineer, not a code autocomplete.

I built this after being laid off in 2025. The AI tools that supposedly replaced me were generating inaccessible, token-less, untested components. This skill is the correction — eight-plus years of senior UXE judgment encoded as hard gates and a workflow, so AI works *with* the craft instead of around it.

## What it does

When active, this skill instructs Claude to:

- **Gate on scope** — refuses pure-backend or mobile-native requests that have no React/web UI layer
- **Produce an accessibility spec before writing code** — WCAG 2.1 AA checklist, keyboard operability, focus management, contrast ratios
- **Use Radix Primitives** as the default behavior layer for known interactive patterns
- **Enforce token-based theming** — no hardcoded hex colors; light/dark at minimum via CSS custom properties or Tailwind config
- **Generate complete React/TypeScript components** with full prop types, ARIA roles, keyboard support, and JSDoc
- **Scaffold Storybook stories** with `play()` functions that exercise keyboard interactions and `axe-core` a11y checks
- **Translate Figma designs** to deterministic token mappings (not raw hex) when given a design spec
- **Draft Changeset entries** with migration notes when a prop API change would break consumers
- **Outline MCP + Claude integrations** for developer tooling workflows (no secrets, human-in-the-loop)

## What's included

```
UXE-skills/
├── README.md                         # You are here
└── uxe-senior/
    ├── SKILL.md                      # The skill definition (frontmatter + instructions)
    ├── references/
    │   ├── knowledge-accessibility-wcag-2-1-aa-checklist.md
    │   ├── knowledge-radix-primitives-architecture-hooks.md
    │   ├── knowledge-storybook-quickstart-and-concepts.md
    │   ├── knowledge-mcp-and-claude-tooling-integration-notes.md
    │   ├── source-pack.md            # Index of all source material
    │   ├── test-prompts.md           # 8 test prompts (5 should-trigger, 3 should-not)
    │   └── source-*.md               # Preserved source material (WCAG 2.1, Radix, Storybook, MCP, Style Dictionary, Claude API)
    └── scripts/
        ├── preflight-uxe-senior.mjs  # Checks output for ARIA intent, token usage, no secrets
        └── validate-uxe-senior-token-usage.mjs  # Scans files for hardcoded hex colors
```

### Reference knowledge

The `references/` folder contains distilled knowledge files that Claude reads when the skill is active:

| File | Covers |
|------|--------|
| `knowledge-accessibility-wcag-2-1-aa-checklist.md` | WCAG 2.1 AA audit checklist for UI components — contrast, keyboard, focus, reflow, hover/focus content, forms/errors |
| `knowledge-radix-primitives-architecture-hooks.md` | Radix Primitives traits — unstyled, accessible, open architecture, incremental adoption |
| `knowledge-storybook-quickstart-and-concepts.md` | Storybook concepts — stories, autodocs, accessibility/interaction/visual testing |
| `knowledge-mcp-and-claude-tooling-integration-notes.md` | MCP protocol overview + Claude API tool-use integration patterns |

### Validation scripts

| Script | What it checks |
|--------|---------------|
| `preflight-uxe-senior.mjs <file>` | Verifies output mentions ARIA/roles, uses tokens not hex, includes a11y intent, has no leaked secrets |
| `validate-uxe-senior-token-usage.mjs <dir>` | Walks a directory tree and fails if any file contains hardcoded hex color literals |

## How it was built

I built this by combining eight-plus years of UX engineering judgment with curated source material from:

- [WCAG 2.1 specification](https://www.w3.org/TR/WCAG21/) (W3C) — distilled into an AA-level component audit checklist
- [Radix Primitives docs](https://www.radix-ui.com/primitives/docs/overview/introduction) — distilled into architecture traits and usage heuristics
- [Storybook docs](https://storybook.js.org/docs) — distilled into testing and documentation guidance
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) — distilled into integration patterns
- [Claude API docs](https://docs.anthropic.com/en/docs/overview) — distilled into tool-use workflow guidance
- [Style Dictionary](https://styledictionary.com) — referenced for design token export patterns

Each source was ingested, the key concepts were extracted into `knowledge-*.md` files, and the raw material was preserved as `source-*.md` files for fallback. The `SKILL.md` workflow was then written to encode senior-level decision-making: scope gating, accessibility-first specs, architecture choices, and safety constraints.

## Install

### Option 1: Personal skill (available in all your projects)

```bash
git clone https://github.com/mirabelledoiron/UXE-skills.git
ln -s "$(pwd)/UXE-skills/uxe-senior" ~/.claude/skills/uxe-senior
```

### Option 2: Project skill (available in one project)

```bash
# From your project root
git clone https://github.com/mirabelledoiron/UXE-skills.git /tmp/uxe-skills
cp -r /tmp/uxe-skills/uxe-senior .claude/skills/uxe-senior
```

### Verify

Restart Claude Code (or start a new session), then type `/uxe-senior` — the skill should appear in autocomplete.

## Usage

You can use the skill in two ways:

### 1. Slash command (explicit)

Type `/uxe-senior` followed by your request:

```
/uxe-senior Build an accessible DatePicker component with keyboard navigation and dark mode
```

```
/uxe-senior Build an accessible Select dropdown with keyboard navigation, ARIA roles, dark mode, and Storybook stories with play() and a11y checks.
```

### 2. Auto-invocation (implicit)

Just describe a task that matches the skill's scope — Claude will load it automatically. No slash command needed. For example:

- "Build me a React Select component with ARIA roles and keyboard support"
- "Do a WCAG audit on this component"
- "Create a design token system for light/dark theming"
- "Translate this Figma design to React with Storybook stories"

> **Note:** After installing, you'll need to restart Claude Code (or start a new session) for the skill to appear. After that, `/uxe-senior` will autocomplete and be available in every project.

### Run the validation scripts

```bash
# Check a component file for accessibility and token intent
node uxe-senior/scripts/preflight-uxe-senior.mjs path/to/output.tsx

# Scan a directory for hardcoded hex colors
node uxe-senior/scripts/validate-uxe-senior-token-usage.mjs src/components
```

### Test prompts

See [`references/test-prompts.md`](references/test-prompts.md) for 8 ready-made prompts to verify the skill triggers correctly (and stays silent when it should).

## Requirements

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI, desktop app, or IDE extension
- Node.js (for the validation scripts)
- pnpm and git (referenced in the skill metadata)

## Credits

**Author:** Mirabelle Doiron — UX Engineer (Design Systems, Accessibility)
[mirabelledoiron.com](https://mirabelledoiron.com) · [github.com/mirabelledoiron](https://github.com/mirabelledoiron)

Every hard gate in `SKILL.md` is a scar from production work: "never hardcode hex colors" came from watching token systems break at scale. "Never generate a component without ARIA roles" came from auditing inaccessible output. "Never auto-publish to npm" came from knowing what a breaking change costs a team. AI doesn't know what a broken token architecture costs at scale — this skill is how that knowledge stays in the loop.

If you fork, extend, or build on this, please keep attribution intact and open a PR if you add new gates or reference material worth sharing back.

## License

MIT © Mirabelle Doiron
