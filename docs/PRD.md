# Product Requirements Document — Objectif Sport Website

**Version:** 1.1  
**Last updated:** 2026-05-18  
**Status:** Approved for v1 planning  
**Stakeholders:** Product owner, Pierre Vespignani (content)  
**Related docs:** [Brand design](brand-design.md) · [Sitemap](sitemap.md)

---

## 1. Executive summary

Objectif Sport is building a **French-first marketing website** for a wellness coaching program delivered **on site at the client’s premises (entreprise) or at home**—not tied to a fixed public venue or city. The site presents activities and services to three audiences—**Entreprise**, **Club**, and **Sportif**—with equal prominence on the homepage.

The primary purpose is to **inform and build trust** (brochure site). Secondary outcomes include **audit requests** (Entreprise) and **general contact**. There is **no fixed launch deadline**; v1 ships with **placeholder content** where copy and media are not yet final.

**Tech stack:** Nuxt 4, Nuxt Content, Tailwind CSS, static generation (`nuxt generate`), deployed on **Vercel**.

---

## 2. Product vision & goals

### 2.1 Vision

A professional, performance-driven digital presence that reflects Objectif Sport’s brand and clearly routes each visitor type to the right services—without requiring dynamic backends or member accounts in v1.

### 2.2 Business goals

| Goal                     | Description                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Trust**                | Communicate expertise, service pillars (Gym, Lab, Studio), delivery model (sur site / à domicile), and B2B/B2B2C offerings clearly. |
| **Discovery**            | Help Sportif and Club visitors understand what Objectif Sport offers.                                                               |
| **Lead capture (light)** | Entreprise visitors can submit a **dedicated audit request**; all visitors can use a **general contact form**.                      |
| **Compliance**           | Meet French legal and GDPR expectations (legal pages, cookie consent, Matomo).                                                      |
| **Service clarity**      | Communicate that coaching is delivered **sur site (entreprise) ou à domicile**; no fixed-location or city-specific positioning.     |
| **Discoverability**      | Support SEO for brand name, wellness/coaching terms, and B2B audit keywords (not geo-local).                                        |

### 2.3 Non-goals (v1)

- Member login, bookings, or e-commerce
- Blog, news, events calendar, or other dynamic content modules
- EZTM app store URLs (placeholder block only)
- Embedded map on Contact (deferred)
- Light theme / theme toggle (dark only at launch)
- Multilingual UI (French only)
- CRM integration (HubSpot, etc.)

---

## 3. Target audiences

| Audience         | Primary intent on site                                                  | Primary CTA                                         |
| ---------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| **L’entreprise** | Understand B2B services; evaluate Objectif Sport for corporate wellness | **Request an audit** (dedicated form)               |
| **Le club**      | Discover Monitoring, Événementiel, Staffing                             | None specific—browse then **Contact** if interested |
| **Le sportif**   | Discover Le Gym, Le Lab, Le Studio                                      | Explore service pages; optional **Contact**         |
| **General**      | Team credibility, legal info, reach Objectif Sport                      | **Contact**                                         |

All three audiences are **equal entry points** on the homepage (three parallel blocks).

---

## 4. User journeys

### 4.1 Homepage → Entreprise → Audit

1. Land on homepage → choose **L’entreprise**.
2. Browse Entreprise hub and/or service pages (Audit, Formation, Conception).
3. Click CTA to **request an audit** → dedicated audit form (minimal fields for v1).
4. Confirmation state after successful submission.

### 4.2 Homepage → Sportif → Facilities

1. Land on homepage → choose **Le sportif**.
2. Browse Sportif hub and/or **Le Gym**, **Le Lab**, **Le Studio** (separate pages).
3. Optional: navigate to Contact or Team.

### 4.3 Homepage → Club → Services

1. Land on homepage → choose **Le club**.
2. Browse Club hub and/or **Monitoring**, **Événementiel**, **Staffing** (separate pages).
3. No dedicated Club CTA beyond discovery; **Contact** available globally.

### 4.4 Global paths

