# Skill : Screen Generator (JSX/React)

Tu generes un ecran wireframe en JSX/React. L'argument passe a cette commande est le nom de l'ecran en PascalCase (ex: `Dashboard`, `Login`, `ProjectDetail`).

## Comment te comporter

Tu ne generes pas betement du JSX. Tu reflechis a ce que cet ecran doit contenir, tu proposes, et tu generes.

Si l'architecture existe (`architecture.md`), tu t'en sers. Si elle n'existe pas, tu t'en sors avec ce que tu sais du projet. Si tu ne sais rien, tu poses quelques questions ciblees a l'utilisateur et tu generes.

## Ce que tu fais

### 1. Lire le contexte

Lis ce qui existe, dans cet ordre :
1. `project-state.md` -- ta memoire
2. `project-brief.md` -- le brief
3. `architecture.md` -- l'architecture prevue (s'il existe)
4. `src/styles/wireframe.css` -- les composants CSS disponibles
5. `src/components/` -- les composants React partages (AppLayout, CenteredLayout, Sidebar, BottomNav, WfLink)
6. Les ecrans existants dans `src/screens/` -- pour la coherence
7. `_templates/screens/*.jsx` -- les templates de demarrage pour les patterns courants

Ne bloque pas si certains fichiers n'existent pas. Travaille avec ce que tu as.

> **Composants partages** : Les composants partages (Sidebar, BottomNav) sont dans `src/components/`. Ils sont importes via `AppLayout` — il n'y a plus de partials HTML a copier. Utilise simplement `<AppLayout>` pour les ecrans authentifies et `<CenteredLayout>` pour les ecrans d'auth.

### 2. Concevoir l'ecran

Avant de coder, reflechis :
- Quel est le role de cet ecran ? Qu'est-ce que l'utilisateur vient y faire ?
- Quelles donnees sont affichees ?
- Quelles actions sont disponibles ?
- Depuis quels ecrans on arrive ici ? Vers quels ecrans on peut aller ?
- Quel layout adapte : `AppLayout` (ecran authentifie avec sidebar/bottom nav) ou `CenteredLayout` (auth, onboarding) ?

Si les reponses sont evidentes (login, settings...), genere directement. Si c'est ambigu, demande brievement a l'utilisateur.

### 3. Generer le JSX

Cree `src/screens/[Nom].jsx` avec :

**Structure obligatoire :**
```jsx
/**
 * @screen [Nom]
 * @description [Description]
 * @flow-in [ecrans sources]
 * @flow-out [ecrans cibles]
 * @persona [persona]
 * @data [entites de donnees]
 */
import AppLayout from '../components/AppLayout';
// ou CenteredLayout pour les ecrans d'auth :
// import CenteredLayout from '../components/CenteredLayout';
import WfLink from '../components/WfLink';

export default function [Nom]({ navigate, currentScreen }) {
  return (
    <AppLayout navigate={navigate} currentScreen={currentScreen}>
      {/* contenu de l'ecran */}
    </AppLayout>
  );
}
```

### Regles de conversion HTML → JSX

Respecte ces regles systematiquement lors de la generation :

| HTML | JSX |
|------|-----|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `style="color: red; font-size: 14px"` | `style={{ color: 'red', fontSize: '14px' }}` |
| `<input>`, `<br>`, `<hr>` | `<input />`, `<br />`, `<hr />` (self-closing) |
| `value="..."` sur les inputs | `defaultValue="..."` |
| `<!-- commentaire -->` | `{/* commentaire */}` |
| `<a href="ecran.html" data-flow="ecran.html">` | `<WfLink to="NomEcran" navigate={navigate}>` |

