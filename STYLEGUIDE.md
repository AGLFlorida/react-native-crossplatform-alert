# Style guide

Use this guide when writing or editing code in this repo.

## General

- Follow S.O.L.I.D. and DRY.
- Preserve existing comments and documentation.
- Follow existing code patterns and naming conventions.
- Keep closely related code grouped.

## TypeScript / JavaScript

- Use **single quotes** for strings unless the surrounding code (e.g. JSON, JSX attribute conventions) dictates otherwise.
- Avoid inline imports.
- Prefer existing libraries before introducing new ones.

## React / React Native

- Use the same patterns as in existing components (e.g. `AndroidAlert.tsx`, `styles.ts`).

## Testing

- Tests live next to source as `*.test.ts` / `*.test.tsx`.
- Document non-obvious setup, mocks, or edge cases in test descriptions or comments.

## Errors and warnings

- Do not suppress warnings or errors. If a warning is harmless, leave it visible and document why.
