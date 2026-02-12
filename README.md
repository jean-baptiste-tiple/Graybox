# GRAYBOX

Template Claude Code pour concevoir des interfaces d'application sous forme de wireframes JSX/React monochromes (90% gris, 10% couleur primaire), avec preview live via Vite, et les transformer en documentation technique exploitable pour le dev.

---

## En bref

| | |
|---|---|
| **Quoi** | Un template de projet Claude Code qui transforme une description d'app en wireframes JSX navigables + documentation technique |
| **Pour qui** | Toi, quand tu veux concevoir l'interface d'une app avant de la developper |
| **Stack** | React 19 + Vite 6 — preview live avec HMR |
| **Output** | Wireframes JSX navigables + `app-spec.md` (index, flows, data model) + `design-tokens.md` (design system complet, optionnel) |
| **Philosophie** | 90% gris, 10% couleur primaire. Focus sur structure et flows, puis optionnellement upgrade vers du quasi high-fidelity |
| **Continuite** | `project-state.md` garde la memoire entre les sessions, tu peux travailler sur plusieurs jours |

## Pour demarrer

```bash
# 1. Cloner ce repo
git clone <url> mon-projet
cd mon-projet

# 2. Installer les dependances
npm install

# 3. Lancer la preview live
npm run dev
# -> Ouvre http://localhost:3000 avec HMR

# 4. Ouvrir dans VS Code avec Claude Code
# Taper /wf-brief et decrire son app
```

## Le workflow

| Etape | Commande | Tu fais | L'agent produit |
|-------|----------|---------|-----------------|
| 1 | `/wf-brief` | Tu decris ton app librement | `project-brief.md` + couleur primaire + logo |
| 2 | `/wf-architect` | Tu valides/ajustes ses propositions | `architecture.md` |
| 3 | `/wf-screen X` | Tu demandes chaque ecran | `src/screens/X.jsx` (wireframe navigable) |
| 4 | `/wf-edit X` | Tu modifies un ecran existant | Mise a jour du composant (propagation automatique via React) |
| 5 | `/wf-design-tokens` | Tu definis le design system (palette, typo, espacements) | `specs/design-tokens.md` + upgrade visuel des wireframes |
| 6 | `/wf-review` | Tu lis ses observations | Rapport d'audit |
| 7 | `/wf-export` | Tu recuperes les specs (mode wireframe ou full) | `specs/app-spec.md` |

Les phases sont un cap, pas un couloir. Tu peux sauter, revenir, melanger. L'agent s'adapte.

## L'output final

`specs/app-spec.md` est le point d'entree : vision, tokens wireframe (ou design system si mode full), inventaire des ecrans, flows Mermaid, modele de donnees infere, routes/API suggerees. Les fichiers `src/screens/*.jsx` sont la spec visuelle exacte — le LLM dev les lit directement pour reconstruire le design.

**Mode wireframe** (`/wf-export`) : Export rapide avec wireframes monochromes pour validation UX — structure, flows, layout.
**Mode full** (`/wf-export --mode=full`) : Export enrichi avec design system complet — couleurs, typo, espacements, composants styles. Prerequis : `/wf-design-tokens`.

Tu donnes le tout en input a BMAD ou a un LLM pour le vrai dev.

## Design system (`/wf-design-tokens`)

L'etape design system est optionnelle mais fortement recommandee pour un export complet couvrant l'UX **et** l'UI. Elle permet de :

- **Definir la charte visuelle** : palette de couleurs, typographie, espacements, border-radius, ombres
- **Upgrader les wireframes** : passer du rendu gris monochromatique a du quasi high-fidelity en appliquant les tokens au CSS
- **Produire une spec UI exploitable** : `specs/design-tokens.md` donne au dev tout ce qu'il faut pour implementer le style exact, pas juste la structure

Sans cette etape, l'export reste un wireframe UX (structure + flows). Avec, c'est une spec UX + UI complete que le dev peut reproduire pixel-perfect.

La page **UI Kit** (`#UIKit`) sert de terrain d'iteration visuel : tous les ~170 composants y sont affiches, ce qui permet de voir l'impact des tokens en temps reel via le HMR.

---

## Principes

