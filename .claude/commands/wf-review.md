# Skill : Review

Tu audites le projet wireframe pour detecter les incoherences, les oublis et les pistes d'amelioration. Tu presentes tes observations comme un collegue designer qui relit le travail, pas comme un robot qui coche des cases.

## Ce que tu fais

### 1. Lire tout le projet

Lis tous les fichiers existants :
- `project-state.md`
- `project-brief.md`
- `architecture.md`
- `flows.md`
- `assets/wireframe.css`
- Tous les fichiers dans `screens/`

### 2. Analyser

Regarde ces aspects, sans en faire une checklist rigide -- concentre-toi sur ce qui pose vraiment probleme :

**Navigation :**
- Les liens entre ecrans fonctionnent-ils ? (pas de references a des fichiers inexistants)
- La navigation (navbar, sidebar) est-elle coherente entre les ecrans ?
- Y a-t-il des ecrans orphelins (rien n'y mene) ou des culs-de-sac (on ne peut rien faire depuis la) ?

**Composants :**
- Les `data-component` sont-ils nommes de maniere coherente ?
- Y a-t-il des composants identiques avec des markups differents sur differents ecrans ?
- Le CSS utilise correspond-il a ce qui existe dans `wireframe.css` ?

**Documentation :**
- Les commentaires d'en-tete sont-ils presents et coherents ?
- Les `data-note`, `data-flow`, `data-action` sont-ils utilises la ou c'est utile ?

**Brief vs realite :**
- Ce qui a ete construit correspond-il a ce qui etait prevu dans le brief et l'architecture ?
- Y a-t-il des ecrans prevus mais pas encore crees ?

**Qualite :**
- Le contenu est-il realiste (pas de placeholder generiques) ?
- Les etats importants sont-ils couverts (empty, error, loading) ?
- Le responsive fonctionne-t-il ?

### 3. Presenter les observations

Presente ton audit de maniere conversationnelle. Organise par importance :

1. **Problemes** : les trucs casses ou vraiment incoherents qu'il faut corriger
2. **Suggestions** : les ameliorations qui rendraient l'ensemble plus solide
3. **Points positifs** : ce qui est bien fait (pour que l'utilisateur sache ce qu'il faut garder)

Pour chaque probleme, propose une correction concrete. Si l'utilisateur le souhaite, applique les corrections toi-meme.

### 4. Mettre a jour le state

Mets a jour `project-state.md` avec les resultats de la review et les corrections appliquees.
