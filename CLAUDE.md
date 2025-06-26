# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this Material Design 3 React component library.

## CRITICAL: Development Workflow

**ALWAYS run these commands after making any changes:**

```bash
npm run fix    # Auto-fix all code issues
npm run check  # Verify all quality checks pass
```

These commands ensure code style, TypeScript, and all quality checks pass before proceeding.

## Project Overview

This is a comprehensive React component library implementing Google's Material Design 3 (Material Expressive) design system using:

- **React Aria Components** - Accessible, unstyled UI primitives
- **StyleX** - Compile-time CSS-in-JS with atomic styling
- **Material Design 3 Tokens** - Complete design token system
- **Premier Stacks Tooling** - Consistent development experience

## Development Commands

```bash
# Primary Development
npm run local    # Initial setup and install dependencies
npm run start    # Start development server (port 3000)
npm run commit   # Run complete quality pipeline before committing

# Quality Assurance (run after every change)
npm run fix      # Auto-fix: ESLint + Stylelint + Prettier
npm run check    # Check: Lint + TypeScript + Tests + Security
npm run stan     # TypeScript type checking only
npm run test     # Playwright E2E tests only

# Individual Tools
npm run lint     # ESLint + Stylelint + Prettier check
npm run security # npm security audit
```

## CRITICAL: Code Style Analysis Protocol

**ABSOLUTE REQUIREMENT - NO EXCEPTIONS:**

Before making ANY changes to components or implementing new patterns, you MUST:

1. **Read 5 Random Components:** Use the Read tool to examine at least 5 different components from src/components/ to understand current patterns, conventions, and techniques
2. **Infer Code Style:** Analyze patterns for imports, TypeScript interfaces, StyleX usage, component structure, prop handling, and naming conventions
3. **Match Exactly:** Apply the exact same patterns and techniques found in existing components
4. **Never Innovate:** Do not introduce new patterns, styles, or approaches that don't already exist in the codebase

## StyleX Design Token System

### Token Hierarchy & Usage

The design tokens follow a 4-layer hierarchy:

```
palette.stylex.ts → ref.stylex.ts → sys.stylex.ts → preset.stylex.ts
```

**YOU MUST ONLY USE TOKENS FROM `sys.stylex.ts` AND `preset.stylex.ts`**

### Available System Tokens (`sys.stylex.ts`)

#### Color Tokens (`expressiveSysColor`)

Complete Material Design 3 color system (54 tokens):

**Primary Colors:**

- `primary`, `onPrimary`, `primaryContainer`, `onPrimaryContainer`
- `primaryFixed`, `primaryFixedDim`, `onPrimaryFixed`, `onPrimaryFixedVariant`

**Secondary Colors:**

- `secondary`, `onSecondary`, `secondaryContainer`, `onSecondaryContainer`
- `secondaryFixed`, `secondaryFixedDim`, `onSecondaryFixed`, `onSecondaryFixedVariant`

**Tertiary Colors:**

- `tertiary`, `onTertiary`, `tertiaryContainer`, `onTertiaryContainer`
- `tertiaryFixed`, `tertiaryFixedDim`, `onTertiaryFixed`, `onTertiaryFixedVariant`

**Error Colors:**

- `error`, `onError`, `errorContainer`, `onErrorContainer`

**Surface Colors:**

- `surface`, `onSurface`, `surfaceVariant`, `onSurfaceVariant`
- `surfaceDim`, `surfaceBright`
- `surfaceContainerLowest`, `surfaceContainerLow`, `surfaceContainer`
- `surfaceContainerHigh`, `surfaceContainerHighest`

**Other Colors:**

- `outline`, `outlineVariant`, `background`, `onBackground`
- `inverseSurface`, `inverseOnSurface`, `inversePrimary`
- `shadow`, `scrim`, `surfaceTint`

#### Shape Tokens (`expressiveSysRadius`)

- `none`: 0px
- `extraSmall`: 4px
- `small`: 8px
- `medium`: 12px
- `large`: 16px
- `largeIncreased`: 20px
- `extraLarge`: 28px
- `extraLargeIncreased`: 32px
- `extraExtraLarge`: 48px
- `full`: 9999px

#### Motion Tokens

**Timing Functions (`expressiveSysTimingFunction`):**

- `spatialFast`, `spatialDefault`, `spatialSlow`
- `effectsFast`, `effectsDefault`, `effectsSlow`

**Durations (`expressiveSysDuration`):**

- `spatialFast`: 150ms, `spatialDefault`: 300ms, `spatialSlow`: 500ms
- `effectsFast`: 150ms, `effectsDefault`: 200ms, `effectsSlow`: 650ms

