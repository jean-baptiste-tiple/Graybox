# GRAYBOX

Template Claude Code pour concevoir des interfaces d'application sous forme de wireframes HTML/CSS monochromes, et les transformer en documentation technique exploitable pour le dev.

---

## En bref

| | |
|---|---|
| **Quoi** | Un template de projet Claude Code qui transforme une description d'app en wireframes HTML/CSS + documentation technique |
| **Pour qui** | Toi, quand tu veux concevoir l'interface d'une app avant de la developper |
| **Output** | Des wireframes navigables dans le navigateur + un PRD auto-suffisant pour BMAD ou un LLM |
| **Continuite** | `project-state.md` garde la memoire entre les sessions, tu peux travailler sur plusieurs jours |

## Le workflow

| Etape | Commande | Tu fais | L'agent produit |
|-------|----------|---------|-----------------|
| 1 | `/wf-brief` | Tu decris ton app librement | `project-brief.md` |
| 2 | `/wf-architect` | Tu valides/ajustes ses propositions | `architecture.md` |
| 3 | `/wf-screen X` | Tu demandes chaque ecran | `screens/X.html` (wireframe navigable) |
| 4 | `/wf-edit X` | Tu modifies un ecran existant | Mise a jour + propagation des composants partages |
| 5 | `/wf-review` | Tu lis ses observations | Rapport d'audit |
| 6 | `/wf-export` | Tu recuperes les specs | `specs/prd-wireframe.md` + JSON |

Les phases sont un cap, pas un couloir. Tu peux sauter, revenir, melanger. L'agent s'adapte.

## L'output final

Un PRD auto-suffisant contenant : vision produit, parcours utilisateur, specification de chaque ecran, inventaire des composants, modele de donnees infere, routes et API suggerees. Tu le donnes en input a BMAD ou a un LLM pour le vrai dev.

---

## Pour demarrer

1. Cloner ce repo
2. Ouvrir dans VS Code avec Claude Code
3. Taper `/wf-brief` et decrire son app

## Principes

- **HTML/CSS pur** : pas de JS, pas de framework
- **Quasi-monochrome** : noir, blanc, gris + une couleur primaire au choix + couleurs semantiques (danger, success, warning, info)
- **Responsive** : mobile (480px), tablette (768px), desktop (1200px+)
- **Auto-documente** : chaque ecran contient sa documentation (commentaires HTML, attributs `data-*`)
- **Composants partages** : les elements communs (navbar, sidebar) sont stockes dans `_partials/` et propages automatiquement
- **Persistant** : `project-state.md` garde la memoire entre les sessions

## Structure du projet

```
.
├── CLAUDE.md              Instructions pour l'agent
├── project-state.md       Memoire du projet entre les sessions
├── project-brief.md       Brief synthetise
├── architecture.md        Sitemap, flows, composants partages
├── assets/
│   └── wireframe.css      ~70 composants CSS avec etats et responsive
├── screens/
│   ├── _index.html        Index visuel / sitemap des ecrans
│   ├── _partials/         Composants HTML partages (navbar, sidebar, etc.)
│   └── *.html             Wireframes individuels
├── _templates/            Templates de demarrage (login, signup, home, etc.)
│   ├── screens/           Ecrans types
│   └── partials/          Partials types
├── specs/                 Documentation pour le dev
│   ├── _schemas/          JSON schemas de reference
│   ├── prd-wireframe.md   PRD complet auto-suffisant
│   ├── screens.json       Inventaire structure des ecrans
│   └── components.json    Inventaire des composants
└── .claude/commands/      Definitions des skills (6 commandes)
```

## Composants CSS disponibles

`assets/wireframe.css` fournit ~70 composants :

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

Tous avec etats (hover, active, disabled, focus-visible, error) et responsive.

## Templates de demarrage

Le dossier `_templates/` contient des ecrans de reference pour les patterns courants :
- **login.html** : page de connexion
- **signup.html** : page d'inscription avec validation
- **reset-password.html** : mot de passe oublie (formulaire + confirmation)
- **home.html** : page d'accueil authentifiee avec sidebar desktop et bottom nav mobile
