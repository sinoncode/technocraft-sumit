# Technocraft Project Documentation

**Project type:** React Router SSR website with a local PocketBase backend  
**Workspace:** `technocraft`  
**Runtime:** Node.js 22 (`.nvmrc`)  
**Web server:** React Router 8 / Vite on port `3000`  
**Database server:** PocketBase 0.40.4 binary on port `8090`  
**Database engine:** PocketBase-managed SQLite

This document describes the current repository as implemented. It is intended to be the working reference for local development, database operation, route ownership, components, and file placement.

## 1. Architecture Overview

The repository is an npm workspace with two applications:

```text
Browser
  |
  | HTTP, SSR pages, /api/* requests
  v
apps/web (React Router SSR + Vite, port 3000)
  |
  | server-side PocketBase SDK using superuser credentials
  v
apps/pocketbase (PocketBase, port 8090)
  |
  v
apps/pocketbase/pb_data/data.db (SQLite runtime database)
```

The public website is mostly data-driven. Content lives in `apps/web/src/data`, page composition lives in route modules and reusable components, and server-only operations live in `apps/web/src/lib/*.server.ts` and resource routes.

The public inquiry form follows this path:

1. A visitor opens `InquiryDialog` or a contact form.
2. The browser sends a `POST` request to `/api/inquiries`.
3. `api.inquiries.ts` validates the payload and consent.
4. `api.server.ts` applies the API rate limit, body limit, security headers, logging, and error format.
5. `pocketbase-client.server.ts` health-checks PocketBase, authenticates as a superuser, and creates an `inquiries` record.
6. PocketBase writes the record to SQLite.

The browser does not receive direct public write access to the `inquiries` collection.

## 2. Requirements and Commands

Install Node.js 22 and npm. The repository includes the PocketBase executable, so a separate PocketBase installation is not required.

```bash
npm run setup       # Install workspace dependencies
npm run dev         # Start web and PocketBase together
npm run build       # Build the web application
npm run start       # Start the production web/PocketBase processes
npm run lint        # Lint the web application
npm run typecheck   # Generate route types and run TypeScript
```

Application-specific commands:

```bash
npm run dev --prefix apps/web
npm run build --prefix apps/web
npm run start --prefix apps/web
npm run lint --prefix apps/web
npm run typecheck --prefix apps/web

npm run dev --prefix apps/pocketbase
npm run migrations:up --prefix apps/pocketbase
npm run migrations:revert --prefix apps/pocketbase
npm run migrations:snapshot --prefix apps/pocketbase
npm run update --prefix apps/pocketbase
```

The root `dev` script uses `concurrently` to start both services. The normal local URLs are:

| Service | URL | Purpose |
| --- | --- | --- |
| Web | `http://localhost:3000` | React Router SSR application |
| PocketBase | `http://localhost:8090` | Local API/admin service |
| Health endpoint | `http://localhost:3000/api/health` | Web API health response |

### Environment variables

The web server reads `apps/web/.env` when present. Do not commit or expose its values. Important variables used by the code are:

| Variable | Used by | Purpose |
| --- | --- | --- |
| `POCKETBASE_URL` | `pocketbase-client.server.ts` | Server-side PocketBase URL; defaults to `http://localhost:8090` |
| `PB_SUPERUSER_EMAIL` | web server and migration | PocketBase superuser identity |
| `PB_SUPERUSER_PASSWORD` | web server and migration | PocketBase superuser password |
| `PB_ENCRYPTION_KEY` | PocketBase scripts | Encrypts PocketBase data and configuration |
| `NODE_ENV` | API error handling | Controls development error detail versus production-safe errors |

The production PocketBase command stores runtime data in `/data`; local development uses the application-local `pb_data` directory.

## 3. Local Database: PocketBase and SQLite

### Storage locations