#### State Tokens (`expressiveSysOpacity`)

- `disabledContent`: 0.38, `disabledContainer`: 0.12
- `stateLayerHover`: 0.08, `stateLayerFocus`: 0.1
- `stateLayerPressed`: 0.1, `stateLayerDragged`: 0.16
- `elevationLevel0` through `elevationLevel5`

### Available Preset Tokens (`preset.stylex.ts`)

#### Typography Presets (`expressivePresetFont`)

Complete typography styles for all 15 Material Design scales:

**Display:** `displayLarge`, `displayMedium`, `displaySmall`
**Headline:** `headlineLarge`, `headlineMedium`, `headlineSmall`
**Title:** `titleLarge`, `titleMedium`, `titleSmall`
**Body:** `bodyLarge`, `bodyMedium`, `bodySmall`
**Label:** `labelLarge`, `labelMedium`, `labelSmall`

#### Motion Presets (`expressivePresetTransition`)

Complete transition presets:

- `spatialFast`, `spatialDefault`, `spatialSlow`
- `effectsFast`, `effectsDefault`, `effectsSlow`

## Component Development Rules

### Universal Requirements

1. **COMPLETE ISOLATION** - Every component is completely self-contained
2. **NO SHARED CODE** - No helper functions, utilities, or base components
3. **DIRECT TOKEN USAGE** - Use only sys.stylex.ts and preset.stylex.ts tokens
4. **NO NEW TOKENS** - Never create custom StyleX tokens or variables
5. **ONE COMPONENT PER FILE** - Each component in its own file
6. **PROTOTYPE ROUTE REQUIRED** - Every component needs a demo route

### File Structure Pattern

```
/src/components/ExpressiveComponentName.tsx      # Component implementation
/src/index.ts                            # Export component
/prototype/routes/ComponentNameRoute.tsx  # Demo route
/prototype/routes/SplitRoute.tsx          # Add navigation link here
/prototype/router.tsx                     # Add route configuration here
```

### Required Import Pattern

**FOLLOW THIS PATTERN EXACTLY:**

```typescript
import * as stylex from '@stylexjs/stylex';
import { expressiveSysColor, expressiveSysRadius, expressiveSysOpacity } from '../stylex/sys.stylex';
import { expressivePresetFont, expressivePresetTransition } from '../stylex/preset.stylex';
```

### Props Interface Pattern

**Use HTMLAttributes for HTML elements:**

```typescript
// For span elements
export interface ExpressiveComponentProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

// For div elements
export interface ExpressiveComponentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

// For React Aria components
export interface ExpressiveComponentProps extends Omit<ButtonProps, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}
```

### Strict Boolean Type Checking

**CRITICAL: This codebase has very strict boolean type checking enabled:**

1. **Mixed Type Props** - When a prop accepts multiple types (e.g., `boolean | string | number`):

   - **NEVER use `&&` or `||` operators** for conditional logic
   - **ALWAYS use explicit ternary operators** with `typeof` checks
   - **ALWAYS use explicit equality checks** (`===`, `!==`)

2. **Correct Pattern for Mixed Types:**

```typescript
// CORRECT - Explicit type checking
top === true ? styles.topDefault : typeof top === 'boolean' ? null : styles.topCustom(top);

// WRONG - TypeScript will error on mixed types
top && styles.topDefault; // Error: cannot use boolean && with mixed types
top ? styles.topDefault : styles.topCustom(top); // Error: cannot pass mixed type to callable
```

3. **Pure Boolean Props** - Only when prop is purely boolean:
   - You may use `&&` operator
   - You may use simple ternary without typeof

**This follows Golang-style strict typing where mixed types require explicit handling.**

### StyleX Naming Conventions

**CRITICAL: Use semantic naming patterns for StyleX instances:**

#### In Components - Use `rootStyles` for Main Element:

