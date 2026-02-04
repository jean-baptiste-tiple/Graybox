# Skill : Export

Tu compiles l'ensemble du projet wireframe en documentation structuree, prete a servir d'input pour du vrai developpement (methode BMAD ou autre).

L'objectif : un LLM qui lit les documents que tu produis doit pouvoir comprendre l'application complete et la reconstruire fidelement avec une vraie stack technique.

## Ce que tu fais

> **Idempotence** : cet export regenere TOUS les fichiers a chaque fois. Si des fichiers existent deja dans `specs/`, ils sont ecrases. C'est voulu : l'export reflete toujours l'etat actuel du projet.

### 1. Lire tout le projet

Lis tous les fichiers :
- `project-state.md`, `project-brief.md`, `architecture.md`
- `assets/wireframe.css`
- `screens/_partials/` (composants partages)
- Tous les `screens/*.html`

### 2. Generer specs/prd-wireframe.md

C'est le document principal. Il doit etre **auto-suffisant** : un LLM qui lit uniquement ce fichier comprend l'application entiere.

Structure en couches, du global vers le precis :

```markdown
# PRD - [Nom du projet]

> Genere a partir des wireframes HTML/CSS.
> Date : [date]

## 1. Vision

### Le produit
[Ce que fait l'app, le probleme resolu, en 2-3 phrases]

### Les utilisateurs
[Personas avec roles et besoins]

### Perimetre V1
[Ce qui est inclus et ce qui est explicitement exclu]

## 2. Navigation et parcours

### Carte des ecrans
[Diagramme Mermaid montrant tous les ecrans et leurs connexions]

### Navigation persistante
[Description de la navbar, sidebar, ou autre systeme de navigation commun]

### Parcours principal : [Nom]
[Diagramme Mermaid du flow]
[Tableau etape par etape : ecran, action, resultat, ecran suivant]

### Parcours secondaire : [Nom]
[idem]

## 3. Ecrans

Pour chaque ecran, dans l'ordre logique du parcours principal :

### [Nom de l'ecran] (screens/[nom].html)

**Role** : [description]
**Persona** : [persona]
**Acces** : depuis [ecrans] / vers [ecrans]

**Structure :**
[Arborescence du contenu de la page]
```
Page
├── Navbar (partage)
├── Zone principale
│   ├── En-tete : titre + actions
│   └── Contenu : [description]
└── [autres zones]
```

**Composants utilises :**
[liste des composants avec leur role]

**Actions disponibles :**
| Action | Element | Comportement | Destination |
|--------|---------|--------------|-------------|

**Donnees requises :**
| Donnee | Type | Description |
|--------|------|-------------|

**Etats :**
- Default : [description]
- Vide : [description]
- Erreur : [description]

## 4. Composants reutilisables

Pour chaque composant identifie par data-component :

### [Nom]
- Present sur : [ecrans]
- Role : [description]
- Donnees attendues : [props]
- Variantes : [si applicable]

## 5. Modele de donnees (infere)

### Entites
[Pour chaque entite deduite des ecrans :]

#### [Nom] (ex: Project)
| Champ | Type | Description | Vu dans |
|-------|------|-------------|---------|

### Relations
[Diagramme Mermaid ER]

### Enumerations
| Enum | Valeurs | Utilise dans |
|------|---------|-------------|

## 6. Specifications techniques (suggerees)

### Routes
| Ecran | Route suggeree | Acces |
|-------|----------------|-------|

### API (suggeree)
| Methode | Endpoint | Description | Source |
|---------|----------|-------------|--------|

### Responsive
[Comportement par breakpoint]
```

### 3. Generer specs/screens.json

Inventaire structure de tous les ecrans avec leurs metadonnees, composants, flows, donnees, actions et etats. Format JSON parseable par un LLM ou un outil.

### 4. Generer specs/components.json

Inventaire des composants reutilisables avec leurs props, ecrans d'utilisation, variantes et etats. Format JSON.

### 5. Mettre a jour le state

Mets a jour `project-state.md` avec les fichiers generes et leurs chemins.

### 6. Resume

Affiche un resume de ce qui a ete genere :
- Fichiers produits avec leur chemin
- Statistiques : nombre d'ecrans, composants, entites, endpoints
- Ce que le LLM destinataire trouvera dans chaque fichier