| Mode | Database directory | Command behavior |
| --- | --- | --- |
| Development | `apps/pocketbase/pb_data` | `pocketbase serve --http=0.0.0.0:8090` |
| Explicit migration | `apps/pocketbase/pb_data` | `migrate up --dir=./pb_data` |
| Production | `/data` | `pocketbase serve --dir=/data` |

The local directory contains PocketBase-managed SQLite runtime files such as `data.db`, `data.db-wal`, `data.db-shm`, and auxiliary databases. These are generated state, not application source. Do not manually edit them, commit credentials, or copy an active WAL database while PocketBase is running. Stop the service before making a backup.

`apps/pocketbase/pb_data/types.d.ts` supplies PocketBase hook/migration type information. The SQLite files are the persisted database; migrations are the reproducible schema/configuration source of truth.

### Collections

The collection snapshot migration creates or restores the following collections.

#### Application collection: `inquiries`

This is a base collection. All collection API rules are `null`, so direct collection operations require superuser access.

| Field | Type | Constraints |
| --- | --- | --- |
| `id` | PocketBase text ID | Generated system identifier |
| `name` | Text | Required; maximum 200 characters |
| `email` | Email/text | Required; validated by the web API as a work email |
| `company` | Text | Optional; maximum 200 characters |
| `topic` | Select | Required; one of the values below |
| `message` | Text | Required; maximum 5,000 characters |
| `consent` | Boolean | Required; must be `true` at the API boundary |
| `page` | Text | Optional; maximum 200 characters; stores the originating page |
| `created` | Autodate | Set on create |
| `updated` | Autodate | Set on create and update |

Allowed `topic` values:

```text
general
telecom
ai-data-centre
cybersecurity
ai-application-development
it-staffing
```

The collection has an index on `created` for chronological access.

#### Auth and system collections

PocketBase maintains these system collections in the snapshot:

| Collection | Role and access model |
| --- | --- |
| `_mfas` | MFA records; authenticated users can access only their own records |
| `_otps` | OTP records; authenticated users can access only their own records |
| `_externalAuths` | OAuth identity records; authenticated users can access only their own records |
| `_authOrigins` | Authentication-origin records; authenticated users can access only their own records |
| `_superusers` | Superuser auth collection; rules are superuser-only |
| `users` | Password-auth collection with self-only create/view/update/delete rules |

The `users` collection contains PocketBase system fields (`id`, `password`, `tokenKey`, `email`, `emailVisibility`, `verified`, `created`, and `updated`) plus:

- `name`: optional text, maximum 255 characters.
- `avatar`: optional single image file.
- Password authentication enabled.
- OAuth and OTP authentication disabled in the snapshot.

### Database migrations

Migrations run in timestamp order from `apps/pocketbase/pb_migrations`:

| File | Responsibility |
| --- | --- |
| `1759383931_initial_app_settings.js` | Sets the app name and preview URL, hides PocketBase controls, retains seven days of logs, logs level 8 and above with IPs, and trusts `X-Real-IP`, `X-Forwarded-For`, and `CF-Connecting-IP`. |
| `1764579159_create_superuser.js` | Creates a `_superusers` record from `PB_SUPERUSER_EMAIL` and `PB_SUPERUSER_PASSWORD`. |
| `1769159103_disable_auth_alert_superusers.js` | Disables superuser login-location alerts. |
| `1769164585_set_rate_limits.js` | Enables PocketBase request limits described below. |
| `1775709407_disable_auth_alert_users.js` | Disables login-location alerts on `users` when that collection exists. |
| `1790150837_collections_snapshot.js` | Restores the full system, auth, and application collection snapshot. It has no down migration. |

PocketBase rate limits configured by migration:

| Label | Audience | Limit |
| --- | --- | --- |
| `/api` | All | 200 requests per 5 minutes |
| `*:auth` | Guests | 20 attempts per 5 minutes |
| User password reset | All | 5 per hour |
| User verification | All | 5 per hour |
| User email change | Authenticated users | 3 per hour |
| User OTP | All | 10 per hour |

The web API adds a separate in-process limit of 100 requests per client per 5 minutes. IPv6 clients are grouped by `/56`.

