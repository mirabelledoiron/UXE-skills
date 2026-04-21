# WCAG 2.1 (target: AA) — agent checklist for UI components

## Why this matters (from the field)
The criteria below read like a static list, but in practice accessibility regressions don't arrive as one catastrophic failure — they arrive one dismissed ticket at a time. A component ships without a focus ring because "the designer didn't spec it." A tooltip ships without `aria-describedby` because "the hover state works." Six months later an audit surfaces forty-seven violations and someone has to rank them by severity instead of fixing the workflow that let them through. The point of this checklist is to make the workflow the defense: the AA gate runs *before* code is written, not after it ships. Contrast, keyboard, focus, hover/focus disclosure — if any of those four can't be answered concretely in the component spec, the component isn't ready to build yet. Treat every success criterion as a testable assertion, not a vibe.

## Source basis
- `references/source-06-web-content-accessibility-guidelines-wcag-2-1-part-01.md`
- `references/source-06-web-content-accessibility-guidelines-wcag-2-1-part-02.md`
- `references/source-06-web-content-accessibility-guidelines-wcag-2-1-part-03.md`
- `references/source-06-web-content-accessibility-guidelines-wcag-2-1-part-04.md`

## What WCAG 2.1 is (key constraints)
- WCAG 2.1 is a set of **testable success criteria** intended to make web content more accessible across devices.
- Success criteria are **not technology-specific**; separate documents provide technology-specific guidance.
- Conformance levels include **A**, **AA**, **AAA**.
- WCAG 2.1 extends WCAG 2.0, and **conforming to WCAG 2.1 also conforms to WCAG 2.0**.

## High-signal AA/keyboard/interaction criteria (from provided excerpts)
### 1. Perceivable
- **1.4.3 Contrast (Minimum) (AA):** text and images of text have contrast ratio **≥ 4.5:1** (with listed exceptions such as large text, inactive components/pure decoration/logotypes).
- **1.4.4 Resize Text (AA):** text can be resized up to **200%** without loss of content/functionality (except for captions/images of text).
- **1.4.10 Reflow (AA):** no loss of information/functionality and no two-dimensional scrolling at:
  - vertical scrolling at width equivalent to **320 CSS pixels**
  - horizontal scrolling at height equivalent to **256 CSS pixels**
  - (with stated exceptions for parts requiring two-dimensional layout for meaning).
- **1.4.11 Non-text Contrast (AA):** UI components/states and graphical objects required to understand content have contrast ratio **≥ 3:1** against adjacent colors (except where appearance is user-agent determined or specified exceptions in text).
- **1.4.12 Text Spacing (AA):** setting line height, paragraph spacing, letter spacing, and word spacing to the specified minimums should not cause loss of content/functionality.
- **1.4.13 Content on Hover or Focus (AA):** if hover/focus reveals additional content, it must be:
  - **Dismissible** (without moving focus/hover),
  - **Hoverable** (moving pointer over additional content doesn’t dismiss it),
  - **Persistent** (remains visible until trigger removed, dismissed, or info no longer valid),
  - with an author-agent control exception.

### 2. Operable
- **2.1.1 Keyboard (A):** all functionality operable through keyboard without requiring specific timing for keystrokes (except where underlying function requires path-dependent input).
- **2.1.2 No Keyboard Trap (A):** if focus enters component, user can move focus away using keyboard; if it requires more than standard exit methods, user is advised.
- **2.1.4 Character Key Shortcuts (A):** if implemented, users must be able to turn off, remap to include non-printable keys, or have shortcuts active only on focus.

### 3. Understandable (selected)
- **3.2.1 On Focus (A):** focus must not initiate a change of context.
- **3.2.2 On Input (A):** changing a UI component setting must not automatically cause context change unless user was advised before using the component.
- **3.3.1 Error Identification (A):** error item identified and described in text.
- **3.3.2 Labels or Instructions (A):** provide labels/instructions when input is required.
- **3.3.3 Error Suggestion (AA):** if suggestions are known, provide unless jeopardizes security/purpose.
- **3.3.4 Error Prevention (Legal, Financial, Data) (AA):** submissions are reversible OR checked with opportunity to correct OR reviewed/confirmed mechanism.

### 4. Robust (selected excerpted item)
- **4.1.x (robustness):** “robust enough” means compatibility with user agents including assistive technologies (specific 4.1.1 parsing content was truncated in provided ingestion excerpt).

## Quick AA audit workflow (component-level)
1. **Keyboard navigation:** can tab into/out of every control? any traps?
2. **Focus visible + no context jumps:** focusing elements shouldn’t change page context unexpectedly.
3. **Contrast checks:** verify text/images of text at required ratios (4.5:1 for AA) and UI component non-text contrast (3:1) where applicable.
4. **Sizing/reflow:** verify 200% text resize + responsive reflow without 2D scrolling.
5. **Hover/focus popovers:** confirm dismissible/hoverable/persistent behavior.
6. **Forms/errors:** label inputs, identify errors in text, provide suggestions, and prevent critical errors per AA rules.

## Notes agent should follow
- Treat success criteria as **testable statements**; prefer concrete checks (contrast computation, keyboard traversal, focus behavior) over assumptions.
- Many other AA/AAA criteria exist in WCAG 2.1 beyond the excerpted set—use this checklist as a starting point, not a complete standard.