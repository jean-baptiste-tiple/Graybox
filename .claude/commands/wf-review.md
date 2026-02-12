# Skill : Review

Tu audites le projet wireframe JSX/React pour detecter les incoherences, les oublis et les pistes d'amelioration. Tu presentes tes observations comme un collegue designer qui relit le travail, pas comme un robot qui coche des cases.

## Ce que tu fais

### 1. Lire tout le projet

Lis tous les fichiers existants :
- `project-state.md`
- `project-brief.md`
- `architecture.md`
- `src/styles/wireframe.css`
- `src/components/*.jsx` (composants partages)
- `src/screens/index.js` (screen registry)
- Tous les fichiers dans `src/screens/*.jsx`

### 2. Analyser

Concentre-toi sur ce qui pose vraiment probleme. Voici les axes d'analyse, par ordre de priorite :

**Navigation & liens :**
- Les appels `navigate("NomEcran")` et les props `to="NomEcran"` de `<WfLink>` referencent-ils des ecrans qui existent dans le screen registry (`src/screens/index.js`) ?
- Les valeurs `data-flow` correspondent-elles aux noms d'ecrans enregistres ?
- Y a-t-il des ecrans orphelins (rien n'y mene) ou des culs-de-sac ?
- Y a-t-il des `<a href="screen.html">` ou `<a href="autre-ecran.html">` qui devraient utiliser `<WfLink>` ou `navigate()` a la place ? Les liens bruts vers des fichiers `.html` ne fonctionnent pas dans l'app React.

**Screen registry :**
- Chaque fichier `.jsx` dans `src/screens/` (sauf `index.js`) est-il exporte depuis `src/screens/index.js` ?
- Y a-t-il des exports dans `index.js` qui pointent vers des fichiers inexistants ?

**Syntaxe JSX :**
- Les ecrans utilisent-ils `className` (pas `class`) ?
- Les `<label>` utilisent-ils `htmlFor` (pas `for`) ?
- Les attributs `style` sont-ils des objets JS (`style={{ color: 'red' }}`) et pas des strings (`style="color: red"`) ?
- Les elements void (`<img>`, `<input>`, `<br>`, `<hr>`) sont-ils self-closing (`<img />`, `<input />`) ?
- Les fragments sont-ils utilises correctement quand un composant retourne plusieurs elements racine ?

**Classes CSS :**
- Les classes `wf-*` utilisees dans les ecrans existent-elles dans `src/styles/wireframe.css` ?
- Y a-t-il du style inline excessif ou des classes inventees qui devraient etre dans le CSS ?

**Documentation des ecrans (JSDoc) :**
- Chaque ecran a son bloc JSDoc en haut du fichier avec les tags `@screen`, `@description`, `@flow-in`, `@flow-out`, `@persona`, `@data` ?
- Les `data-note`, `data-flow`, `data-action`, `data-transition` sont utilises sur les elements non evidents ?

**Composants partages :**
- Les composants dans `src/components/` sont-ils importes correctement dans les ecrans qui les utilisent ?
- Les props passees aux composants sont-elles coherentes d'un ecran a l'autre ?
- Pas besoin de verifier la coherence du markup entre ecrans : les composants importes se propagent automatiquement.

**Brief vs realite :**
- Ce qui a ete construit correspond a ce qui etait prevu ?
- Y a-t-il des ecrans prevus dans `architecture.md` mais pas encore crees ?

**Qualite du contenu :**
- Le contenu est realiste (pas de placeholder generiques) ?
- Les etats importants sont documentes ou montres (empty, error, loading) ?

**Accessibilite basique :**
- Structure des headings coherente (h1 > h2 > h3, pas de saut) ?
- Les elements interactifs ont des labels lisibles ?
- Les `<input>` ont des `<label>` associes (via `htmlFor` et `id`) ?
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