- **L’équipe** → team listing (Pierre in v1; more profiles later).
- **Contact** → general form (name, email, phone, message).
- **Legal** → footer links to required legal pages.
- **EZTM** (homepage block) → placeholder download CTA; store URLs TBD.

---

## 5. Information architecture

### 5.1 Site map (v1)

```
/                           Homepage (3 audience blocks + EZTM placeholder)
/entreprise                 Entreprise hub (optional overview)
/entreprise/audit           Audit
/entreprise/formation       Formation (formerly “Opération”)
/entreprise/conception      Conception
/club                       Club hub (optional overview)
/club/monitoring            Monitoring
/club/evenementiel          Événementiel
/club/staffing              Staffing
/sportif                    Sportif hub (optional overview)
/sportif/le-gym             Le Gym
/sportif/le-lab             Le Lab
/sportif/le-studio          Le Studio
/equipe                     Team listing
/equipe/[slug]              Team member profile (v1: Pierre only)
/contact                    General contact
/audit                      Dedicated audit request (or /entreprise/demande-audit — implementer choice)
/mentions-legales           Legal
/cgu                        Legal
/politique-de-confidentialite Legal
/cookies                    Legal / cookie policy
```

Hub pages (`/entreprise`, `/club`, `/sportif`) may be simple index pages linking to child services or folded into navigation-only structure; **each service must have its own page** in v1.

### 5.2 Navigation (recommended)

- Logo → Home
- Primary nav: **Entreprise** · **Club** · **Sportif** · **Équipe** · **Contact**
- Header CTA: **Contact** or **Demander un audit** (brand-dependent; prefer one primary red CTA)
- Footer: social (if available), legal links, copyright

---

## 6. Functional requirements

### 6.1 Homepage

| ID  | Requirement                                                                                                               | Priority |
| --- | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| H-1 | Three equal-prominence blocks: Entreprise, Club, Sportif—each with headline, short copy, link to audience hub or key page | P0       |
| H-2 | Hero aligned with [brand design](brand-design.md): dark theme, photography, red accent keyword in headline                | P0       |
| H-3 | EZTM block: “download the app” placeholder; links TBD, non-blocking for launch                                            | P2       |
| H-4 | Sticky header with logo, nav, primary CTA                                                                                 | P0       |
| H-5 | Footer with legal links and Matomo-ready cookie consent entry point                                                       | P0       |

**Content note:** Brochure material under `/samedi-06-12` is **inspiration only**, not embedded PDFs.

### 6.2 Service pages (9 total)

| ID  | Requirement                                                                             | Priority |
| --- | --------------------------------------------------------------------------------------- | -------- |
| S-1 | One dedicated page per service (see §5.1)                                               | P0       |
| S-2 | Consistent template: hero/title, body sections, optional imagery, related links         | P0       |
| S-3 | Entreprise service pages include CTA to **audit request** where relevant                | P0       |
| S-4 | Content via Nuxt Content (Markdown + frontmatter) for maintainability by owner + Pierre | P0       |
| S-5 | Placeholder copy and imagery acceptable until final assets delivered                    | P0       |

**Formation:** UI and URLs use **Formation**; legacy name “Opération” may appear once in copy if needed for recognition.

### 6.3 Team (`/equipe`)

| ID  | Requirement                                                                                | Priority |
| --- | ------------------------------------------------------------------------------------------ | -------- |
| T-1 | v1: profile for **Pierre Vespignani**                                                      | P0       |
| T-2 | Profile fields: **photo**, **role**, **bio**, **contact** (email and/or phone as provided) | P0       |
| T-3 | Architecture supports **additional profiles** without structural rework (content-driven)   | P1       |

### 6.4 Contact form (`/contact`)

| ID  | Requirement                                                                                                                                                                                              | Priority |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| C-1 | Fields: **name**, **email**, **phone**, **message**                                                                                                                                                      | P0       |
| C-2 | Client-side validation; accessible labels and error messages                                                                                                                                             | P0       |
| C-3 | Submit via **server/API route** (e.g. Resend, Nodemailer) on static deploy—use Vercel serverless function or Nuxt server route compatible with `nuxt generate` + server handlers as per Nuxt/Vercel docs | P0       |
| C-4 | Success and error states; no silent failures                                                                                                                                                             | P0       |
| C-5 | Map / embedded location: **out of scope v1**                                                                                                                                                             | —        |