```typescript
const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${expressiveSysColor.surface})`,
    borderRadius: expressiveSysRadius.medium,
    color: `rgb(${expressiveSysColor.onSurface})`,
    marginTop: 0,
    marginBottom: 0,
  },
  // Fixed known values - use direct styles
  topDefault: {
    marginTop: '0.5lh',
  },
  bottomDefault: {
    marginBottom: '0.5lh',
  },
  // Variable values - use callable styles
  topCustom: (value: string | number) => ({
    marginTop: value,
  }),
  bottomCustom: (value: string | number) => ({
    marginBottom: value,
  }),
});
```

#### In Components - Use Semantic Names for Other Elements:

```typescript
// Examples of semantic naming for multiple StyleX instances:
const rootStyles = stylex.create({
  /* main element styles */
});
const labelStyles = stylex.create({
  /* label element styles */
});
const iconStyles = stylex.create({
  /* icon element styles */
});
const outlineStyles = stylex.create({
  /* outline/border element styles */
});
const containerStyles = stylex.create({
  /* container element styles */
});
const headerStyles = stylex.create({
  /* header element styles */
});
const contentStyles = stylex.create({
  /* content area styles */
});
```

#### In Storybook Routes - Use Single `styles` Instance:

```typescript
const styles = stylex.create({
  item: {
    marginBottom: 8,
  },
  section: {
    marginBottom: 32,
  },
});
```

**Apply styles directly in stylex.props() with inline ternary operators:**

```typescript
// CORRECT - Simplified ternary operators (non-nested) on separate lines
{...stylex.props(
  expressivePresetFont.displayLarge,
  rootStyles.base,
  top === true ? rootStyles.topDefault : null,
  typeof top === 'string' || typeof top === 'number' ? rootStyles.topCustom(top) : null,
  bottom === true ? rootStyles.bottomDefault : null,
  typeof bottom === 'string' || typeof bottom === 'number' ? rootStyles.bottomCustom(bottom) : null,
  xstyle,
)}

// WRONG - Don't create const variables before stylex.props
const topStyle = top === true ? rootStyles.topDefault : null;
const topCustomStyle = typeof top === 'string' || typeof top === 'number' ? rootStyles.topCustom(top) : null;

// WRONG - Don't nest ternary operators
top === true ? rootStyles.topDefault : (typeof top === 'string' || typeof top === 'number' ? rootStyles.topCustom(top) : null);
```

**CRITICAL: Never create const variables before stylex.props() - always use inline ternary operators directly in the props call.**

**CRITICAL: Use simple (non-nested) ternary operators. Each condition should be on its own line in stylex.props(), separated by conditions rather than nested.**

**NOTE: The sonarjs/no-nested-conditional ESLint rule may flag nested ternary operators as errors. Use simple ternary operators (not nested) to avoid this issue while maintaining inline style application.**

### Component Implementation Pattern

```typescript
export function ExpressiveComponentName({ xstyle, children, ...props }: ExpressiveComponentProps) {
  return (
    <div
      {...stylex.props(rootStyles.base, expressivePresetFont.bodyMedium, xstyle)}
      {...props}
    >
      {children}
    </div>
  );
}
```

## Component Categories & Patterns

### Typography Components

#### ExpressiveFont Components (Span-based)

For inline text styling with optional margin and display control:

```typescript
<ExpressiveFontDisplayLarge xstyle={customStyles} top={true} bottom="1rem" block>
  Display text content
</ExpressiveFontDisplayLarge>
```

**Margin Props:**

- `top?: boolean | string | number` - true = 0.5lh, false/undefined = none, custom = pass-through
- `bottom?: boolean | string | number` - true = 0.5lh, false/undefined = none, custom = pass-through

**Display Props:**

- `block?: boolean` - Forces `display: block` (overrides implicit display)
- `inline?: boolean` - Forces `display: inline-block` (overrides implicit display)
- **Implicit Display Logic:** When `top` or `bottom` margins are used, automatically applies `display: inline-block` via `bottom !== undefined || top !== undefined ? styles.inline : null`. Explicit props override this since they appear later in stylex.props()

#### ExpressiveHeading Components (Semantic Headings)

For semantic headings with customizable levels, margin and display control:

```typescript
<ExpressiveHeadingDisplayLarge level={1} xstyle={customStyles} top={true} bottom="2rem" inline>
  Heading content
