# Digital Business Score email setup

The `/digital-score` page posts contact details and assessment answers to
`/api/digital-score`. The server validates the answers and calculates the score.
It sends a full lead report to **admin@kanelinnovations.com** and a personalized
score report to the client's email. Both messages include identified gaps and
the complete catalogue of ten services published on the website.

## Hosting configuration

Deploy the repository using its existing Vercel configuration. GitHub Pages and
the Vite development server alone cannot run the email endpoint. Use `vercel dev`
for local API testing, or a Vercel preview deployment.

Set these server environment variables in the target Vercel environment:

- `RESEND_API_KEY`: a Resend sending key for your verified domain.
- `DIGITAL_SCORE_FROM_EMAIL`: optional; defaults to `support@kanelinnovations.com`.
  The sender domain must be verified in Resend.
- `SITE_URL`: optional; defaults to `https://kanelinnovations.com`.

Never put the Resend key in a `VITE_` variable. If the frontend uses a separate
API host, configure `VITE_DIGITAL_SCORE_API_URL` and explicitly configure allowed
origins on that API; same-origin hosting is the default.

## Delivery and operational checks

An accepted email has been queued by Resend; it is not confirmation of inbox
delivery. Check provider delivery/bounce logs during a preview smoke test using
an email address you control. Check that the admin mailbox exists and receives
the lead, and that replying to the client report reaches admin.

The page displays a separate status for each email and offers a retry for partial
failures. Retries keep the same submission and provider idempotency keys. Resend
deduplicates these requests for 24 hours. There is no background queue or durable
submission database: the client must retry if the provider is unavailable.

The endpoint includes a honeypot, payload validation, timeouts and a best-effort
per-instance attempt limit. Configure a shared rate limit in the hosting platform
for `/api/digital-score` before exposing the public form at scale; the in-memory
limit does not span server instances. Optional follow-up consent is recorded in
the admin email and does not gate delivery of the requested report.

Run `node --test api/digital-score.test.cjs` from the repository root. These tests
use synthetic contacts and mock Resend; they do not send real emails.
