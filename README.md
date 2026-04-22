# UXE Senior — Claude Code Skill

> Created by Mirabelle Doiron — UX Engineer (Design Systems, Accessibility)  
> [mirabelledoiron.com](https://mirabelledoiron.com) · [github.com/mirabelledoiron](https://github.com/mirabelledoiron)

A [Claude Code skill](https://docs.anthropic.com/en/docs/claude-code/skills) that applies **senior UX engineering constraints and workflows** to every component you generate.

It enforces accessibility-first development, token-based theming, and production-ready structure — so output is closer to what a design systems engineer would ship, not just syntactically correct code.

Most AI-generated UI breaks at the same points: accessibility gaps, hardcoded styles, and no system alignment. This skill addresses those failure modes by encoding real UXE decision-making into explicit gates and workflows.

---

## What it does

When active, this skill instructs Claude to:

- **Gate on scope**  
  Refuses requests that don’t involve a web UI layer (e.g. pure backend or mobile-native)

- **Produce an accessibility spec before code**  
  WCAG 2.1 AA checklist including keyboard interaction, focus management, semantics, and state handling

- **Use Radix Primitives by default**  
  For common interactive patterns (Select, Dialog, Popover, etc.)

- **Enforce token-based theming**  
  No hardcoded values; uses CSS custom properties or Tailwind tokens (light/dark minimum)

- **Generate complete React + TypeScript components**  
  Typed props, ARIA roles where appropriate, keyboard support, and clear structure

- **Scaffold Storybook stories**  
  Includes `play()` functions for interaction testing and `axe-core` accessibility checks

- **Map design inputs to tokens (not raw styles)**  
  When given Figma specs, converts values into token usage instead of inline styles

- **Draft Changesets for breaking changes**  
  Includes migration notes when component APIs change

- **Outline Claude + MCP integrations**  
  For developer workflows, with no secrets and human-in-the-loop constraints

---

## What’s included

```bash

UXE-skills/
├── README.md
└── uxe-senior/
├── SKILL.md
├── references/
│   ├── knowledge-accessibility-wcag-2-1-aa-checklist.md
│   ├── knowledge-radix-primitives-architecture-hooks.md
│   ├── knowledge-storybook-quickstart-and-concepts.md
│   ├── knowledge-mcp-and-claude-tooling-integration-notes.md
│   ├── source-pack.md
│   ├── test-prompts.md
│   └── source-*.md
└── scripts/
├── preflight-uxe-senior.mjs
└── validate-uxe-senior-token-usage.mjs

````

---

## Reference knowledge

The `references/` folder contains distilled material the skill uses:

| File | Purpose |
|------|--------|
| `knowledge-accessibility-wcag-2-1-aa-checklist.md` | Component-level WCAG 2.1 AA checklist |
| `knowledge-radix-primitives-architecture-hooks.md` | Radix usage patterns and constraints |
| `knowledge-storybook-quickstart-and-concepts.md` | Storybook structure, testing, and docs |
| `knowledge-mcp-and-claude-tooling-integration-notes.md` | MCP + Claude integration patterns |

---

## Validation scripts

| Script | Purpose |
|--------|--------|
| `preflight-uxe-senior.mjs <file>` | Checks for accessibility intent, token usage, and obvious issues |
| `validate-uxe-senior-token-usage.mjs <dir>` | Fails if hardcoded hex colors are found |

---

## How it was built

This skill combines UX engineering patterns with curated source material:

- [WCAG 2.1](https://www.w3.org/TR/WCAG21/) — distilled into a component-level checklist  
- [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) — behavior layer patterns  
- [Storybook](https://storybook.js.org/docs) — testing and documentation workflows  
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) — tool integration patterns  
- [Claude API](https://docs.anthropic.com/en/docs/overview) — structured tool usage  
- [Style Dictionary](https://styledictionary.com) — token architecture reference  

Each source was reduced into `knowledge-*.md` files, with raw material preserved as `source-*.md`.

The `SKILL.md` file encodes the actual workflow:
- scope gating  
- accessibility-first thinking  
- system alignment (tokens, primitives)  
- safe output constraints  

---

## Install

### Option 1: Personal (available everywhere)

```bash
git clone https://github.com/mirabelledoiron/UXE-skills.git
ln -s /absolute/path/to/UXE-skills/uxe-senior ~/.claude/skills/uxe-senior
````

### Option 2: Per project

```bash
git clone https://github.com/mirabelledoiron/UXE-skills.git /tmp/uxe-skills
cp -r /tmp/uxe-skills/uxe-senior .claude/skills/uxe-senior
```

---

## Verify

Restart Claude Code, then type:

```bash
/uxe-senior
```

It should appear in autocomplete.

---

## Usage

### Explicit

```bash
/uxe-senior Build an accessible DatePicker with keyboard navigation and dark mode
```

### Implicit

Just describe a relevant task:

* “Build a React Select with keyboard support”
* “Audit this component for WCAG issues”
* “Create a token system for theming”
* “Translate this Figma design into components”

If it matches scope, the skill activates automatically.

---

## Run validation

```bash
node uxe-senior/scripts/preflight-uxe-senior.mjs path/to/file.tsx
node uxe-senior/scripts/validate-uxe-senior-token-usage.mjs src/
```

---

## Requirements

* [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
* [Node.js](https://nodejs.org/en)
* [git](https://www.npmjs.com/package/git) (pnpm optional)

---

## Credits

This skill bundle comes from real production failures: accessibility gaps, token drift, and breaking changes at scale. The goal isn’t more code — it’s code that doesn’t break the system around it.

---

## License

MIT © Mirabelle Doiron


