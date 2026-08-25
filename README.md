# Moonlancer

The bilingual public site for Moonlancer, a founder-led studio focused on connected retail, ERP, inventory, POS, payment, reconciliation, and reporting systems.

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The public entry points are `/en` and `/fa`; `/` redirects to `/en`.

## Production configuration

Set every integration variable below before release. The production canonical
origin is fixed to `https://moonlancer.ir`; `NEXT_PUBLIC_SITE_URL` is only an
optional local/preview override so a stale deployment value cannot rewrite the
sitemap, canonical links, or hreflang URLs.

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile keys for the intake form.
- `MOONLANCER_LEADS_WEBHOOK_URL`: the single commercial-owner workflow that stores and routes qualified inquiries.
- `MOONLANCER_LEADS_WEBHOOK_TOKEN`: optional bearer token for that workflow.
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL` and `NEXT_PUBLIC_UMAMI_WEBSITE_ID`: the separately hosted Umami analytics endpoint and site identifier.

The lead webhook receives the versioned payload documented by `src/app/api/leads/route.ts`. The downstream workflow is responsible for assigning the commercial owner, recording the next action, sending the submitter a copy or summary, notifying the owner, enforcing workflow-level rate limits, and applying the retention schedule in the privacy notice.

Production intentionally disables submission when Turnstile is not configured. Umami stays unloaded when either analytics variable is missing and no personal intake fields are sent as analytics properties.

## Release checks

```bash
pnpm exec tsc --noEmit --incremental false
pnpm lint
pnpm build
```

Case-study routes are generated only for entries marked `published: true` in `src/content/case-studies.ts`. Editorial shells remain non-public until their claims and assets are approved.
