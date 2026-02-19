# Multi-Zones Setup: readboot.com/docs

Phases 1 and 2 are configured. Phase 3 requires manual steps in Vercel.

## Phase 3: Zero-Downtime Domain Migration

### 1. Alias the domain (Vercel CLI)

```bash
vercel alias set <your-main-app-deployment-url>.vercel.app readboot.com
```

Replace `<your-main-app-deployment-url>` with the production URL of readboot-turborepo-next (e.g. `readboot-turborepo-next.vercel.app`).

### 2. Update dashboard settings

1. Go to your **old project** settings and remove `readboot.com` from Domains.
2. Go to **readboot-turborepo-next** project settings → Domains → add `readboot.com`.
3. Vercel will recognize the existing configuration; the transition should be instantaneous.

### 3. Verify

Visit https://readboot.com/docs to confirm the docs are served correctly.
