# Objectif Sport

Système visuel du site : fond sombre, cartes arrondies, typographie italique en capitales, un rouge de marque et trois couleurs de zone (Gym, Lab, Studio).

## Colors

### Brand

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#de241b` | Boutons, filets, pastilles. Texte courant : `primary-500` (`#f6463d`), le rouge de base passe sous 4,5:1 sur les cartes |
| Neutral | `#222527` | Texte et bordures, échelle `neutral-50` à `neutral-950` |

### Surfaces

| Token | Value | Role |
|-------|-------|------|
| Page | `#0a0a0c` | Fond de page (`body`) |
| Card | `neutral-900` à 50 % | Classe `.card-surface` : `rounded-2xl`, bordure `neutral-700`. Une seule surface pour toutes les cartes |

### Zones

| Token | Hex | Texte sur fond sombre |
|-------|-----|------------------------|
| Gym | `#388828` | `--color-gym-light` `#45a433` |
| Lab | `#e8a800` | le jaune passe tel quel |
| Studio | `#0848a0` | `--color-studio-light` `#4b8fe8` |

Les aplats (pastilles, traits, bordures) gardent la teinte de base. Le texte utilise la variante claire via `pillarTextClass` et `heroAccentTextClass`.

## Typography

| Role | Font |
|------|------|
| Display, titres, boutons | Raleway (`font-display`) |
| Corps | Source Sans 3 (`font-body`) |

Deux niveaux de titre :

- Section : `CardText`, italique, centré, capitales.
- Carte : `AppTitle`, capitales, trait pinceau rouge (`BrandBrushLine`).

Les libellés en capitales utilisent `tracking-button` (`0.06em`). Taille minimale du texte : 12px.

## Components

### Boutons

- Capitales, `font-display`, gras, `rounded-sm`, texte `neutral-100`.
- Principal : fond `#de241b`, survol à 90 %. Taille `xl` pour les actions de page : `px-8 py-3.5`.
- Secondaire : `color="neutral"` `variant="outline"`.

### Cartes

`.card-surface` pour tout bloc encadré. Les photos (profils, stations) sont rognées par les coins de la carte, sans marge interne.

### Hero

Image à droite, masque en dégradé. `object-position` par défaut `72% 12%` (athlètes). Les portraits passent `backgroundPosition`.

## Do's and Don'ts

1. Une seule surface de carte. Pas de fond `neutral-800` ou noir à côté de `.card-surface`.
2. Deux niveaux de titre seulement : `CardText` ou `AppTitle`.
3. Le rouge de base reste pour les aplats. Le petit texte rouge utilise `text-primary-500`.
4. Gym et Studio en texte utilisent `text-gym-light` et `text-studio-light`.
5. Pas de jaune hors palette (`yellow-400`).
6. Pas de texte sous 12px.
7. Les cartes d'une même rangée ont la même hauteur.
8. Coins arrondis (`rounded-2xl` pour les cartes, `rounded-sm` pour les boutons).
