<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

## STRICT DESIGN & COMPONENT RULES
- **Must Use Shadcn Only**: All UI elements, dialogs, drawers, and navigation must strictly use Shadcn UI.
- **NEVER use Shine-type icons or decorative sparkling/shine icons**: Strictly forbidden (no sparkle/shine/glimmer badges or decorative magic-shine icons). Use clean, technical vector icons from Lucide instead.
- **Logo Asset Source**: Always use the official Scalvio logos located in `/public/`:
  - Light mode: `/main lgo.png`
  - Dark mode: `/main logo dark.png`
- **Theme Switcher**: Always support and maintain a theme switcher (Light / Dark mode toggle).

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
