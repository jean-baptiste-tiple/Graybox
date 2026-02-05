# Skill : Export

Tu compiles l'ensemble du projet wireframe en documentation structuree, prete a servir d'input pour du vrai developpement (methode BMAD ou autre).

L'objectif : un LLM qui lit `specs/app-spec.md` puis les fichiers HTML des ecrans peut **reconstruire l'application fidelement** — le design visuel exact, les workflows, les transitions, les donnees.

Le principe : **le HTML wireframe EST la spec visuelle**. Le fichier `app-spec.md` ne redecrit pas ce que le HTML montre deja. Il apporte ce que le HTML seul ne dit pas : la vision produit, les flows entre ecrans, le modele de donnees, les routes.

> **Idempotence** : cet export regenere `specs/app-spec.md` a chaque fois. Si le fichier existe deja, il est ecrase. L'export reflete toujours l'etat actuel du projet.

## Modes d'export

Cet export supporte 2 modes :

### Mode `wireframe` (par defaut)

Export rapide pour validation des flows et de la structure. Documente les wireframes monochromes tels quels.

**Usage** : `/wf-export` ou `/wf-export --mode=wireframe`

**Produit** : `specs/app-spec.md` avec tokens wireframe basiques (gris + couleur primaire)

**Cas d'usage** : Valider l'UX, les parcours, la hierarchie de l'info avant de passer au design visuel.

### Mode `full`

Export enrichi incluant le design system complet (si defini via `/wf-design-tokens`).

**Usage** : `/wf-export --mode=full`

**Produit** :
- `specs/app-spec.md` avec design system complet
- Reference a `specs/design-tokens.md` (si existant)

**Prerequis** : Avoir execute `/wf-design-tokens` pour definir la palette, la typo, l'espacement

**Cas d'usage** : Transmettre au dev avec toutes les specs visuelles finales.

---

## Ce que tu produis

Le livrable est compose de fichiers qui existent deja + un fichier genere :

| Fichier | Role | Genere par export ? |
|---------|------|---------------------|
| `specs/app-spec.md` | Index, flows, data model, routes | **Oui** |
| `specs/design-tokens.md` | Design system complet (mode full uniquement) | Non (genere par /wf-design-tokens) |
| `screens/*.html` | Spec visuelle de chaque ecran | Non (deja existant) |
| `screens/_partials/` | Composants partages | Non (deja existant) |
| `assets/wireframe.css` | Wireframe CSS | Non (deja existant) |

Le LLM destinataire recoit le tout. Il commence par lire `app-spec.md` pour comprendre l'app, puis consulte les HTML individuellement.

---

## Ce que tu fais

### 0. Detecter le mode

L'utilisateur peut specifier le mode avec `--mode=wireframe` ou `--mode=full`. Si absent, utiliser `wireframe` par defaut.

Si mode `full` demande mais `specs/design-tokens.md` n'existe pas, **avertir l'utilisateur** et lui suggerer de lancer `/wf-design-tokens` d'abord.

### 1. Lire tout le projet

Lis tous les fichiers :
- `project-state.md`, `project-brief.md`, `architecture.md`
- `assets/wireframe.css` (extraire les variables CSS du `:root`)
- `screens/_partials/` (composants partages)
- Tous les `screens/*.html`
- **Si mode full** : `specs/design-tokens.md` (si existant)

### 2. Generer `specs/app-spec.md`

Structure compacte. Chaque section est courte et va a l'essentiel.

#### Template mode `wireframe` :

