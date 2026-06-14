# Product Requirements Document — Objectif Sport

**Version:** 2.0  
**Last updated:** 2026-06-14  
**Status:** Approved for v1 planning  
**Related docs:** [Sitemap](sitemap.md) · [Design system](../DESIGN.md) · [Specs](../specs/)

---

## 1. Résumé

Site vitrine **francophone** pour Objectif Sport : coaching et performance livrés **sur site (entreprise) ou à domicile** — pas de salle publique fixe ni de positionnement géolocalisé.

Trois audiences à entrée égale sur la homepage : **Entreprise**, **Club**, **Sportif**. Objectifs : informer, inspirer confiance, capturer des leads légers (audit B2B, contact). v1 avec contenu placeholder acceptable.

**Stack :** Nuxt 4, Nuxt Content, Tailwind CSS, `nuxt generate`, Vercel.

---

## 2. Vision & périmètre

### Objectifs

- Présenter l’offre B2B, Club et Sportif avec clarté et crédibilité.
- Router chaque visiteur vers le bon parcours et les bons formulaires.
- Respecter RGPD (pages légales, consentement Matomo).

### Hors scope v1

Comptes membres, réservations, e-commerce, blog, carte sur Contact, thème clair, multilingue, CRM, URLs EZTM finales.

---

## 3. Audiences

| Audience | Intent principal | CTA principal |
| -------- | ---------------- | ------------- |
| **Entreprise** | Services B2B, évaluer Objectif Sport | Demande d’audit |
| **Club** | Monitoring, Événementiel, Staffing | Contact |
| **Sportif** | Découvrir les trois zones (Gym, Lab, Studio) | Contact |
| **Général** | Équipe, légal | Contact |

---

## 4. Les trois zones (Sportif)

L’offre **Sportif** s’organise autour de **trois zones de travail**. Ce ne sont pas des adresses physiques : ce sont des **piliers de service** que Objectif Sport déploie chez le client ou à domicile.

| Zone | Rôle | Spec |
| ---- | ---- | ---- |
| **Le Gym** | Coaching musculaire et performance — préhab, réhab, réathlé | [specs/le-gym.md](../specs/le-gym.md) |
| **Le Lab** | Testing et soins — bilans, récupération, thérapie | [specs/le-lab.md](../specs/le-lab.md) |
| **Le Studio** | Cours collectifs — gymnastique, danse, pilates, yoga | [specs/le-studio.md](../specs/le-studio.md) |

Chaque zone a sa page dédiée (`/sportif/le-gym`, `/sportif/le-lab`, `/sportif/le-studio`). Le détail des activités, exemples d’espaces et contenus attendus est dans les specs.

**Fil rouge éditorial** (à rappeler sur les pages concernées) : **consulting**, **soins**, **coaching**.

---

## 5. Architecture & navigation

Voir [sitemap.md](sitemap.md) pour la liste complète des routes.

```
/                    Homepage (3 blocs audience + EZTM placeholder)
/entreprise/*        Audit, Formation, Conception
/club/*              Monitoring, Événementiel, Staffing
/sportif/*           Hub + Le Gym, Le Lab, Le Studio
/equipe              Équipe (v1 : Pierre Vespignani)
/contact             Contact général
/audit               Demande d’audit (Entreprise)
/*                   Pages légales + cookies
```

Nav principale : **Entreprise · Club · Sportif · Équipe · Contact**. Header sticky, footer avec liens légaux et consentement cookies.

---

## 6. Exigences fonctionnelles (résumé)

| Zone | Exigences clés |
| ---- | -------------- |
| **Homepage** | 3 blocs audience à prominence égale, hero dark, EZTM placeholder |
| **Pages service** | 9 pages (3 Entreprise + 3 Club + 3 Sportif), template commun, Nuxt Content |
| **Sportif** | 3 pages zone conformes aux [specs](../specs/) |
| **Équipe** | Profil Pierre (photo, rôle, bio, contact) ; modèle extensible |
| **Contact** | Nom, email, téléphone, message ; validation + envoi email API |
| **Audit** | Formulaire dédié, lié aux CTA Entreprise |
| **Légal** | Mentions, CGU, confidentialité, cookies + bannière Matomo opt-in |

Design : [DESIGN.md](../DESIGN.md) — dark only, mobile-first, WCAG 2.1 AA.

---

## 7. Technique

Nuxt 4 · Vue 3 · TypeScript · Nuxt Content · Tailwind v4 · `@nuxtjs/seo` · Matomo (consentement) · secrets en variables d’environnement Vercel.

---

## 8. Critères d’acceptation v1

- [ ] Homepage : 3 blocs audience + EZTM placeholder
- [ ] 9 pages service + 3 pages zone Sportif selon specs
- [ ] Formulaires contact et audit opérationnels
- [ ] Équipe : profil Pierre
- [ ] Pages légales + consentement Matomo
- [ ] Français, dark theme, responsive, accessibilité AA
- [ ] `nuxt generate` OK, déploiement Vercel

---

## Historique

| Version | Date | Changements |
| ------- | ---- | ----------- |
| 1.0 | 2026-05-17 | PRD initial |
| 1.1 | 2026-05-18 | Positionnement sans lieu fixe |
| 2.0 | 2026-06-14 | PRD allégé ; détail des zones Sportif extrait vers `specs/` |