### PocketBase hooks

| File | Responsibility |
| --- | --- |
| `pb_hooks/builder-mailer.pb.js` | When SMTP is disabled, forwards PocketBase mail to an external Builder Mailer API using environment-provided sender and API credentials. |
| `pb_hooks/custom-migrations-cmd.pb.js` | Adds the `horizons migrations:revert` command. Named applied migrations are reverted transactionally and their migration files can be removed. |
| `pb_hooks/external-dashboard.pb.js` | Proxies the PocketBase admin UI from a versioned external Hostinger CDN URL. |
| `pb_hooks/logs-forwarder.pb.js` | In production, forwards logs to stdout/stderr and avoids database log persistence. In development, writes log entries to `vault/temp/SESSION_JOURNAL.md` and continues normal database logging. |

### Server-side database client

`apps/web/src/lib/pocketbase-client.server.ts` owns privileged access:

- Uses `POCKETBASE_URL`, defaulting to `http://localhost:8090`.
- Does not authenticate merely on module import.
- Health-checks PocketBase before authentication.
- Retries health checks up to 10 times with a 1-second delay.
- Caches the authentication promise to avoid duplicate concurrent login attempts.
- Re-authenticates once after a `401` response.
- Disables SDK auto-cancellation because concurrent SSR loaders share one client.
- Exposes typed list/get/create/batch-create/update/delete/file-token/send helpers.
- Uses PocketBase batch creation for atomic multi-record writes.

`apps/web/src/lib/pocketbase-client.ts` is the browser SDK client. It points to `/hcgi/platform` and shares the browser auth store. Current public inquiry persistence intentionally uses the server client instead.

## 4. Web Routes and API Contracts

Routes are explicitly registered in `apps/web/src/routes.ts` and rendered inside `apps/web/src/root.tsx`.

| URL | File | Section / responsibility |
| --- | --- | --- |
| `/` | `src/routes/home.tsx` | Homepage |
| `/about` | `src/routes/about.tsx` | Company and delivery approach |
| `/solutions` | `src/routes/solutions.tsx` | Solutions hub |
| `/solutions/telecom` | `src/routes/solutions.telecom.tsx` | Telecom services |
| `/solutions/ai-data-centre` | `src/routes/solutions.ai-data-centre.tsx` | AI data-centre infrastructure |
| `/solutions/cybersecurity` | `src/routes/solutions.cybersecurity.tsx` | Cybersecurity services |
| `/solutions/ai-application-development` | `src/routes/solutions.ai-application-development.tsx` | Enterprise AI applications |
| `/solutions/it-staffing` | `src/routes/solutions.it-staffing.tsx` | IT staffing |
| `/careers` | `src/routes/careers.tsx` | Careers and open roles |
| `/blog` | `src/routes/blog.tsx` | Blog/insights listing |
| `/insights` | `src/routes/insights.tsx` | Insights alias |
| `/white-papers` | `src/routes/white-papers.tsx` | Technical paper library |
| `/industries` | `src/routes/industries.tsx` | Industry index |
| `/industries/:slug` | `src/routes/industries.$slug.tsx` | Dynamic industry detail |
| `/contact` | `src/routes/contact.tsx` | Contact and inquiry form |
| `/content-planning` | `src/routes/content-planning.tsx` | Owner/editor content planning; noindex |
| `/sitemap.xml` | `src/routes/sitemap.xml.ts` | XML sitemap |
| `/robots.txt` | `src/routes/robots.txt.ts` | Crawler and AI-agent policy |
| `/api/health` | `src/routes/api.health.ts` | JSON health response |
| `/api/inquiries` | `src/routes/api.inquiries.ts` | Validates and stores inquiry records |
| `/api/*` | `src/routes/api.$.ts` | JSON API 404 fallback |

Every page route exports SEO metadata through `seo()`. The root layout supplies `SiteHeader`, `SiteFooter`, `FloatingInquiry`, `InquiryProvider`, the document shell, and the global error boundary.

