# Deployment note

## Portfolio release — 30/07/2026

Repository:

- GitHub: `bapluoc123/hoang-creative-portfolio-2026`
- Production branch: `main`
- Vercel project: `https-basica-co-jp`

This release publishes the current portfolio worktree described in
`CONTINUE_NEXT_WEEK.md`, including the homepage improvements, collection pages,
project covers, Auroradot, Elihigh Kids, Mood, typography fixes, responsive
layout work, and curated project assets.

## Maintenance notes

- Treat the deployed website and the current local worktree as the source of
  truth.
- Read `AGENTS.md` and `CONTINUE_NEXT_WEEK.md` before making further changes.
- Preserve authentic project artwork and the original hand-drawn mission
  character.
- Check Vietnamese typography, line height, wrapping, and overflow on desktop
  and mobile after interface changes.
- Do not commit credentials, access tokens, or local environment files.
- Only deploy reviewed changes.

## Validation

Before publishing a future release:

```powershell
npm.cmd exec tsc -- --noEmit
npm.cmd run build
```

Then review the homepage and the project routes listed in
`CONTINUE_NEXT_WEEK.md` at desktop and mobile widths.
