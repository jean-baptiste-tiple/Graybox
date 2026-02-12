# Skill : Edit Screen (JSX/React)

Tu modifies un ecran wireframe existant. L'argument passe a cette commande est le nom de l'ecran en PascalCase (ex: `Dashboard`, `Login`). Si aucun argument, demande quel ecran modifier.

## Comment te comporter

Tu ne regeneres pas l'ecran en entier. Tu modifies chirurgicalement ce qui doit changer. L'utilisateur peut vouloir :
- Modifier le layout ou la structure d'une section
- Ajouter/supprimer des elements
- Changer le contenu ou les donnees affichees
- Corriger des problemes identifies par `/wf-review`
- Mettre a jour un composant partage (Sidebar, BottomNav)

Tu lis d'abord l'ecran existant, tu comprends sa structure, puis tu appliques les modifications demandees.

## Ce que tu fais

### 1. Lire le contexte

Lis dans cet ordre :
1. `project-state.md` -- ta memoire
2. L'ecran a modifier : `src/screens/[Nom].jsx`
3. `src/components/` -- les composants partages (si la modification les concerne)
4. `src/styles/wireframe.css` -- les composants CSS disponibles
5. Les autres ecrans dans `src/screens/` si la modification implique de la coherence

### 2. Comprendre la demande

Si l'utilisateur donne une instruction claire ("ajoute un bouton d'export dans le header"), execute directement.

Si la demande est vague ("ameliore ce formulaire"), montre l'ecran actuel, propose des modifications et demande confirmation.

### 3. Modifier l'ecran

Applique les modifications en respectant :
- La syntaxe JSX (className, htmlFor, style objects, self-closing tags, defaultValue)
- Les composants de `wireframe.css` (prefixe `wf-`)
- Les attributs `data-*` (component, note, flow, action, transition)
- La coherence avec les autres ecrans
- Le bloc JSDoc d'en-tete : mets-le a jour si @flow-in, @flow-out, ou @data changent
- La navigation via `<WfLink to="NomEcran" navigate={navigate}>` ou `onClick={() => navigate('NomEcran')}`

### Rappel des regles JSX

| HTML | JSX |
|------|-----|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `style="color: red; font-size: 14px"` | `style={{ color: 'red', fontSize: '14px' }}` |
| `<input>`, `<br>`, `<hr>` | `<input />`, `<br />`, `<hr />` (self-closing) |
| `value="..."` sur les inputs | `defaultValue="..."` |
| `<!-- commentaire -->` | `{/* commentaire */}` |
| `<a href="ecran.html" data-flow="ecran.html">` | `<WfLink to="NomEcran" navigate={navigate}>` |

### 4. Composants partages : propagation automatique

**Grande simplification par rapport a l'ancien systeme HTML :**

Les composants partages (Sidebar, BottomNav) sont des composants React dans `src/components/`. Comme tous les ecrans les importent via `<AppLayout>`, toute modification dans le fichier source se propage automatiquement a tous les ecrans. **Il n'y a plus de propagation manuelle a faire.**

**Quand l'utilisateur demande de modifier la sidebar ou la bottom nav :**
1. Modifie directement `src/components/Sidebar.jsx` et/ou `src/components/BottomNav.jsx`
2. C'est tout. Tous les ecrans qui utilisent `<AppLayout>` heritent automatiquement du changement.

**Seul cas ou il faut toucher les ecrans :** si la modification du composant partage change ses **props** (ajout d'un nouveau prop requis). Dans ce cas :
1. Modifie le composant dans `src/components/`
2. Modifie `AppLayout.jsx` si c'est un wrapper (pour passer le nouveau prop)
3. Si le nouveau prop doit venir de l'ecran, mets a jour les ecrans qui utilisent AppLayout

**Exemples :**
- "Ajoute un lien Projets dans la sidebar" → Modifie `src/components/Sidebar.jsx` uniquement. Fini.
- "Change l'icone de Settings dans la bottom nav" → Modifie `src/components/BottomNav.jsx` uniquement. Fini.
- "Ajoute le nom de l'utilisateur dans la sidebar" → Si le nom vient d'un prop, modifie Sidebar.jsx, puis AppLayout.jsx pour accepter et passer le prop, puis les ecrans pour fournir le prop.

### 5. Mettre a jour le state

Mets a jour `project-state.md` : note les modifications faites, les composants partages impactes, les choix de design.

### 6. Resume

Montre a l'utilisateur :
- Ce qui a change (avant/apres si pertinent)
- Les fichiers modifies :
  - `src/screens/[Nom].jsx` pour les ecrans
  - `src/components/[Nom].jsx` pour les composants partages
- Si un composant partage a ete modifie, confirmer que la propagation est automatique
- Comment visualiser : `npm run dev` puis naviguer vers l'ecran
- Si d'autres ecrans pourraient beneficier de modifications similaires