### API behavior

`apps/web/src/lib/api.server.ts` is the common wrapper for resource routes:

- JSON response helpers and one shared error shape.
- 20 MiB request-body limit, enforced while streaming rather than trusting only `content-length`.
- JSON and `FormData` parsing helpers.
- In-process per-client rate limiting.
- Request logging with method, path, status, and duration.
- Production-safe `500` responses; development responses include diagnostic details.
- Security headers including `no-store`, CSP, same-origin resource policy, no-referrer, `nosniff`, and `X-Frame-Options: DENY`.

`POST /api/inquiries` accepts `name`, `email`, `company`, `topic`, `message`, `consent`, and `page`. It returns `201 {"ok":true}` on success, `422` for invalid input, `413` for an oversized body, `429` for the web API rate limit, and `500` for storage failures.

## 5. Content Data Modules

All content modules live in `apps/web/src/data` and are imported by routes or feature components:

| File | Content section |
| --- | --- |
| `about.ts` | About-page prose, delivery philosophy, technology domains, references |
| `ai-application-development.ts` | AI capabilities, outcomes, reliability, FAQs, references |
| `ai-data-centre.ts` | Infrastructure stack, capabilities, FAQs, references |
| `blog.ts` | Posts, categories, metadata, FAQs |
| `careers.ts` | Values, benefits, open roles, FAQs |
| `content-planning.ts` | Live, draft, and batch-two content briefs and status labels |
| `cybersecurity.ts` | Services, engagement lifecycle, technologies, FAQs |
| `home.ts` | Homepage sections, story blocks, statistics, FAQs |
| `home-media.ts` | Homepage media configuration |
| `industries-pages.ts` | Industry detail records and slug-driven content |
| `industries.ts` | Icon-backed industry definitions |
| `it-staffing.ts` | Engagement models, skills, staffing lifecycle |
| `pillars.ts` | Five solution pillars and `pillarHref()` |
| `solutions-hub.ts` | Solutions landing copy |
| `telecom.ts` | Telecom lifecycle, services, capabilities, industries, FAQs |
| `white-papers.ts` | White-paper records, FAQs, placeholders |

Shared data types (`Faq`, `TimelineStep`, `CardItem`, `ExternalReference`, and `ProseBlock`) are defined in `src/lib/content.ts`.

## 6. Component Inventory

### Site-wide components

| File | Role |
| --- | --- |
| `brand-logo.tsx` | Brand mark and text |
| `site-header.tsx` | Desktop/mobile navigation and mega-menu shell |
| `site-footer.tsx` | Footer navigation, branding, and inquiry entry |
| `page-hero.tsx` | Page title, breadcrumbs, chips, CTAs, and network visual |
| `section-heading.tsx` | Shared eyebrow, heading, and lead text |
| `scroll-reveal.tsx` | Motion wrapper for viewport-based reveals |
| `network-canvas.tsx` | Animated network visual used by hero areas |
| `floating-inquiry.tsx` | Persistent inquiry affordance |
| `inquiry-button.tsx` | Button that opens the inquiry dialog |
| `inquiry-dialog.tsx` | Modal inquiry form and global inquiry state (`InquiryProvider`, `useInquiry`) |
| `cta-band.tsx` | Inquiry-focused call-to-action band |
| `placeholder-note.tsx` | Visible editor/content placeholder |

### Shared content components

| File | Role |
| --- | --- |
| `card-grid.tsx` | Responsive card collections |
| `pillar-cards.tsx` | Connected five-pillar service display |
| `process-timeline.tsx` | Process and lifecycle timeline |
| `faq-section.tsx` | Radix accordion FAQ section |
| `prose-section.tsx` | Prose, links, placeholders, and light/dark bands |
| `external-references.tsx` | External source and reference links |
| `industry-grid.tsx` | Compact industry selector |

### Feature components

