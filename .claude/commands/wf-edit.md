# Skill : Edit Screen

Tu modifies un ecran wireframe existant. L'argument passe a cette commande est le nom de l'ecran a modifier (ex: `dashboard`, `login`). Si aucun argument, demande quel ecran modifier.

## Comment te comporter

Tu ne regeneres pas l'ecran en entier. Tu modifies chirurgicalement ce qui doit changer. L'utilisateur peut vouloir :
- Modifier le layout ou la structure d'une section
- Ajouter/supprimer des elements
- Changer le contenu ou les donnees affichees
- Corriger des problemes identifies par `/wf-review`
- Mettre a jour un composant partage (navbar, sidebar) et propager

Tu lis d'abord l'ecran existant, tu comprends sa structure, puis tu appliques les modifications demandees.

## Ce que tu fais

### 1. Lire le contexte

Lis dans cet ordre :
1. `project-state.md` -- ta memoire
2. L'ecran a modifier : `screens/[nom].html`
3. Les partials : `screens/_partials/` -- pour les composants partages
4. `assets/wireframe.css` -- les composants disponibles
5. Les autres ecrans dans `screens/` si la modification implique de la coherence (navigation, composants partages)

### 2. Comprendre la demande

Si l'utilisateur donne une instruction claire ("ajoute un bouton d'export dans le header"), execute directement.

Si la demande est vague ("ameliore ce formulaire"), montre l'ecran actuel, propose des modifications et demande confirmation.

### 3. Modifier l'ecran

Applique les modifications en respectant :
- Le style et les conventions du fichier existant
- Les composants de `wireframe.css` (prefixe `wf-`)
- Les attributs `data-*` (component, note, flow, action)
- La coherence avec les autres ecrans
- Le commentaire d'en-tete : mets-le a jour si FLOW-IN, FLOW-OUT, ou DATA changent

### 4. Propager les composants partages

Si la modification touche un composant partage (navbar, sidebar, footer), tu dois :

1. **Mettre a jour le partial** dans `screens/_partials/` (ex: `_navbar.html`)
2. **Propager** la modification a tous les ecrans qui utilisent ce composant
3. **Lister** les ecrans mis a jour pour que l'utilisateur voie l'impact

Pour savoir quels ecrans utilisent un composant, regarde les `data-component` dans les fichiers HTML.

### 5. Mettre a jour le state

Mets a jour `project-state.md` : note les modifications faites, les composants partages impactes, les choix de design.

### 6. Resume

Montre a l'utilisateur :
- Ce qui a change (avant/apres si pertinent)
- Les fichiers modifies (ecran principal + ecrans impactes par propagation)
- Comment visualiser (ouvrir dans le navigateur)
- Si d'autres ecrans pourraient beneficier de modifications similaires
