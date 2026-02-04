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
| 2 | `/wf-architect` | Tu valides/ajustes ses propositions | `architecture.md` + `flows.md` |
| 3 | `/wf-screen X` | Tu demandes chaque ecran | `screens/X.html` (wireframe navigable) |
| 4 | `/wf-review` | Tu lis ses observations | Rapport d'audit |
| 5 | `/wf-export` | Tu recuperes les specs | `specs/prd-wireframe.md` + JSON |

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
- **Monochrome** : noir, blanc, gris
- **Responsive** : mobile (480px), tablette (768px), desktop (1200px+)
- **Auto-documente** : chaque ecran contient sa documentation (commentaires HTML, attributs `data-*`)
- **Persistant** : `project-state.md` garde la memoire entre les sessions

## Structure du projet

```
.
├── CLAUDE.md              Instructions pour l'agent
├── project-state.md       Memoire du projet entre les sessions
├── project-brief.md       Brief synthetise
├── architecture.md        Sitemap, flows, composants partages
├── assets/
│   └── wireframe.css      ~60 composants CSS avec etats et responsive
├── screens/
│   ├── _index.html        Index de navigation entre les ecrans
│   └── *.html             Wireframes individuels
├── specs/                 Documentation pour le dev
│   ├── prd-wireframe.md   PRD complet auto-suffisant
│   ├── screens.json       Inventaire structure des ecrans
│   └── components.json    Inventaire des composants
└── .claude/commands/      Definitions des skills
```

## Composants CSS disponibles

`assets/wireframe.css` fournit ~60 composants :

Layout, navigation, cards, boutons, formulaires, tableaux, listes, badges,
avatars, modals, dropdowns, tooltips, progress bars, skeleton loaders,
steps, alerts, toasts, placeholders, toggle switches, avatar groups,
upload zones, timelines, kanban, command palette, et utilitaires divers.

Tous avec etats (hover, active, disabled, error) et responsive.