| File | Feature |
| --- | --- |
| `home/home-hero.tsx` | Homepage hero |
| `home/services-explorer.tsx` | Homepage service exploration |
| `home/story-splits.tsx` | Homepage story sections |
| `home/impact-band.tsx` | Homepage impact/statistics band |
| `home/insights-preview.tsx` | Homepage insights preview |
| `home/careers-teaser.tsx` | Homepage careers teaser |
| `ai-app/business-outcomes.tsx` | AI application outcomes |
| `ai-data-centre/stack-graphic.tsx` | AI data-centre stack visualization |
| `cybersecurity/technologies.tsx` | Cybersecurity technology list |
| `telecom/capabilities-list.tsx` | Telecom capabilities |
| `telecom/who-we-work-with.tsx` | Telecom audience/industry section |
| `it-staffing/skill-areas.tsx` | Staffing skill areas |
| `industries/industry-cards.tsx` | Industry cards |
| `blog/post-list.tsx` | Blog post list |
| `white-papers/paper-list.tsx` | White-paper list |
| `careers/open-roles.tsx` | Open-role list |
| `contact/contact-form.tsx` | Contact inquiry form |
| `contact/contact-info.tsx` | Contact information |
| `solutions-hub/which-fits.tsx` | Solutions-fit selector |

### Site-header components

| File | Role |
| --- | --- |
| `site-header/mega-menu.tsx` | Desktop mega-menu content |
| `site-header/mega-visuals.tsx` | Mega-menu visual panels |
| `site-header/mobile-mega-accordion.tsx` | Mobile navigation accordion |

### UI primitive library

`src/components/ui` is a shadcn-style New York/Radix library. Each file is a reusable primitive and belongs to the UI section rather than a business page:

```text
accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
button-group, button, calendar, card, carousel, chart, checkbox, collapsible,
command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
hover-card, input-group, input-otp, input, item, kbd, label, menubar,
navigation-menu, pagination, popover, progress, radio-group, resizable,
scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
spinner, switch, table, tabs, textarea, toaster, toast, toggle-group, toggle,
tooltip
```

Current public feature code directly uses form controls (`Input`, `Textarea`, `Label`, `Checkbox`, `Select`), `Accordion`, `Dialog`, and `Sheet`. The other primitives remain available for future screens and extensions.

## 7. Hooks and Libraries

| File | Responsibility |
| --- | --- |
| `hooks/use-auth.ts` | Browser PocketBase login, signup, logout, auth-store subscription, and loading state |
| `hooks/use-mobile.tsx` | 768px responsive breakpoint hook used by the sidebar primitive |
| `hooks/use-toast.ts` | Global toast reducer/store used by `Toaster` |
| `lib/api.server.ts` | API wrapper, limits, parsing, headers, errors, and logging |
| `lib/content.ts` | Shared content types |
| `lib/logger.server.ts` | Server logger |
| `lib/pocketbase-client.server.ts` | Lazy/retrying privileged PocketBase client |
| `lib/pocketbase-client.ts` | Browser PocketBase client at `/hcgi/platform` |
| `lib/rate-limit.server.ts` | In-process client limiter; 100 API requests per 5 minutes |
| `lib/require-auth.ts` | Client-side auth guard helper |
| `lib/seo.ts` | SEO, canonical, Open Graph, Twitter, robots, and JSON-LD metadata |
| `lib/site-origin.server.ts` | Public origin derivation with local-host handling |
| `lib/utils.ts` | Class-name merging helper |

## 8. Configuration and Plugins

### Application configuration

