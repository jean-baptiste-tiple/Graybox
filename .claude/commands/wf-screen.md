# Skill : Screen Generator

Tu generes un ecran wireframe en HTML/CSS. L'argument passe a cette commande est le nom de l'ecran (ex: `dashboard`, `login`, `project-detail`).

## Comment te comporter

Tu ne generes pas betement du HTML. Tu reflechis a ce que cet ecran doit contenir, tu proposes, et tu generes.

Si l'architecture existe (`architecture.md`), tu t'en sers. Si elle n'existe pas, tu t'en sors avec ce que tu sais du projet. Si tu ne sais rien, tu poses quelques questions ciblees a l'utilisateur et tu generes.

## Ce que tu fais

### 1. Lire le contexte

Lis ce qui existe, dans cet ordre :
1. `project-state.md` -- ta memoire
2. `project-brief.md` -- le brief
3. `architecture.md` -- l'architecture prevue (s'il existe)
4. `assets/wireframe.css` -- les composants CSS disponibles
5. `screens/_partials/` -- les composants partages (navbar, sidebar, etc.)
6. Les ecrans existants dans `screens/` -- pour la coherence

Ne bloque pas si certains fichiers n'existent pas. Travaille avec ce que tu as.

> **Composants partages** : Si des fichiers existent dans `screens/_partials/` (ex: `_navbar.html`, `_sidebar.html`), utilise-les comme reference pour le markup des composants partages. Si tu crees un ecran avec un composant partage qui n'a pas encore de partial, cree le partial correspondant.

### 2. Concevoir l'ecran

Avant de coder, reflechis :
- Quel est le role de cet ecran ? Qu'est-ce que l'utilisateur vient y faire ?
- Quelles donnees sont affichees ?
- Quelles actions sont disponibles ?
- Depuis quels ecrans on arrive ici ? Vers quels ecrans on peut aller ?
- Quel est le layout adapte (pleine largeur, sidebar, centre, etc.) ?

Si les reponses sont evidentes (login, settings...), genere directement. Si c'est ambigu, demande brievement a l'utilisateur.

### 3. Generer le HTML

Cree `screens/[nom].html` avec :

**Structure obligatoire :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Nom] | [Projet]</title>
  <link rel="stylesheet" href="../assets/wireframe.css">
</head>
<body class="wf-page">
  <!--
    SCREEN: [Nom]
    DESCRIPTION: [Description]
    FLOW-IN: [ecrans sources]
    FLOW-OUT: [ecrans cibles]
    PERSONA: [persona]
    DATA: [entites de donnees]
  -->

  [contenu]

</body>
</html>
```

**Regles de contenu :**

- Utilise les composants de `wireframe.css`. Si un composant manque et qu'il est generique (utile au-dela de cet ecran), ajoute-le a `wireframe.css` avec le prefixe `wf-`, les variables CSS, le responsive et les etats.
- La navigation doit etre coherente avec les autres ecrans existants. Reprends le meme markup si une navbar ou sidebar existe deja.
- Les liens `<a href>` pointent vers les autres fichiers `.html` en chemin relatif.
- Marque les composants reutilisables avec `data-component="nom"`.
- Ajoute `data-note="..."` sur les elements non evidents pour expliquer leur role ou comportement.
- Ajoute `data-flow="ecran.html"` sur les elements de navigation et `data-action="nom"` sur les boutons d'action.
- Utilise des donnees fictives realistes. Pas de lorem ipsum, pas de "Texte ici".
- Assure-toi que ca fonctionne sur les 3 breakpoints. Utilise les classes responsive (`wf-hide-mobile`, `wf-grid`, `wf-row` qui stack, etc.).

**Etats :**
Quand c'est pertinent, montre les differents etats d'un composant. Tu peux soit :
- Utiliser les pseudo-classes CSS (`:hover`, `:disabled`) qui fonctionnent nativement
- Inclure une section "Etats" en bas de page avec les variantes visuelles (par exemple un formulaire avec erreurs a cote du formulaire normal)
- Documenter les etats dans les `data-note` ("Etat vide: affiche un message d'encouragement")

### 4. Mettre a jour l'index

Ajoute ou mets a jour la carte de cet ecran dans `screens/_index.html`. Si `_index.html` n'existe pas, cree-le.

```html
<a href="[nom].html" class="wf-index-card" style="text-decoration:none;color:inherit">
  <div class="wf-index-card__preview">[Nom]</div>
  <div class="wf-index-card__info">
    <div class="wf-index-card__title">[Nom]</div>
    <div class="wf-index-card__meta">[Persona] · [description courte]</div>
  </div>
</a>
```

### 5. Mettre a jour le state

Mets a jour `project-state.md` : note quel ecran a ete cree, les choix faits, les composants ajoutes le cas echeant.

### 6. Creer/mettre a jour les partials

Si l'ecran utilise des composants partages (navbar, sidebar, footer...), verifie que le partial existe dans `screens/_partials/`. S'il n'existe pas, cree-le avec le markup utilise. Le fichier partial ne contient que le fragment HTML du composant (pas de `<!DOCTYPE>`, pas de `<html>`).

Nommage des partials : `_[nom-du-composant].html` (ex: `_navbar.html`, `_sidebar-app.html`).

### 7. Resume

Montre a l'utilisateur ce qui a ete genere :
- Le fichier cree
- Les composants principaux utilises
- Les partials crees ou reutilises
- Les flows (in/out)
- Comment visualiser (ouvrir dans le navigateur)
- Pour modifier cet ecran plus tard : `/wf-edit [nom]`
- Une suggestion pour le prochain ecran a creer, si pertinent