</ExpressiveHeadingDisplayLarge>
```

**Semantic Props:**

- `level?: 1 | 2 | 3 | 4 | 5 | 6` - Semantic heading level (optional)

**Margin Props:**

- `top?: boolean | string | number` - true = 0.5lh, false/undefined = none, custom = pass-through
- `bottom?: boolean | string | number` - true = 0.5lh, false/undefined = none, custom = pass-through

**Display Props:**

- `block?: boolean` - Forces `display: block` (overrides implicit display)
- `inline?: boolean` - Forces `display: inline-block` (overrides implicit display)
- **Implicit Display Logic:** When `top` or `bottom` margins are used, automatically applies `display: block` via `bottom !== undefined || top !== undefined ? styles.block : null`. Explicit props override this since they appear later in stylex.props()

### Interactive Components

All interactive components use React Aria and follow this pattern:

- Extend appropriate React Aria props (`ButtonProps`, `LinkProps`, etc.)
- Include interaction layers (`expressiveInteractionLayer`, `expressiveFocusLayer`)
- Support all React Aria states (`isPressed`, `isHovered`, `isFocused`, etc.)

### Layout Components

- `expressiveSurface` - Material Design surface with elevation
- `expressiveContainerPadding` - Consistent container spacing
- `expressivePaneGrid` - Responsive grid layout
- `expressiveSurfacePadding` - Surface-specific padding

### Utility Components

- `expressiveInteractionLayer` - Hover/press/focus state overlays
- `expressiveFocusLayer` - Focus ring management
- `expressiveDocumentBackgroundEffect` - Global document styling

## Prototype Route Requirements

**CRITICAL: Before implementing any prototype route, you MUST read the complete content of 5 random existing prototype routes from `/prototype/routes/` to understand the current patterns, PrototypeDisplay usage, and organizational approaches.**

### PrototypeDisplay Layout Rules

**ALWAYS use PrototypeDisplay components for layout - NEVER create custom grids or layout components:**

1. **PrototypeDisplay.Item** - For single sections or grouped content:

   ```typescript
   <PrototypeDisplay.Item label="Section Description">
     {/* Multiple related components grouped together */}
   </PrototypeDisplay.Item>
   ```

2. **PrototypeDisplay.Items** - For collections of similar variants:
   ```typescript
   <PrototypeDisplay.Items label="Component Type">
     {/* Multiple component states/variants */}
   </PrototypeDisplay.Items>
   ```

### Route Structure Pattern

```typescript
import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { ExpressiveComponent } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

// Optional: Only for component-specific styling (boxes, etc.)
const styles = stylex.create({
  componentSpecific: {
    // Component-specific styles only
  },
});

export function ComponentRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item label="Basic Usage">
        <ExpressiveComponent>Example usage</ExpressiveComponent>
      </PrototypeDisplay.Item>

      <PrototypeDisplay.Items label="Variants">
        <ExpressiveComponent variant="primary">Primary</ExpressiveComponent>
        <ExpressiveComponent variant="secondary">Secondary</ExpressiveComponent>
      </PrototypeDisplay.Items>
    </PrototypeDisplay>
  );
}
```

**Key Requirements:**

- **NO custom grid layouts** - use PrototypeDisplay.Item/Items
- **NO section divs with marginBottom** - PrototypeDisplay handles spacing
- **ALWAYS use label prop** to describe content
- **Group related content** within same Item/Items
- **Study existing routes** before implementing to match patterns

### Add Route to Router

**Required steps for every new route:**

1. **Add to Router Configuration** (`/prototype/router.tsx`):

   - Import the route component
   - Add route configuration with appropriate path
   - Follow existing patterns exactly

2. **Add Navigation Link** (`/prototype/routes/SplitRoute.tsx`):
   - Add a new `<Link>` element in the `Nav` component
   - Use the same path as in router configuration
   - Use descriptive link text
   - Follow existing Link pattern exactly

**Example:**

```typescript
// In router.tsx
{
  path: 'your-component',
  element: <ExpressiverComponentRoute />,
},

// In SplitRoute.tsx Nav component
<div>
  <Link href="/Expressiver-component">
    Your Component
  </Link>