| File | Section |
| --- | --- |
| `package.json` | Workspace scripts and shared dev dependencies |
| `package-lock.json` | Locked dependency graph |
| `knip.json` | Unused-file/dependency analysis configuration |
| `.nvmrc` | Node.js version selection |
| `.version` | Hostinger/project version marker |
| `apps/web/package.json` | Web scripts and dependencies |
| `apps/web/components.json` | shadcn/Radix component configuration and aliases |
| `apps/web/react-router.config.ts` | React Router SSR/build configuration |
| `apps/web/vite.config.ts` | Vite, React Router, and development plugin registration |
| `apps/web/tsconfig.json` | TypeScript compiler and `@/*` alias configuration |
| `apps/web/tailwind.config.js` | Tailwind theme and content scanning |
| `apps/web/postcss.config.js` | PostCSS/Tailwind processing |
| `apps/web/eslint.config.mjs` | ESLint rules and ignored generated areas |
| `apps/web/eslint.unicode-escapes-formatter.mjs` | Unicode escape lint formatter |
| `apps/web/eslint.unicode-escapes-plugin.mjs` | Unicode escape lint plugin |
| `apps/web/src/index.css` | Global styles and design tokens |
| `apps/web/src/root.tsx` | Document shell, providers, global layout, and error boundary |
| `apps/web/src/horizons-preview-scripts.tsx` | Preview/editor scripts |
| `apps/web/src/vite-env.d.ts` | Vite TypeScript declarations |

### Vite and development plugins

| Path | Responsibility |
| --- | --- |
| `plugins/vite-plugin-dev-headers.ts` | Development response headers |
| `plugins/vite-plugin-globals.d.ts` | Global plugin type declarations |
| `plugins/vite-plugin-horizons-logger.ts` | Horizons logging integration |
| `plugins/vite-plugin-horizons-runtime.ts` | Horizons runtime registration |
| `plugins/horizons-runtime/*` | Runtime banner, client, editor-origin, and plugin helpers |
| `plugins/vite-plugin-pocketbase-auth.ts` | PocketBase auth integration |
| `plugins/pocketbase-auth-client.ts` | Client-side PocketBase auth bootstrap |
| `plugins/vite-plugin-iframe-route-restoration.ts` | Iframe route restoration plugin |
| `plugins/iframe-route-restoration-client.ts` | Iframe restoration client |
| `plugins/session-journal/*` | Development session-journal client and plugin |
| `plugins/utils/*` | AST and same-origin utilities |
| `plugins/visual-editor/*` | Inline visual editor: draft APIs, source writer, edit state/history, DOM transforms, annotations, overlays, formatting actions, and toolbar UI |

## 9. Complete Project File Tree

The following tree lists every application source/configuration file currently present. Runtime SQLite files, the bundled executable, `node_modules`, build output, and generated React Router types are called out separately because they are not hand-maintained source files.