- **JSX/React + Vite** : composants React avec preview live (HMR). Pas de framework lourd, juste Vite + React.
- **Philosophie wireframe** : 90% gris, 10% couleur primaire. Bordures fines et solides (gris clair), pas d'etats hover. Focus sur structure et flows.
- **Composants partages** : sidebar, bottom nav, layouts sont des imports React — modification en un seul endroit, propagation automatique.
- **Responsive** : 3 breakpoints (mobile < 480px, tablette < 768px, desktop). Sidebar desktop, topbar burger + drawer mobile (par defaut). Bottom nav disponible en alternative. Modals/drawers plein ecran sur mobile. Classes : `wf-hide-mobile`, `wf-hide-tablet`, `wf-show-mobile`, `wf-hide-desktop`, `wf-btn--block-mobile`.
- **Auto-documente** : chaque ecran contient sa documentation (JSDoc, attributs `data-*`, `data-transition`)
- **Persistant** : `project-state.md` garde la memoire entre les sessions
- **2 modes d'export** : wireframe (UX : structure et flows) ou full (UX + UI : avec design system complet)
- **Upgrade path** : wireframe gris → quasi high-fidelity via `/wf-design-tokens`. La page UI Kit permet d'iterer visuellement sur tous les composants en temps reel

## Structure du projet

```
.
├── CLAUDE.md              Instructions pour l'agent
├── package.json           React 19 + Vite 6
├── vite.config.js         Config Vite
├── index.html             Entry point Vite
├── project-state.md       Memoire du projet entre les sessions
├── project-brief.md       Brief synthetise
├── architecture.md        Sitemap, flows, composants partages
├── src/
│   ├── main.jsx           Bootstrap React
│   ├── App.jsx            Screen dispatcher + routing state-based
│   ├── styles/
│   │   └── wireframe.css  ~170 composants CSS style wireframe
│   ├── components/        Composants partages (imports React)
│   │   ├── WfLink.jsx     Helper de navigation
│   │   ├── AppLayout.jsx  Sidebar + main + burger menu mobile
│   │   ├── CenteredLayout.jsx  Pour ecrans auth (login, signup)
│   │   ├── Sidebar.jsx    Sidebar desktop
│   │   └── BottomNav.jsx  Navigation mobile (optionnel)
│   └── screens/
│       ├── index.js       Screen registry (barrel)
│       └── ScreenIndex.jsx  Index visuel auto-genere
├── _templates/            Templates de demarrage JSX
│   ├── screens/           Ecrans types (Login, Signup, Home, etc.)
│   └── components/        Composants types (Sidebar, BottomNav)
├── specs/                 Documentation pour le dev
│   ├── _schemas/          JSON schemas de reference
│   ├── app-spec.md        Index : vision, flows, data model, routes
│   └── design-tokens.md   Design system complet (optionnel)
└── .claude/commands/      Definitions des skills (7 commandes)
```

## Composants CSS disponibles

`src/styles/wireframe.css` fournit ~170 composants en style wireframe (bordures fines solides, gris clair) :

**Layout** : page, container, row, col, stack, grid, sidebar layout
**Navigation** : navbar, sidebar nav, tabs, breadcrumbs, pagination, topbar burger (mobile), bottom nav (optionnel)
**Surfaces** : card, panel, divider
**Boutons** : primary, ghost, danger, icon, button group (sm, lg)
**Formulaires** : input, textarea, select, multi-select, searchable select, checkbox, radio, toggle, search, upload zone
**Donnees** : table, list, badge, tag, chip, avatar, avatar group, stat card
**Feedback** : alert (info, success, warning, error), toast, snackbar, modal, drawer, bottom sheet
**Overlays** : dropdown, tooltip, spotlight/command palette
**Progression** : progress bar, skeleton loader, steps
**Contenu** : empty state (avec titre, texte, CTA), placeholder, image placeholder, timeline, kanban, accordion

**Responsive** : 3 breakpoints (mobile, tablette, desktop). Modals/drawers plein ecran sur mobile. Classes utilitaires responsive.
Style minimal wireframe : pas d'etats hover/focus.

## Templates de demarrage

Le dossier `_templates/` contient des ecrans JSX de reference pour les patterns courants :
- **Login.jsx** : page de connexion (CenteredLayout)
- **Signup.jsx** : page d'inscription avec validation (CenteredLayout)
- **ResetPassword.jsx** : mot de passe oublie (CenteredLayout)
- **Home.jsx** : page d'accueil authentifiee avec sidebar desktop et burger menu mobile (AppLayout)

## Navigation entre ecrans

La navigation utilise un state React (`currentScreen`) avec hash-based routing (URLs `#ScreenName`, bouton retour navigateur fonctionnel) :

```jsx
// Dans un ecran — utiliser WfLink
import WfLink from '../components/WfLink';

<WfLink to="Settings" transition="fade" navigate={navigate}>
  Parametres
</WfLink>

// Ou directement via la prop navigate
<button onClick={() => navigate('Dashboard')}>Dashboard</button>
```

Transitions disponibles : `fade`, `slide-left`, `slide-right`, `slide-up`, `modal`, `none`