### 6.5 Audit request form (dedicated)

| ID  | Requirement                                                                                          | Priority |
| --- | ---------------------------------------------------------------------------------------------------- | -------- |
| A-1 | Separate from general contact; linked from Entreprise CTAs                                           | P0       |
| A-2 | **Minimal fields for v1** (e.g. name, email, phone, company/organization, message); extensible later | P0       |
| A-3 | Same delivery mechanism as contact (email API)                                                       | P0       |
| A-4 | Distinct confirmation copy (“demande d’audit reçue”)                                                 | P1       |

### 6.6 Legal & privacy

| ID  | Requirement                                           | Priority |
| --- | ----------------------------------------------------- | -------- |
| L-1 | **Mentions légales**                                  | P0       |
| L-2 | **CGU**                                               | P0       |
| L-3 | **Politique de confidentialité**                      | P0       |
| L-4 | **Cookies** policy + consent UI aligned with Matomo   | P0       |
| L-5 | Legal content editable via Content or static Markdown | P0       |

### 6.7 Analytics (Matomo)

| ID  | Requirement                                                                    | Priority |
| --- | ------------------------------------------------------------------------------ | -------- |
| M-1 | Matomo integration with **opt-in consent** before tracking (GDPR)              | P0       |
| M-2 | Document Matomo site ID / URL in environment config (not committed as secrets) | P0       |
| M-3 | Cookie banner blocks tracking until accepted                                   | P0       |

---

## 7. Content strategy

| Topic                | Decision                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| **Language**         | French UI; brand name **Objectif Sport** in Latin characters                                             |
| **Tone**             | Professional, intense, performance-driven ([brand design](brand-design.md))                              |
| **Ownership**        | Product owner + Pierre maintain content post-launch                                                      |
| **v1 assets**        | **Placeholders** acceptable; structure and templates ship first                                          |
| **Source material**  | Brochure inspiration only; no PDF downloads on site                                                      |
| **Service delivery** | Copy must state **sur site (entreprise) ou à domicile** where relevant; avoid city or fixed-venue claims |
| **SEO copy**         | Brand + wellness/coaching + B2B audit keywords on relevant pages (no geo-local SEO in v1)                |

---

## 8. Design & UX requirements

- Follow [brand-design.md](brand-design.md): colors, typography (Barlow Condensed + Source Sans 3), components, imagery treatment.
- **Default theme: dark only** for v1; no light-mode toggle.
- Responsive: mobile-first; service grids and homepage blocks stack on small viewports.
- **Accessibility: WCAG 2.1 AA** — contrast per brand doc, semantic HTML, keyboard navigation, visible focus, form labels, alt text on images.

---

## 9. Technical requirements

| Area          | Requirement                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| **Framework** | Nuxt 4, Vue 3 Composition API, TypeScript                                      |
| **Content**   | Nuxt Content for pages and team profiles                                       |
| **Styling**   | Tailwind CSS v4 per project setup                                              |
| **SEO**       | `@nuxtjs/seo` — meta, sitemap, OG images as configured                         |
| **Build**     | `nuxt generate` (static output)                                                |
| **Hosting**   | Vercel                                                                         |
| **Forms**     | API route / serverless email delivery (provider TBD: Resend, Nodemailer, etc.) |
| **Analytics** | Matomo with consent gating                                                     |
| **i18n**      | None in v1                                                                     |

### 9.1 Environment & secrets

- Email API keys, Matomo URL/ID: environment variables on Vercel.
- No secrets in repository.

### 9.2 Performance

- Static assets CDN via Vercel; optimize images (Nuxt Image when applicable).
- Target good Core Web Vitals on primary templates.

---

## 10. SEO requirements