```text
technocraft/
├── .nvmrc
├── .version
├── knip.json
├── package.json
├── package-lock.json
└── apps/
    ├── pocketbase/
    │   ├── .pocketbase-version
    │   ├── package.json
    │   ├── pocketbase                         # bundled executable
    │   ├── pb_data/
    │   │   ├── types.d.ts
    │   │   ├── data.db                        # generated SQLite runtime state
    │   │   ├── data.db-shm                    # generated SQLite shared memory
    │   │   ├── data.db-wal                    # generated SQLite write-ahead log
    │   │   └── auxiliary.db*                  # generated PocketBase auxiliary state
    │   ├── pb_hooks/
    │   │   ├── builder-mailer.pb.js
    │   │   ├── custom-migrations-cmd.pb.js
    │   │   ├── external-dashboard.pb.js
    │   │   └── logs-forwarder.pb.js
    │   └── pb_migrations/
    │       ├── 1759383931_initial_app_settings.js
    │       ├── 1764579159_create_superuser.js
    │       ├── 1769159103_disable_auth_alert_superusers.js
    │       ├── 1769164585_set_rate_limits.js
    │       ├── 1775709407_disable_auth_alert_users.js
    │       └── 1790150837_collections_snapshot.js
    └── web/
        ├── .env                                 # local secrets/config; do not publish
        ├── components.json
        ├── eslint.config.mjs
        ├── eslint.unicode-escapes-formatter.mjs
        ├── eslint.unicode-escapes-plugin.mjs
        ├── package.json
        ├── postcss.config.js
        ├── react-router.config.ts
        ├── tailwind.config.js
        ├── tsconfig.json
        ├── vite.config.ts
        ├── public/
        │   ├── favicon.ico
        │   └── technokraft-logo.png
        ├── plugins/
        │   ├── iframe-route-restoration-client.ts
        │   ├── pocketbase-auth-client.ts
        │   ├── vite-plugin-dev-headers.ts
        │   ├── vite-plugin-globals.d.ts
        │   ├── vite-plugin-horizons-logger.ts
        │   ├── vite-plugin-iframe-route-restoration.ts
        │   ├── vite-plugin-pocketbase-auth.ts
        │   ├── horizons-runtime/{banner,client,editor-origins,vite-plugin-horizons-runtime}.ts
        │   ├── session-journal/{session-journal-client,vite-plugin-session-journal}.ts
        │   ├── utils/{ast-utils,same-origin}.js
        │   └── visual-editor/
        │       ├── edit-mode-script.js
        │       ├── vite-plugin-edit-mode.js
        │       ├── vite-plugin-react-inline-editor.js
        │       ├── api/{draft,draft-snapshot}.js
        │       ├── constants/{icons,layout,messages,selectors,theme}.js
        │       ├── server/source-writer.js
        │       ├── state/{annotation-state,editing-state,history-state,multi-select-state,panel-state}.js
        │       ├── transform/{editability,inject-attributes}.js
        │       ├── utils/{dom-utils,html-utils,inline-style-state,parent-frame,selection-mode-metadata,session-history-command}.js
        │       └── ui/{annotation-panel,inline-edit,overlays,text-format}/... # editor UI modules
        └── src/
            ├── horizons-preview-scripts.tsx
            ├── index.css
            ├── root.tsx
            ├── routes.ts
            ├── vite-env.d.ts
            ├── components/                         # site and feature components
            ├── data/                               # page content records
            ├── hooks/                              # React hooks
            ├── lib/                                # shared/server libraries
            └── routes/                              # page and resource routes
```

The abbreviated brace/glob entries in the tree expand to the named files in the plugin and component inventories above. The `ui` directory contains the full primitive list in section 6. Together, those inventories name each file under `src`, `plugins`, `pb_hooks`, and `pb_migrations`; the only omitted tree entries are generated/runtime files explicitly labelled above.

## 10. Operational Notes

- Run PocketBase before exercising forms or server code that calls `pocketbaseAdmin`.
- Run migrations against the intended directory; local migrations and production `/data` are separate stores.
- Keep `PB_SUPERUSER_EMAIL`, `PB_SUPERUSER_PASSWORD`, and `PB_ENCRYPTION_KEY` out of source control and logs.
- Treat `pb_data` as persistent state. Back it up through a stopped PocketBase process or a database-aware deployment procedure.
- The public API uses `POST` for inquiry writes. Do not change authenticated or per-user operations to cacheable `GET` endpoints.
- Public page responses intentionally do not receive the API framing/CSP headers because preview iframe embedding depends on them remaining untouched; API responses do receive the stricter headers.
- `content-planning` is an editor/owner surface and is marked `noindex`; authentication helpers exist even though public route components do not currently use them.
- Build output is generated under `dist/apps/web`; React Router type generation creates `.react-router` artifacts.

## 11. Verification Checklist

```bash
npm run setup
npm run typecheck
npm run lint
npm run build
npm run dev
curl http://localhost:3000/api/health
```

At the time this document was generated, `npm run typecheck --prefix apps/web` reached TypeScript but reported one pre-existing error in `src/components/network-canvas.tsx`: `canvas` may be `null` before `getBoundingClientRect()` is called. The documentation change itself does not modify that component.

Expected health response:

```json
{"ok":true}
```

For a persistence smoke test, submit a valid contact inquiry through the web UI and verify that a new record appears in the PocketBase `inquiries` collection. Do not print superuser credentials or commit the resulting runtime database files.