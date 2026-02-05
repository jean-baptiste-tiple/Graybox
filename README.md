# GRAYBOX

Template Claude Code pour concevoir des interfaces d'application sous forme de wireframes HTML/CSS monochromes (90% gris, 10% couleur primaire), et les transformer en documentation technique exploitable pour le dev.

---

## En bref

| | |
|---|---|
| **Quoi** | Un template de projet Claude Code qui transforme une description d'app en wireframes HTML/CSS minimalistes + documentation technique |
| **Pour qui** | Toi, quand tu veux concevoir l'interface d'une app avant de la developper |
| **Output** | Wireframes HTML navigables + `app-spec.md` (index, flows, data model) + optionnel `design-tokens.md` (design system) |
| **Philosophie** | 90% gris, 10% couleur primaire. Focus sur structure et flows, pas sur le style visuel. |
| **Continuite** | `project-state.md` garde la memoire entre les sessions, tu peux travailler sur plusieurs jours |

## Le workflow

| Etape | Commande | Tu fais | L'agent produit |
|-------|----------|---------|-----------------|
| 1 | `/wf-brief` | Tu decris ton app librement | `project-brief.md` |
| 2 | `/wf-architect` | Tu valides/ajustes ses propositions | `architecture.md` |
| 3 | `/wf-screen X` | Tu demandes chaque ecran | `screens/X.html` (wireframe navigable) |
| 4 | `/wf-edit X` | Tu modifies un ecran existant | Mise a jour + propagation des composants partages |
| 5 | `/wf-design-tokens` | **Optionnel** : tu definis le design system | `specs/design-tokens.md` |
| 6 | `/wf-review` | Tu lis ses observations | Rapport d'audit |
| 7 | `/wf-export` | Tu recuperes les specs (mode wireframe ou full) | `specs/app-spec.md` |

Les phases sont un cap, pas un couloir. Tu peux sauter, revenir, melanger. L'agent s'adapte.

## L'output final

`specs/app-spec.md` est le point d'entree : vision, tokens wireframe (ou design system si mode full), inventaire des ecrans, flows Mermaid, modele de donnees infere, routes/API suggerees. Les fichiers `screens/*.html` sont la spec visuelle exacte — le LLM dev les lit directement pour reconstruire le design.

**Mode wireframe** : Export rapide avec wireframes monochromes pour validation UX.
**Mode full** : Export avec design system complet (prerequis : `/wf-design-tokens`).

Tu donnes le tout en input a BMAD ou a un LLM pour le vrai dev.

---

## Pour demarrer

1. Cloner ce repo
2. Ouvrir dans VS Code avec Claude Code
3. Taper `/wf-brief` et decrire son app

## Principes

- **HTML/CSS pur** : pas de JS, pas de framework
- **Philosophie wireframe** : 90% gris, 10% couleur primaire. Bordures pointillées, pas d'états hover. Focus sur structure et flows.
- **Responsive minimal** : mobile (bottom nav) et desktop (sidebar). Pas de breakpoints intermediaires complexes.
- **Auto-documente** : chaque ecran contient sa documentation (commentaires HTML, attributs `data-*`, `data-transition`)
- **Composants partages** : les elements communs (navbar, sidebar) sont stockes dans `_partials/` et propages automatiquement
- **Persistant** : `project-state.md` garde la memoire entre les sessions
- **2 modes d'export** : wireframe (rapide, structure uniquement) ou full (avec design system)

## Structure du projet

```
.
├── CLAUDE.md              Instructions pour l'agent
├── project-state.md       Memoire du projet entre les sessions
├── project-brief.md       Brief synthetise
├── architecture.md        Sitemap, flows, composants partages
├── assets/
│   └── wireframe.css      ~70 composants CSS style wireframe (bordures pointillées)
├── screens/
│   ├── _index.html        Index visuel / sitemap des ecrans
│   ├── _partials/         Composants HTML partages (navbar, sidebar, etc.)
│   └── *.html             Wireframes individuels
├── _templates/            Templates de demarrage (login, signup, home, etc.)
│   ├── screens/           Ecrans types
│   └── partials/          Partials types
├── specs/                 Documentation pour le dev
│   ├── _schemas/          JSON schemas de reference
│   ├── app-spec.md        Index : vision, flows, data model, routes
│   └── design-tokens.md   Design system complet (optionnel)
└── .claude/commands/      Definitions des skills (7 commandes)
```

## Composants CSS disponibles

`assets/wireframe.css` fournit ~70 composants en style wireframe (bordures pointillées, gris) :

**Layout** : page, container, row, col, stack, grid, sidebar layout
**Navigation** : navbar, sidebar nav, tabs, breadcrumbs, pagination, bottom nav (mobile)
**Surfaces** : card, panel, divider
**Boutons** : primary, ghost, danger, icon, button group (sm, lg)
**Formulaires** : input, textarea, select, checkbox, radio, toggle, search, upload zone
**Donnees** : table, list, badge, tag, chip, avatar, avatar group, stat card
**Feedback** : alert (info, success, warning, error), toast, snackbar, modal, drawer, bottom sheet
**Overlays** : dropdown, tooltip, spotlight/command palette
**Progression** : progress bar, skeleton loader, steps
**Contenu** : empty state (avec titre, texte, CTA), placeholder, image placeholder, timeline, kanban, accordion

Style minimal wireframe : pas d'états hover/focus, responsive basique (mobile + desktop).

## Templates de demarrage

Le dossier `_templates/` contient des ecrans de reference pour les patterns courants :
- **login.html** : page de connexion
- **signup.html** : page d'inscription avec validation
- **reset-password.html** : mot de passe oublie (formulaire + confirmation)
- **home.html** : page d'accueil authentifiee avec sidebar desktop et bottom nav mobile
