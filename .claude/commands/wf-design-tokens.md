# Skill : Design Tokens

Tu aides l'utilisateur a definir un design system complet pour transformer les wireframes monochromes en interface stylee.

Ce skill est **optionnel**. L'utilisateur peut exporter en mode wireframe sans passer par ici. Mais si l'objectif est de produire des specs completes pour le dev, ce skill permet de documenter toute la couche visuelle.

## Quand utiliser ce skill

- Quand les wireframes sont valides et que l'utilisateur veut passer au design visuel
- Avant d'exporter avec `/wf-export --mode=full`
- Pour documenter les choix de design (couleurs, typo, espacements) avant le dev

## Ce que tu produis

Un fichier `specs/design-tokens.md` qui documente :

1. **Palette de couleurs** (primaire, secondaire, neutres, semantiques avec scales)
2. **Typographie** (familles, tailles, poids, hauteurs de ligne)
3. **Espacement** (scale d'espacement)
4. **Grille** (colonnes, gutters)
5. **Radius** (arrondis des coins)
6. **Ombres** (elevations)
7. **Composants** (specifications visuelles par composant, optionnel)

## Ta posture

Tu dialogues avec l'utilisateur. Tu ne remplis pas un formulaire. Tu poses des questions, tu proposes des options, tu expliques les implications.

**Commence par comprendre** : quel style l'utilisateur vise ? Moderne, classique, minimaliste, ludique ?

**Propose des presets** pour accelerer : "Design system minimaliste", "Design system colore", "Design system corporate", "Design system custom".

**Guide sans imposer** : suggere des valeurs mais laisse l'utilisateur decider.

## Workflow

### 1. Lire le contexte

Lis :
- `project-state.md`, `project-brief.md` pour comprendre l'app
- `src/styles/wireframe.css` pour connaitre la couleur primaire actuelle et les variables existantes
- `architecture.md` pour savoir quels composants sont utilises

### 2. Discuter du style

Pose des questions ouvertes :
- Quel est le ton general de l'app ? (serieux, ludique, moderne, classique...)
- Y a-t-il des references visuelles ? (sites, apps, marques inspirantes)
- Quelles sont les contraintes ? (accessibilite, identite de marque existante...)

Propose des **presets** :

| Preset | Description | Palette | Typo | Espacement |
|--------|-------------|---------|------|------------|
| **Minimaliste** | Epure, beaucoup de blanc, typographie neutre | Monochrome + 1 accent | Inter ou System | Large |
| **Colore** | Palette riche, contrastes forts | 2-3 couleurs principales | Titres expressifs | Moyen |
| **Corporate** | Serieux, professionnel, lisible | Bleu/gris classique | Sans-serif classique | Serre |
| **Custom** | Tu definis tout manuellement | A definir | A definir | A definir |

### 3. Definir la palette

#### Couleur primaire

Partir de la couleur actuelle dans `--wf-accent` ou en choisir une nouvelle.

Generer une **scale** de 9 nuances (50, 100, 200, ... 900) :
- 50 : tres clair (backgrounds)
- 500 : couleur de base
- 900 : tres fonce (texte sur fond clair)

Outil suggere : [https://uicolors.app](https://uicolors.app) pour generer la scale a partir d'une couleur.

#### Couleurs semantiques

Reprendre les couleurs du `src/styles/wireframe.css` (`--wf-danger`, `--wf-success`, etc.) et generer des scales completes.

#### Neutres (gris)

Generer une scale de gris complete (50 a 900) pour textes, borders, backgrounds.

### 4. Definir la typographie

#### Familles de polices

Proposer des paires de polices :
- **Moderne** : Inter + Inter (une seule famille)
- **Contraste** : Playfair Display (titres) + Inter (corps)
- **Corporate** : IBM Plex Sans + IBM Plex Sans
- **System fonts** : -apple-system, BlinkMacSystemFont, Segoe UI (pas de chargement)

#### Scale de tailles

Proposer une scale (en rem) :
- xs: 0.75rem
- sm: 0.875rem
- base: 1rem
- lg: 1.125rem
- xl: 1.25rem
- 2xl: 1.5rem
- 3xl: 1.875rem
- 4xl: 2.25rem
- 5xl: 3rem

#### Poids et hauteurs de ligne

Definir les poids utilises (400, 500, 600, 700) et les line-heights (tight, normal, relaxed).

### 5. Definir les espacements

Proposer une scale d'espacement (en rem) :
- 0.5 : 0.125rem (2px)
- 1 : 0.25rem (4px)
- 2 : 0.5rem (8px)
- 3 : 0.75rem (12px)
- 4 : 1rem (16px)
- 6 : 1.5rem (24px)
- 8 : 2rem (32px)
- 12 : 3rem (48px)
- 16 : 4rem (64px)

### 6. Definir la grille

- Nombre de colonnes (12 standard, 16 pour desktop large)
- Gutters (espacement entre colonnes)
- Container max-width

### 7. Definir radius et ombres

#### Border radius
- sm: 0.125rem (2px)
- base: 0.25rem (4px)
- md: 0.375rem (6px)
- lg: 0.5rem (8px)
- xl: 0.75rem (12px)
- 2xl: 1rem (16px)
- full: 9999px (cercle)

#### Shadows (elevations)
- sm: subtile
- base: normale
- md: moyenne
- lg: prononcee
- xl: tres prononcee

### 8. Generer `specs/design-tokens.md`

Structure :

```markdown
# Design Tokens — [Nom du projet]

> Genere le [date]
> Style : [Minimaliste / Colore / Corporate / Custom]

## 1. Palette de couleurs

### Primaire
[Scale 50-900 avec hex codes]

### Secondaire (optionnel)
[Scale 50-900]

### Neutres (Gris)
[Scale 50-900]

### Semantiques
#### Success (Vert)
[Scale 50-900]

#### Warning (Orange)
[Scale 50-900]

#### Danger (Rouge)
[Scale 50-900]

#### Info (Bleu)
[Scale 50-900]

## 2. Typographie

### Familles
- **Titres** : [font-family]
- **Corps** : [font-family]
- **Mono** : [font-family] (pour code, optionnel)

### Scale de tailles
[Tableau : nom, rem, px, usage]

### Poids
- Normal : 400
- Medium : 500
- Semibold : 600
- Bold : 700

### Line heights
- Tight : 1.25
- Normal : 1.5
- Relaxed : 1.75

## 3. Espacement

[Tableau : token, rem, px, usage]

## 4. Grille

- **Colonnes** : [nombre]
- **Gutters** : [valeur]
- **Container max-width** : [valeur]
- **Breakpoints** :
  - Mobile : < 480px
  - Tablet : < 768px
  - Desktop : 1200px+

## 5. Border Radius

[Tableau : token, valeur, usage]

## 6. Shadows

[Tableau : token, box-shadow value, usage]

## 7. Composants (optionnel)

Pour chaque composant cle (bouton, card, input, etc.), documenter :
- **Etats** : default, hover, active, disabled
- **Variantes** : primary, secondary, ghost, danger
- **Specifications** : padding, border, radius, shadow

---

## Utilisation

Ces tokens peuvent etre implementes en CSS custom properties, SCSS variables, ou Tailwind config.

Pour exporter avec ce design system : `/wf-export --mode=full`
```

### 9. Upgrade wireframe vers haute-fidelite (optionnel)

Apres avoir defini les design tokens, l'utilisateur peut optionnellement **appliquer le design system directement sur les wireframes** pour obtenir une preview quasi-haute-fidelite. Ce n'est pas obligatoire — les tokens peuvent rester une spec theorique pour le dev.

Si l'utilisateur le souhaite, voici le processus de "design upgrade" :

#### Etape 1 : Mettre a jour `src/styles/wireframe.css`

Remplacer les variables wireframe par les vraies valeurs du design system :

- `--wf-accent` devient la couleur primaire-500 du design system
- `--wf-danger`, `--wf-success`, `--wf-warning`, `--wf-info` prennent les couleurs semantiques definies
- `--wf-text`, `--wf-text-muted`, `--wf-border`, `--wf-bg` prennent les neutres du design system
- Ajouter les variables de typographie (`--wf-font-heading`, `--wf-font-body`, etc.)
- Ajouter les variables de radius et shadow si definies

#### Etape 2 : Transformer le style wireframe en style final

- Epaissir, colorer ou supprimer les bordures selon le design (elles sont deja solides 1px gris)
- Ajouter des etats `hover`, `focus`, `active` sur les elements interactifs (boutons, liens, inputs)
- Appliquer les vrais `border-radius` au lieu des coins carres ou minimaux du wireframe
- Ajouter les `box-shadow` definies dans les tokens
- Appliquer les vraies typographies (font-family, font-weight, line-height)

#### Etape 3 : Ajustements visuels

- Affiner les couleurs de fond (backgrounds, cards, sections)
- Ajuster les contrastes pour respecter les ratios WCAG definis dans les tokens
- Harmoniser les espacements avec la scale definie

#### Comment faire

L'agent peut realiser cette transformation via `/wf-edit` applique directement sur `src/styles/wireframe.css`. L'utilisateur decrit le niveau de fidelite souhaite ("applique le design system", "rends-le plus fini visuellement") et l'agent modifie le CSS en consequence.

**Important** : cette transformation est reversible. Le CSS wireframe d'origine peut etre restaure via git. Il est recommande de committer les wireframes monochromes avant d'appliquer le design upgrade.

### 10. Mettre a jour le state

Ajouter dans `project-state.md` que le design system a ete defini, avec le style choisi. Si le design upgrade a ete applique, le noter egalement.

### 11. Resume

Afficher :
- Fichier genere : `specs/design-tokens.md`
- Style choisi : [preset ou custom]
- Design upgrade applique : oui/non
- Prochaine etape : `/wf-export --mode=full` pour generer l'export complet

## Regles importantes

- **Dialogue, pas questionnaire** : comprendre le besoin avant de proposer
- **Presets pour accelerer** : la plupart des projets peuvent partir d'un preset
- **Accessibilite** : rappeler les ratios de contraste WCAG (4.5:1 pour texte normal, 3:1 pour texte large)
- **Coherence** : les choix doivent etre coherents avec le brief et l'architecture
- **Pas de code CSS** : ce skill produit de la documentation, pas du code — sauf si l'utilisateur demande le design upgrade (etape 9)
- **CSS path** : le fichier CSS est `src/styles/wireframe.css` (pas `assets/wireframe.css`)
