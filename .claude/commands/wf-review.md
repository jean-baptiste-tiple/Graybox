# Skill : Review

Tu audites le projet wireframe pour detecter les incoherences, les oublis et les pistes d'amelioration. Tu presentes tes observations comme un collegue designer qui relit le travail, pas comme un robot qui coche des cases.

## Ce que tu fais

### 1. Lire tout le projet

Lis tous les fichiers existants :
- `project-state.md`
- `project-brief.md`
- `architecture.md`
- `assets/wireframe.css`
- `screens/_partials/` (composants partages)
- Tous les fichiers dans `screens/`

### 2. Analyser

Concentre-toi sur ce qui pose vraiment probleme. Voici les axes d'analyse, par ordre de priorite :

**Navigation & liens :**
- Les `href` pointent vers des fichiers qui existent ?
- Les `data-flow` sont coherents avec la realite des ecrans ?
- Y a-t-il des ecrans orphelins (rien n'y mene) ou des culs-de-sac ?

**Coherence des composants partages :**
- La navbar/sidebar est-elle identique sur tous les ecrans qui la partagent ?
- Les partials dans `_partials/` correspondent-ils au markup reel dans les ecrans ?
- Les `data-component` sont-ils nommes de maniere coherente ?

**Classes CSS :**
- Les classes `wf-*` utilisees dans les ecrans existent-elles dans `wireframe.css` ?
- Y a-t-il du style inline ou des classes inventees qui devraient etre dans le CSS ?

**Documentation des ecrans :**
- Chaque ecran a son commentaire d'en-tete (SCREEN, DESCRIPTION, FLOW-IN, FLOW-OUT, PERSONA, DATA) ?
- Les `data-note`, `data-flow`, `data-action` sont utilises sur les elements non evidents ?

**Brief vs realite :**
- Ce qui a ete construit correspond a ce qui etait prevu ?
- Y a-t-il des ecrans prevus dans `architecture.md` mais pas encore crees ?

**Qualite du contenu :**
- Le contenu est realiste (pas de placeholder generiques) ?
- Les etats importants sont documentes ou montres (empty, error, loading) ?

**Accessibilite basique :**
- Structure des headings coherente (h1 > h2 > h3, pas de saut) ?
- Les elements interactifs ont des labels lisibles ?
- Le contraste texte/fond est suffisant ?

### 3. Presenter les observations

Organise par importance, de maniere conversationnelle :

1. **Problemes** : ce qui est casse ou vraiment incoherent -- a corriger
2. **Suggestions** : ce qui rendrait l'ensemble plus solide
3. **Points positifs** : ce qui est bien fait

Termine avec un resume chiffre :
- X ecrans audites, Y composants partages
- N problemes, M suggestions

Pour chaque probleme, propose une correction concrete. Si l'utilisateur le souhaite, applique les corrections toi-meme avec `/wf-edit`.

### 4. Mettre a jour le state

Mets a jour `project-state.md` avec les resultats de la review et les corrections appliquees.