</div>
```

**Both steps are mandatory - routes without navigation links cannot be easily accessed in the prototype.**

## Testing Requirements

**E2E tests are automatically handled by `tests/recursive.spec.ts`** - This test file automatically discovers and tests all routes that have navigation links. You do NOT need to create individual test files for each route as long as the route is properly linked in the navigation.

## What NOT to Do

**NEVER:**

- Create helper functions or utilities
- Create base components or shared components
- Add new StyleX tokens or variables
- Import from `palette.stylex.ts` or `ref.stylex.ts` directly
- Use any CSS-in-JS solution other than StyleX
- Add code comments or documentation in components
- Create abstractions over existing patterns
- Refactor existing working code
- Use global CSS or external stylesheets
- Create custom hooks (except in `/src/hooks/` if absolutely necessary)

## Code Examples to Follow

### Study These Files for Patterns:

**Typography:**

- `/src/components/ExpressiveFontDisplayLarge.tsx` - Span-based typography
- `/src/components/ExpressiveHeadingDisplayLarge.tsx` - Semantic heading

**Interactive Components:**

- `/src/components/ExpressiveFilledButton.tsx` - Button with React Aria
- `/src/components/ExpressiveTextButton.tsx` - Text button variant

**Layout Components:**

- `/src/components/ExpressiveSurface.tsx` - Surface with elevation
- `/src/components/ExpressiveContainerPadding.tsx` - Layout container

**Prototype Routes:**

- `/prototype/routes/FontsRoute.tsx` - Typography showcase
- `/prototype/routes/ButtonsRoute.tsx` - Interactive components

## Quality Assurance

**After every change, ALWAYS run:**

```bash
npm run fix    # Fix code style automatically
npm run check  # Verify everything passes
```

This ensures:

- Code style consistency (ESLint + Prettier + Stylelint)
- TypeScript type safety
- All tests pass
- No security vulnerabilities
- Build succeeds

**The codebase should always be in a clean, working state.**

## Critical: Handling Documentation vs Code Discrepancies

**If you find code that violates CLAUDE.md guidelines:**

- **FIX THE CODE** to match CLAUDE.md requirements
- Do not modify CLAUDE.md to accommodate bad code
- Examples: Wrong import patterns, missing xstyle props, using wrong tokens

**If you find CLAUDE.md contains incorrect information about the codebase:**

- **VERIFY by examining the actual code** in the codebase
- **UPDATE CLAUDE.md** to reflect the true state of the code
- Examples: Missing tokens, wrong token names, outdated patterns, incorrect file paths

**Priority Order:**

1. **Code functionality** - Code must work correctly
2. **CLAUDE.md accuracy** - Documentation must reflect reality
3. **CLAUDE.md guidelines** - Code should follow documented patterns

**Always verify claims in CLAUDE.md by examining actual code files before making changes.**

## Continuous Improvement Protocol

**CRITICAL: Always update CLAUDE.md with new learnings and corrections:**

1. **After Every Task** - Update CLAUDE.md with any new patterns, corrections, or learnings discovered during implementation
2. **Document Mistakes** - When you make an implementation mistake, add the correct pattern to CLAUDE.md to prevent repetition
3. **Iterative Updates** - Continuously improve CLAUDE.md based on user feedback and code quality requirements
4. **Code vs Documentation** - When you find discrepancies between CLAUDE.md and actual working code, investigate and update CLAUDE.md accordingly

**This ensures CLAUDE.md stays current and provides the best possible guidance for future development.**

## Recent Learnings and Updates

**StyleX Props Pattern (Updated):**

- **NEVER** create const variables before stylex.props()
- **ALWAYS** use inline ternary operators directly in stylex.props() calls
- **ALWAYS** use `typeof prop === 'string' || typeof prop === 'number'` for mixed type checks
- **NEVER** use `typeof prop !== 'boolean'` pattern

**Prototype Route Requirements (Updated):**

- **ALL** storybook examples **MUST** be wrapped in `PrototypeDisplay.Item` for dotted background
- **NEVER** render components directly in PrototypeDisplay without Item wrapper
- **USE label prop** on `PrototypeDisplay.Item` to describe the content instead of separate headings
- **GROUP related components** within single `PrototypeDisplay.Item` rather than separate items for better visual organization

**Typography Hierarchy (Updated):**

- Title variants are larger than Body variants
- Correct order: Display > Headline > Title > Body > Label

**Ternary Operator Patterns (Updated):**

- **NEVER** nest ternary operators - use simple, separate conditions
- **ALWAYS** place each condition on its own line within stylex.props()
- **NEVER** create const variables before stylex.props() - use inline conditions directly

**Display Props Implementation (Updated):**

- **Font Components (spans):** Auto-apply `display: inline-block` when margins are used via `bottom !== undefined || top !== undefined ? rootStyles.inline : null`
- **Heading Components:** Auto-apply `display: block` when margins are used via `bottom !== undefined || top !== undefined ? rootStyles.block : null`
- **Explicit Props Override:** `block` and `inline` props always override implicit display (applied later in stylex.props)
- **No Const Variables:** Use direct ternary conditions in stylex.props() - StyleX applies later styles to override earlier ones
- **Priority Order:** Later in stylex.props() = higher priority (explicit props come after implicit logic)

**StyleX Naming Conventions (Updated):**

- **Components:** Use `rootStyles` for main component element, semantic names for other elements (`labelStyles`, `iconStyles`, etc.)
- **Storybook Routes:** Use single `styles` instance for all route-specific styling
- **Semantic Naming:** Choose descriptive names based on element purpose rather than generic names

**Prototype Route Layout Patterns (Updated):**

- **ALWAYS** use `PrototypeDisplay.Item` or `PrototypeDisplay.Items` for all content sections
- **NEVER** create custom grids, section divs with marginBottom, or custom layout components
- **PrototypeDisplay.Item** for single sections or grouped content with `label` prop
- **PrototypeDisplay.Items** for collections of similar variants with `label` prop
- **CRITICAL:** Read 5 existing prototype routes before implementing to understand current patterns
- **NO custom styling** for layout - rely on PrototypeDisplay components for consistent spacing and backgrounds