```markdown
# [Nom du projet] — App Spec (Wireframe)

> Genere a partir des wireframes HTML/CSS.
> Date : [date]
> Mode : Wireframe (structure et flows uniquement)
>
> Ce fichier est le point d'entree. Pour le design visuel de chaque ecran,
> lire le fichier HTML correspondant dans `screens/`.
> Le wireframe CSS est dans `assets/wireframe.css`.

## 1. Vision

[L'app en 2-3 phrases : quoi, pour qui, quel probleme]
[Perimetre V1 : ce qui est inclus / exclu]

## 2. Design (Wireframe)

**Philosophie** : 90% gris, 10% couleur primaire. Focus sur structure et flows, pas sur le style.

### Tokens wireframe
```css
--wf-accent: #[couleur primaire];
--wf-danger: #dc2626;  /* Rouge pour erreurs */
--wf-success: #059669; /* Vert pour success */
--wf-warning: #d97706; /* Orange pour warnings */
--wf-info: #0284c7;    /* Bleu pour info */
--wf-text: #171717;
--wf-text-muted: #737373;
--wf-border: #d4d4d4;
--wf-bg: #fafafa;
```

### Breakpoints
- **Mobile** (< 480px) : [comportement cle, ex: bottom nav visible]
- **Tablet** (< 768px) : [comportement cle, ex: sidebar masquee]
- **Desktop** (1200px+) : [comportement cle, ex: layout complet]

> **Note** : Ce wireframe ne definit pas encore le design system final. Pour l'export avec design complet, lancer `/wf-design-tokens` puis `/wf-export --mode=full`.

## 3. Ecrans

### Inventaire
| Ecran | Fichier | Persona | Description |
|-------|---------|---------|-------------|
| [Nom] | `screens/[nom].html` | [persona] | [1 ligne] |

### Composants partages
| Composant | Fichier partial | Utilise dans |
|-----------|----------------|--------------|
| [Nom] | `screens/_partials/_[nom].html` | [ecrans] |

## 4. Flows

### Carte des ecrans
[Diagramme Mermaid montrant TOUS les ecrans et leurs connexions, deduits des data-flow et data-transition]

### Parcours principal : [Nom]
[Diagramme Mermaid du flow]
[Etapes cles en une ligne chacune, avec transitions]

### Parcours secondaire : [Nom]
[idem, si pertinent]

## 5. Modele de donnees

### Entites
[Pour chaque entite deduite des ecrans :]

#### [Nom]
| Champ | Type | Description | Vu dans |
|-------|------|-------------|---------|

### Relations
[Diagramme Mermaid ER — compact]

## 6. Routes & API

| Ecran | Route | Methode | Description |
|-------|-------|---------|-------------|
[une ligne par ecran/action]

## 7. Guide de lecture des wireframes

Pour interpreter les fichiers HTML :
- `data-component="nom"` : composant reutilisable
- `data-flow="ecran.html"` : lien de navigation vers un autre ecran
- `data-action="nom"` : action declenchee (create, delete, submit, etc.)
- `data-transition="type"` : transition visuelle (slide-left, fade, modal, etc.)
- `data-note="texte"` : annotation du designer (fond jaune, pas a implementer)
- Les classes CSS `wf-*` sont definies dans `assets/wireframe.css`
- Les sections en commentaire HTML (`<!-- ... -->`) documentent des etats alternatifs (vide, erreur, loading)

---

## Prochaines etapes

1. Definir le design system complet : `/wf-design-tokens`
2. Re-exporter avec design : `/wf-export --mode=full`
```

#### Template mode `full` :

Meme structure que wireframe, avec ces differences :

**Section 2. Design** devient :

```markdown
## 2. Design System

> Design system complet defini. Voir `specs/design-tokens.md` pour les specs detaillees.

### Tokens principaux
[Extraire les tokens du fichier design-tokens.md]

### Palette
- **Primaire** : [couleurs]
- **Secondaire** : [couleurs]
- **Semantique** : Success, Warning, Danger, Info

### Typographie
- **Titres** : [font, poids, tailles]
- **Corps** : [font, poids, tailles]

### Espacement & Grilles
- **Grille** : [colonnes, gutters]
- **Espacements** : [scale]

### Composants
[Reference aux composants documentes dans design-tokens.md]

> Pour les specs completes, lire `specs/design-tokens.md`.
```

**Supprimer la section "Prochaines etapes"** (deja fait).

### Regles de generation

- **app-spec.md reste compact** : c'est un index, pas une copie des ecrans
- **Pas de prose redondante** : ne pas re-decrire le contenu visible dans le HTML
- **Le flow Mermaid est critique** : c'est la seule vue d'ensemble des connexions entre ecrans
- **Le modele de donnees est infere** : deduit des donnees affichees dans les ecrans
- **Le guide de lecture** : essentiel pour que le LLM destinataire sache interpreter les data-* attributs
- **Mode full** : extraire les infos du fichier design-tokens.md, ne pas les reinventer

### 3. Mettre a jour le state

Mets a jour `project-state.md` avec le fichier genere et le mode utilise.

### 4. Resume

Affiche un resume :
- **Mode** : wireframe ou full
- **Fichier genere** : `specs/app-spec.md`
- **Fichiers existants references** : X ecrans, Y partials, 1 CSS (+ design-tokens.md si mode full)
- **Statistiques** : nombre d'ecrans, composants partages, entites, routes
- **Instruction pour le LLM destinataire** : "Commence par lire specs/app-spec.md, puis consulte les HTML individuellement"
- **Si mode wireframe** : Rappeler que l'utilisateur peut definir le design system avec `/wf-design-tokens` puis re-exporter avec `--mode=full`
