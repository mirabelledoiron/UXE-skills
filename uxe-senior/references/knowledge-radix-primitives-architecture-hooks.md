# Radix Primitives — low-level accessible primitives (key traits)

## Why this matters (from the field)
Every team eventually tries to write their own `Dialog`, `Menu`, or `Popover` from scratch. It never ends well. Focus trapping, `aria-activedescendant` vs roving tabindex, portal + scroll-lock interactions, hover-intent timings for submenus — the edge cases compound and the bug tail runs for months. Radix is the concession that those problems are solved problems: use the behavior layer, own the styling layer, and stop paying the accessibility tax twice. The `asChild` prop and granular parts are the part of the API that actually matters in a design system context — they let you compose Radix behavior with *your* component API and *your* token layer without forking. The trap to avoid: treating Radix as a styled component library and wrapping it so tightly that consumers can't reach its escape hatches. Expose the parts, keep tokens in one layer, and let Radix do what it does.

## Source basis
- `references/source-05-introduction-radix-primitives.md`

## What Radix Primitives are
- An open-source UI component library for building **high-quality, accessible design systems and web apps**.
- It is **low-level** and can be used as:
  - the **base layer** of a design system, or
  - adopted **incrementally**.

## Key features (directly stated)
- **Accessible:** adheres to **WAI-ARIA design patterns where possible**; handles accessibility implementation details such as:
  - aria/role attributes
  - focus management
  - keyboard navigation
- **Unstyled:** components ship **without styles**, so you control look/feel using your styling solution.
- **Opened / open architecture:** granular access to each component part so you can wrap components and add:
  - event listeners
  - props
  - refs
- **Uncontrolled (default):** where applicable, components are uncontrolled by default but can be controlled alternatively.
- **Developer experience:** fully-typed API; consistent API across components.
- **asChild prop:** provides control over the rendered element.
- **Incremental adoption:** install radix-ui and import only needed primitives; tree-shakeable.

## Incremental installation examples (from excerpt)
- Install package with needed imports:
  - `npm install radix-ui`
  - Example import:
    - `import { Dialog, DropdownMenu, Tooltip } from "radix-ui";`
- Alternatively install each primitive individually:
  - `npm install @radix-ui/react-dialog`
  - `npm install @radix-ui/react-dropdown-menu`
  - `npm install @radix-ui/react-tooltip`
  - Example import style:
    - `import * as Dialog from "@radix-ui/react-dialog";`

## Versioning/bundle note (from excerpt)
- When installing separately, update all Radix packages **together** to prevent duplication of shared dependencies and keep bundle size down.

## Agent usage heuristics (derived only from stated traits)
- Prefer Radix as the accessibility-focused “behavior layer” and supply your own styling/tokens on top.
- Use the open architecture (part-level access, wrapping) to integrate with your design system component API.