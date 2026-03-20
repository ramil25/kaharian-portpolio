---
name: Next.js portfolio refresh
overview: The repo is already a Next.js 14 App Router + Tailwind + Framer Motion portfolio. This plan modernizes the framework/tooling, fixes several UI/CSS bugs, introduces a shared shell (nav/footer), completes missing routes, and applies a cohesive visual refresh using your existing stack.
todos:
  - id: upgrade-next-react
    content: Bump Next/React (and eslint-config-next) to current stable; fix build/lint regressions
    status: completed
  - id: fonts-globals-tailwind
    content: Map Geist to Tailwind fontFamily; fix globals.css so body uses design tokens; extend theme colors/spacing
    status: completed
  - id: shell-nav-routes
    content: Add SiteHeader/Footer, mobile nav, route group layout; implement /portfolio and /contact; fix nav hrefs
    status: completed
  - id: refactor-pages
    content: Strip duplicated chrome from Home.tsx and Skills.tsx; unify section layout and fix Tailwind opacity + quote + resume control
    status: completed
  - id: seo-metadata
    content: Replace default metadata; add metadataBase, OG, per-route titles; verify public assets paths
    status: completed
  - id: a11y-motion
    content: Respect prefers-reduced-motion for Framer animations; verify contrast and focus states
    status: completed
isProject: false
---

# Portfolio: Next.js modernization and design refresh

## Current state (facts)

- **Stack**: [package.json](d:\kaharian-portpolio\package.json) — Next `14.2.14`, React 18, Tailwind 3.4, Framer Motion.
- **Routes**: `[src/app/page.tsx](d:\kaharian-portpolio\src\app\page.tsx)` (home) and `[src/app/skills/page.tsx](d:\kaharian-portpolio\src\app\skills\page.tsx)` only.
- **Pain points**:
  - **Nav lies**: Links include “Portfolio” and “Contact” but `[Home.tsx](d:\kaharian-portpolio\src\components\Home.tsx)` / `[Skills.tsx](d:\kaharian-portpolio\src\components\Skills.tsx)` use `href=""` for those items.
  - **Tailwind pitfall**: `className={... opacity-${opacity} ...}` will not generate `opacity-70` / `opacity-100` at build time (dynamic class names are purged). Use explicit classes or inline `style={{ opacity: ... }}`.
  - **Typography mismatch**: [layout.tsx](d:\kaharian-portpolio\src\app\layout.tsx) loads Geist via `next/font/local`, but [globals.css](d:\kaharian-portpolio\src\app\globals.css) sets `body { font-family: Arial... }`, so the loaded fonts never win.
  - **Metadata**: Still default “Create Next App” in layout — bad for SEO/sharing.
  - **Duplication**: Full header/nav is copy-pasted between Home and Skills; hard to keep consistent.
  - **Assets**: Code references `/assets/1.jpg` and `/assets/rlk.pdf`; ensure they live under `public/assets/` in the real project (not currently visible in the workspace snapshot).

```mermaid
flowchart LR
  subgraph today [Today]
    HomePage[Home component]
    SkillsPage[Skills component]
    HomePage --> dupNav[Duplicated nav]
    SkillsPage --> dupNav
  end
  subgraph target [Target]
    AppLayout[app/layout + shell]
    AppLayout --> SharedNav[Navbar]
    AppLayout --> children[Routes]
    children --> slash[/]
    children --> skills[/skills]
    children --> portfolio[/portfolio]
    children --> contact[/contact]
  end
  today --> target
```



## Phase 1 — Framework and tooling upgrade

- Bump **Next.js** to current stable (e.g. 15.x per your compatibility checks) and **React** to the matching major; run `next build` and fix any breaking changes (async `params`/`searchParams` if you add dynamic routes later, image defaults, eslint flat config if eslint bumps).
- Keep **App Router**; no need for Pages Router migration.
- Optional: add **autoprefixer** to [postcss.config.mjs](d:\kaharian-portpolio\postcss.config.mjs) if you hit cross-browser CSS gaps (many Next templates include it).

## Phase 2 — App shell and routing (structure before pixels)

- Add a **shared client shell** (e.g. `src/components/layout/SiteHeader.tsx` + optional `SiteFooter.tsx`) with:
  - Correct `Link` targets: `/`, `/skills`, `/portfolio`, `/contact`.
  - **Mobile menu** (hamburger + accessible focus trap or simple disclosure) so nav works on small screens; current `space-x-6` row will overflow.
- Move repeated chrome out of `[Home.tsx](d:\kaharian-portpolio\src\components\Home.tsx)` and `[Skills.tsx](d:\kaharian-portpolio\src\components\Skills.tsx)`; keep those files focused on page content.
- **Implement missing pages**:
  - `**/portfolio`**: project cards (title, stack, links to demo/repo, optional screenshot from `public/`). Data can live in a small `src/data/projects.ts` array for easy edits.
  - `**/contact`**: email/social links and/or a **mailto** + copy-email pattern; only add a server action + form if you want inbound messages without a third-party form backend.
- Consider a **nested layout** under `src/app/(site)/layout.tsx` that wraps all marketing pages with header/footer, leaving root [layout.tsx](d:\kaharian-portpolio\src\app\layout.tsx) for fonts, metadata defaults, and global styles only.

## Phase 3 — Design system and visual polish

- **Wire fonts properly**: In root layout, apply Geist to `body` using the CSS variables already set up (e.g. Tailwind `font-sans` mapped to `var(--font-geist-sans)` in [tailwind.config.ts](d:\kaharian-portpolio\tailwind.config.ts)); remove or narrow the Arial override in [globals.css](d:\kaharian-portpolio\src\app\globals.css) so utility classes and theme tokens control typography.
- **Tokens**: Extend Tailwind theme with a small palette (background, surface, accent, muted text) instead of repeating long gradient strings everywhere; keep your purple/indigo direction if you like it, but reduce “gradient soup” for calmer sections (solid surfaces + one hero gradient).
- **Consistency**: Align Skills page outer wrapper with Home (full-page background, section max-width, spacing scale) so it feels one product, not two templates glued together.
- **Motion**: Keep Framer Motion but use **prefers-reduced-motion** respecting variants (either `useReducedMotion` or CSS) for accessibility.
- **Components**: Extract repeatable UI (e.g. `Button`, `Section`, `Card`) only where it removes duplication — avoid over-abstracting.

## Phase 4 — Content, SEO, and quality bar

- Replace metadata in [layout.tsx](d:\kaharian-portpolio\src\app\layout.tsx) with real **title template**, description, `metadataBase`, and **Open Graph** fields; add per-route `export const metadata` where titles differ.
- Fix **markup issues** in Home: malformed `"` entities in the quote; replace **button-wrapped Link** for the resume with a single accessible download control (`<a>` or `Link` with button classes).
- **Images**: Confirm `next/image` `[src](d:\kaharian-portpolio\src\components\Home.tsx)` paths exist under `public/`; add `sizes` where appropriate.
- Run **lint** and **production build**; spot-check Lighthouse basics (contrast, tap targets, document title).

## Suggested order of work

1. Fix font/CSS variables + Tailwind theme (immediate visual win, low risk).
2. Shared header/footer + routing fixes + new `/portfolio` and `/contact`.
3. Refactor Home/Skills to use the shell and unified sections.
4. Framework version bump + build fix pass.
5. SEO metadata + motion a11y + final polish.

## Out of scope (unless you ask)

- Blog/CMS, analytics, internationalization, or a contact form backend.
- Complete visual rebrand away from purple/indigo (the plan assumes evolution, not a unrelated aesthetic).