| Priority | Keywords / intent                                                                   |
| -------- | ----------------------------------------------------------------------------------- |
| P0       | **Objectif Sport** (brand)                                                          |
| P0       | Wellness coaching, performance, **sur site / à domicile** (service model, not city) |
| P1       | B2B: audit entreprise, corporate wellness (Entreprise pages)                        |

- Unique `<title>` and meta description per page.
- Semantic heading hierarchy (one H1 per page).
- XML sitemap via `@nuxtjs/sitemap`.

---

## 11. Success metrics

Brochure-site KPIs (qualitative until analytics baseline exists):

| Metric                                               | Tool / signal            |
| ---------------------------------------------------- | ------------------------ |
| Site live on production domain                       | Deployment               |
| All P0 pages reachable, no broken nav                | QA checklist             |
| Forms deliver to inbox                               | Manual test + monitoring |
| Matomo tracks only after consent                     | QA + Matomo dashboard    |
| Lighthouse accessibility score ≥ 90 on key templates | CI or manual audit       |

No hard traffic or conversion targets for v1.

---

## 12. Release phasing (suggested, no deadline)

| Phase                     | Deliverable                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| **1 — Foundation**        | Layout, header/footer, dark theme tokens, homepage shell, legal page shells |
| **2 — Content structure** | All service page templates + Nuxt Content collections; placeholder copy     |
| **3 — Forms**             | Contact + audit API routes, email delivery, confirmations                   |
| **4 — Team & polish**     | Pierre profile, imagery, SEO meta, Matomo + cookie consent                  |
| **5 — Launch**            | Final copy swap, EZTM URLs when available, optional map on Contact          |

---

## 13. Open items & TBD

| Item                                 | Owner                  | Notes                               |
| ------------------------------------ | ---------------------- | ----------------------------------- |
| EZTM App Store / Play Store URLs     | Product owner          | Homepage block ships as placeholder |
| Email provider & recipient addresses | Product owner + dev    | For contact and audit forms         |
| Matomo instance URL & site ID        | Product owner          | Env config                          |
| Final legal copy                     | Product owner / legal  | Templates in v1                     |
| Photography & final service copy     | Pierre + product owner | Replace placeholders                |
| Social network URLs                  | Product owner          | Footer icons if used                |
| Contact page map                     | Deferred post-v1       | OpenStreetMap or Google Maps        |
| Light mode toggle                    | Post-v1                | Per brand design roadmap            |
| Additional team profiles             | Pierre + product owner | Content model ready in v1           |

---

## 14. Acceptance criteria (v1 done)

- [ ] Homepage presents three equal audience entry blocks + EZTM placeholder.
- [ ] Nine service pages live with shared template and placeholder or final content.
- [ ] Entreprise audit flow uses a **dedicated form** (not generic contact only).
- [ ] Contact form: name, email, phone, message; submits via API/email.
- [ ] Team page shows Pierre with bio, role, photo, contact.
- [ ] All four legal pages linked from footer; cookie consent gates Matomo.
- [ ] French copy throughout; brand matches [brand-design.md](brand-design.md).
- [ ] Dark theme only; responsive; WCAG 2.1 AA on primary templates.
- [ ] `nuxt generate` succeeds; site deploys to Vercel.
- [ ] SEO basics: titles, descriptions, sitemap for indexable routes.

---

## 15. Glossary

| Term                            | Meaning                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| **EZTM**                        | Mobile app; download promoted on homepage (URLs later)                                    |
| **Formation**                   | Entreprise service (formerly “Opération”)                                                 |
| **Audit**                       | B2B offering; primary Entreprise conversion action                                        |
| **Le Gym / Le Lab / Le Studio** | Sportif service pillars (coaching delivered on site or at home, not a public gym address) |
| **Sur site / à domicile**       | Default service delivery: at the client’s company premises or at home                     |

---

## Revision history

| Version | Date       | Changes                                                                                    |
| ------- | ---------- | ------------------------------------------------------------------------------------------ |
| 1.0     | 2026-05-17 | Initial PRD from stakeholder Q&A                                                           |
| 1.1     | 2026-05-18 | Location-less positioning: sur site (entreprise) ou à domicile; remove Marseille/local SEO |