**A ne PAS inclure** (gere par index.html + App.jsx) :
- Pas de `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
- Pas de `<link>` vers wireframe.css (importe globalement)

### Regles de contenu

- Utilise les classes CSS de `wireframe.css` (prefixe `wf-`). Si un composant manque et qu'il est generique, ajoute-le a `src/styles/wireframe.css` avec le prefixe `wf-`, les variables CSS, le responsive et les etats.
- **Navigation** : Utilise `<WfLink to="NomEcran" navigate={navigate}>` pour la navigation inter-ecrans. Pour les boutons qui naviguent, utilise `onClick={() => navigate('NomEcran')}`.
- **Layouts** :
  - `AppLayout` : Ecrans authentifies (dashboard, settings, listes, details). Fournit automatiquement sidebar (desktop) et bottom nav (mobile). Props : `navigate`, `currentScreen`, optionnel `projectName`.
  - `CenteredLayout` : Ecrans d'auth et onboarding (login, signup, reset-password). Centre le contenu. Pas de sidebar/bottomnav.
- Marque les composants reutilisables avec `data-component="nom"`.
- Ajoute `data-note="..."` sur les elements non evidents pour expliquer leur role ou comportement.
- Ajoute `data-action="nom"` sur les boutons d'action (create, delete, submit, etc.).
- Ajoute `data-transition="type"` sur les WfLink pour decrire la transition visuelle (slide-left, slide-right, slide-up, fade, modal).
- Utilise des donnees fictives realistes. Pas de lorem ipsum, pas de "Texte ici".
- Assure-toi que ca fonctionne sur les breakpoints. Utilise les classes responsive (`wf-hide-mobile`, `wf-hide-tablet`, `wf-grid`, `wf-row` qui stack, etc.).
- Les formulaires utilisent `onSubmit={(e) => e.preventDefault()}` pour eviter le rechargement.

**Etats alternatifs :**
Documente les etats (vide, erreur, loading) en commentaires JSX :
```jsx
{/* ETAT: Vide (decommenter pour montrer)
<div className="wf-empty">
  <div className="wf-empty__icon">&#128203;</div>
  <div className="wf-empty__title">Rien ici</div>
</div>
*/}
```

### 4. Enregistrer l'ecran dans le registry

Ajoute l'export dans `src/screens/index.js` :
```js
export { default as [Nom] } from './[Nom]';
```

Ce fichier est le barrel qui alimente App.jsx et ScreenIndex. Sans cette ligne, l'ecran n'apparaitra pas dans la navigation.

### 5. Mettre a jour le state

Mets a jour `project-state.md` : note quel ecran a ete cree, les choix faits, les composants ajoutes le cas echeant.

### 6. Verifier les composants partages

Si l'ecran necessite de nouveaux liens dans la sidebar ou la bottom nav :
- Modifie `src/components/Sidebar.jsx` pour ajouter le lien
- Modifie `src/components/BottomNav.jsx` pour ajouter le lien
- Ces modifications se propagent automatiquement a tous les ecrans qui utilisent `AppLayout`

Si tu crees un nouveau composant reutilisable (pas un ecran), place-le dans `src/components/[Nom].jsx`.

### 7. Resume

Montre a l'utilisateur ce qui a ete genere :
- Le fichier cree (`src/screens/[Nom].jsx`)
- L'export ajoute dans `src/screens/index.js`
- Le layout utilise (AppLayout ou CenteredLayout)
- Les composants partages crees ou mis a jour (Sidebar, BottomNav)
- Les flows (in/out)
- Comment visualiser : `npm run dev` puis naviguer vers l'ecran
- Pour modifier cet ecran plus tard : `/wf-edit [Nom]`
- Une suggestion pour le prochain ecran a creer, si pertinent

## Exemple complet : ecran avec AppLayout

```jsx
/**
 * @screen Dashboard
 * @description Tableau de bord principal avec metriques et activite recente
 * @flow-in Login (succes), Toute page (via sidebar)
 * @flow-out ProjectDetail (clic projet), Settings (sidebar)
 * @persona Utilisateur connecte
 * @data Projects, Activity
 */
import AppLayout from '../components/AppLayout';
import WfLink from '../components/WfLink';

export default function Dashboard({ navigate, currentScreen }) {
  return (
    <AppLayout navigate={navigate} currentScreen={currentScreen}>
      <div className="wf-row wf-row--center wf-row--between wf-mb-3">
        <h1 className="wf-h1">Tableau de bord</h1>
        <button className="wf-btn wf-btn--primary" data-action="create"
          onClick={() => navigate('ProjectCreate')}>
          + Nouveau projet
        </button>
      </div>

      <div className="wf-grid--3 wf-mb-3">
        <div className="wf-card">
          <div className="wf-stat">
            <div className="wf-stat__value">8</div>
            <div className="wf-stat__label">Projets actifs</div>
          </div>
        </div>
      </div>

      {/* ETAT: Vide (decommenter pour montrer)
      <div className="wf-empty">
        <div className="wf-empty__icon">&#128203;</div>
        <div className="wf-empty__title">Aucun projet</div>
        <div className="wf-empty__text">Creez votre premier projet pour commencer.</div>
      </div>
      */}
    </AppLayout>
  );
}
```

## Exemple complet : ecran avec CenteredLayout

```jsx
/**
 * @screen Login
 * @description Page de connexion
 * @flow-in Acces direct, Deconnexion
 * @flow-out Home (succes), Signup (lien), ResetPassword (lien)
 * @persona Tous les utilisateurs
 * @data Credentials (email, mot de passe)
 */
import CenteredLayout from '../components/CenteredLayout';
import WfLink from '../components/WfLink';

export default function Login({ navigate }) {
  return (
    <CenteredLayout>
      <div className="wf-text--center wf-mb-3">
        <div className="wf-h2" data-component="app-logo">[Projet]</div>
      </div>

      <div className="wf-card" style={{ padding: '1.5rem' }}>
        <form className="wf-stack--lg" onSubmit={(e) => e.preventDefault()}>
          <div className="wf-form-group">
            <label className="wf-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="wf-input"
              placeholder="vous@exemple.com" defaultValue="" />
          </div>
          <button type="button" className="wf-btn wf-btn--primary wf-btn--lg wf-w-full"
            data-action="login" onClick={() => navigate('Home')}>
            Se connecter
          </button>
        </form>
      </div>

      <p className="wf-text--center wf-text--sm wf-text--muted wf-mt-2">
        Pas encore de compte ?{' '}
        <WfLink to="Signup" transition="slide-left" navigate={navigate}>Creer un compte</WfLink>
      </p>
    </CenteredLayout>
  );
}
```
