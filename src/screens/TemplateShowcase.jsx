/**
 * @screen TemplateShowcase
 * @description Showcase temporaire de tous les templates disponibles
 */
import { useState } from 'react';

// --- Templates inlines (copies des _templates/) ---

// Components
function WfLinkDemo({ to, transition = 'none', navigate, children, className, ...props }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); navigate(to); }}
      data-flow={to} data-transition={transition} className={className} {...props}>
      {children}
    </a>
  );
}

function SidebarDemo({ navigate, currentScreen, projectName = 'MonApp', logoUrl }) {
  return (
    <aside className="wf-sidebar" style={{ display: 'block', position: 'relative', borderRight: '2px dashed var(--wf-border)' }} data-component="sidebar-app">
      <div className="wf-mb-3" data-component="app-logo">
        {logoUrl ? (
          <img src={logoUrl} alt={projectName} style={{ maxHeight: '2rem', maxWidth: '100%' }} />
        ) : (
          <div className="wf-h3">{projectName}</div>
        )}
      </div>
      <nav className="wf-sidenav">
        <a href="#" className="wf-sidenav__item wf-sidenav__item--active" onClick={e => e.preventDefault()}>&#9750; Accueil</a>
        <a href="#" className="wf-sidenav__item" onClick={e => e.preventDefault()}>&#128196; Projets</a>
        <a href="#" className="wf-sidenav__item" onClick={e => e.preventDefault()}>&#128100; Equipe</a>
      </nav>
      <div style={{ flex: 1, minHeight: '2rem' }} />
      <nav className="wf-sidenav" style={{ borderTop: '1px solid var(--wf-border)', paddingTop: '0.75rem' }}>
        <a href="#" className="wf-sidenav__item" onClick={e => e.preventDefault()}>&#9881; Parametres</a>
        <a href="#" className="wf-sidenav__item" onClick={e => e.preventDefault()}>&#9823; Mon compte</a>
      </nav>
    </aside>
  );
}

function BottomNavDemo() {
  return (
    <div className="wf-bottomnav" style={{ display: 'block', position: 'relative' }}>
      <div className="wf-bottomnav__items">
        <a href="#" className="wf-bottomnav__item wf-bottomnav__item--active" onClick={e => e.preventDefault()}>
          <span className="wf-bottomnav__icon">&#9750;</span>Accueil
        </a>
        <a href="#" className="wf-bottomnav__item" onClick={e => e.preventDefault()}>
          <span className="wf-bottomnav__icon">&#128196;</span>Projets
        </a>
        <a href="#" className="wf-bottomnav__item" onClick={e => e.preventDefault()}>
          <span className="wf-bottomnav__icon">&#9881;</span>Params
        </a>
      </div>
    </div>
  );
}

// --- Screen Templates ---

function LoginDemo({ navigate }) {
  return (
    <div className="wf-flex-center" style={{ minHeight: '600px', background: 'var(--wf-bg)' }}>
      <div className="wf-container--narrow" style={{ width: '100%', padding: '1.5rem' }}>
        <div className="wf-text--center wf-mb-3" data-component="app-logo">
          <div className="wf-h2">MonApp</div>
          <p className="wf-text--muted wf-mt-1">Connectez-vous a votre compte</p>
        </div>
        <div className="wf-card" style={{ padding: '1.5rem' }}>
          <form className="wf-stack--lg" onSubmit={e => e.preventDefault()}>
            <div className="wf-form-group">
              <label className="wf-label" htmlFor="demo-email">Adresse email</label>
              <input className="wf-input" type="email" id="demo-email" placeholder="nom@exemple.com" />
            </div>
            <div className="wf-form-group">
              <label className="wf-label" htmlFor="demo-pass">Mot de passe</label>
              <input className="wf-input" type="password" id="demo-pass" placeholder="••••••••" />
            </div>
            <div className="wf-row wf-row--center wf-row--between" style={{ flexDirection: 'row' }}>
              <div className="wf-check">
                <input type="checkbox" id="demo-remember" />
                <label htmlFor="demo-remember">Se souvenir de moi</label>
              </div>
              <a href="#" className="wf-text--sm" onClick={e => e.preventDefault()}>Mot de passe oublie ?</a>
            </div>
            <button className="wf-btn wf-btn--primary wf-w-full" data-action="login">Se connecter</button>
          </form>
        </div>
        <p className="wf-text--center wf-text--sm wf-text--muted wf-mt-2">
          Pas encore de compte ? <a href="#" onClick={e => e.preventDefault()}>Creer un compte</a>
        </p>
      </div>
    </div>
  );
}

function SignupDemo() {
  return (
    <div className="wf-flex-center" style={{ minHeight: '600px', background: 'var(--wf-bg)' }}>
      <div className="wf-container--narrow" style={{ width: '100%', padding: '1.5rem' }}>
        <div className="wf-text--center wf-mb-3" data-component="app-logo">
          <div className="wf-h2">MonApp</div>
          <p className="wf-text--muted wf-mt-1">Creez votre compte</p>
        </div>
        <div className="wf-card" style={{ padding: '1.5rem' }}>
          <form className="wf-stack--lg" onSubmit={e => e.preventDefault()}>
            <div className="wf-row" style={{ flexDirection: 'row' }}>
              <div className="wf-form-group wf-col">
                <label className="wf-label" htmlFor="demo-prenom">Prenom</label>
                <input className="wf-input" id="demo-prenom" placeholder="Marie" />
              </div>
              <div className="wf-form-group wf-col">
                <label className="wf-label" htmlFor="demo-nom">Nom</label>
                <input className="wf-input" id="demo-nom" placeholder="Dupont" />
              </div>
            </div>
            <div className="wf-form-group">
              <label className="wf-label" htmlFor="demo-semail">Adresse email</label>
              <input className="wf-input" type="email" id="demo-semail" placeholder="nom@exemple.com" />
            </div>
            <div className="wf-form-group">
              <label className="wf-label" htmlFor="demo-spass">Mot de passe</label>
              <input className="wf-input" type="password" id="demo-spass" placeholder="••••••••" />
              <span className="wf-help">Minimum 8 caracteres, 1 majuscule, 1 chiffre</span>
            </div>
            <div className="wf-check">
              <input type="checkbox" id="demo-terms" />
              <label htmlFor="demo-terms">J'accepte les conditions d'utilisation</label>
            </div>
            <button className="wf-btn wf-btn--primary wf-w-full" data-action="signup">Creer mon compte</button>
          </form>
        </div>
        <p className="wf-text--center wf-text--sm wf-text--muted wf-mt-2">
          Deja un compte ? <a href="#" onClick={e => e.preventDefault()}>Se connecter</a>
        </p>
      </div>
    </div>
  );
}

function ResetPasswordDemo() {
  return (
    <div className="wf-flex-center" style={{ minHeight: '400px', background: 'var(--wf-bg)' }}>
      <div className="wf-container--narrow" style={{ width: '100%', padding: '1.5rem' }}>
        <div className="wf-text--center wf-mb-3" data-component="app-logo">
          <div className="wf-h2">MonApp</div>
        </div>
        <div className="wf-card" style={{ padding: '1.5rem' }}>
          <div className="wf-stack--lg">
            <div>
              <h2 className="wf-h3">Mot de passe oublie</h2>
              <p className="wf-text--muted wf-text--sm wf-mt-1">Entrez votre email, nous vous enverrons un lien de reinitialisation.</p>
            </div>
            <form className="wf-stack" onSubmit={e => e.preventDefault()}>
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="demo-reset-email">Adresse email</label>
                <input className="wf-input" type="email" id="demo-reset-email" placeholder="nom@exemple.com" />
              </div>
              <button className="wf-btn wf-btn--primary wf-w-full" data-action="reset-password">Envoyer le lien</button>
            </form>
            <p className="wf-text--center wf-text--sm">
              <a href="#" onClick={e => e.preventDefault()}>Retour a la connexion</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeDemo({ navigate }) {
  return (
    <div className="wf-page">
      <div className="wf-layout-sidebar">
        <SidebarDemo navigate={navigate} currentScreen="Home" />
        <main className="wf-main">
          <div className="wf-row wf-row--center wf-row--between wf-mb-3" style={{ flexDirection: 'row' }}>
            <div>
              <h1 className="wf-h1">Bonjour, Marie</h1>
              <p className="wf-text--muted">Voici votre tableau de bord</p>
            </div>
            <button className="wf-btn wf-btn--primary" data-action="create">+ Nouveau</button>
          </div>
          <div className="wf-grid--3 wf-mb-3">
            <div className="wf-card">
              <div className="wf-stat">
                <div className="wf-stat__value">12</div>
                <div className="wf-stat__label">Actifs</div>
              </div>
            </div>
            <div className="wf-card">
              <div className="wf-stat">
                <div className="wf-stat__value">3</div>
                <div className="wf-stat__label">En attente</div>
              </div>
            </div>
            <div className="wf-card">
              <div className="wf-stat">
                <div className="wf-stat__value">89%</div>
                <div className="wf-stat__label">Completion</div>
              </div>
            </div>
          </div>
          <div className="wf-card">
            <div className="wf-card__header">
              <span className="wf-h3">Activite recente</span>
              <button className="wf-btn wf-btn--sm">Voir tout</button>
            </div>
            <div className="wf-card__body" style={{ padding: 0 }}>
              <ul className="wf-list">
                <li className="wf-list__item">
                  <div className="wf-avatar wf-avatar--sm">MD</div>
                  <div style={{ flex: 1 }}>
                    <div className="wf-text--sm"><strong>Marie Dupont</strong> a modifie "Rapport Q4"</div>
                    <div className="wf-text--xs wf-text--muted">Il y a 2 heures</div>
                  </div>
                </li>
                <li className="wf-list__item">
                  <div className="wf-avatar wf-avatar--sm">PL</div>
                  <div style={{ flex: 1 }}>
                    <div className="wf-text--sm"><strong>Pierre Leroy</strong> a ajoute un commentaire</div>
                    <div className="wf-text--xs wf-text--muted">Il y a 5 heures</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <BottomNavDemo />
    </div>
  );
}

// --- Main Showcase ---

const TEMPLATES = {
  'Login': LoginDemo,
  'Signup': SignupDemo,
  'ResetPassword': ResetPasswordDemo,
  'Home (Dashboard)': HomeDemo,
};

export default function TemplateShowcase({ navigate }) {
  const [active, setActive] = useState(null);

  if (active) {
    const Template = TEMPLATES[active];
    return (
      <div>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000, background: 'var(--wf-text)', color: 'var(--wf-white)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <span><strong>Template:</strong> {active}</span>
          <button onClick={() => setActive(null)} style={{ background: 'transparent', border: '1px solid var(--wf-white)', color: 'var(--wf-white)', padding: '0.25rem 0.75rem', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.75rem' }}>
            Retour a l'index
          </button>
        </div>
        <div style={{ paddingTop: '2.5rem' }}>
          <Template navigate={(screen) => alert(`Navigation → ${screen}`)} />
        </div>
      </div>
    );
  }

  return (
    <div className="wf-page" style={{ background: 'var(--wf-bg)' }}>
      <div className="wf-container" style={{ padding: '2rem' }}>
        <h1 className="wf-h1 wf-mb-1">Templates GRAYBOX</h1>
        <p className="wf-text--muted wf-mb-3">Cliquez sur un template pour le voir en plein ecran</p>

        <div className="wf-grid--2">
          {Object.keys(TEMPLATES).map(name => (
            <div key={name} className="wf-card" style={{ cursor: 'pointer', overflow: 'hidden' }} onClick={() => setActive(name)}>
              <div style={{ transform: 'scale(0.45)', transformOrigin: 'top left', height: '280px', width: '222%', pointerEvents: 'none' }}>
                {(() => { const T = TEMPLATES[name]; return <T navigate={() => {}} />; })()}
              </div>
              <div className="wf-card__footer">
                <h2 className="wf-h4">{name}</h2>
                <div className="wf-text--xs wf-text--muted">_templates/screens/{name.replace(' (Dashboard)', '')}.jsx</div>
              </div>
            </div>
          ))}
        </div>

        <div className="wf-divider wf-mt-3 wf-mb-2" />

        <h2 className="wf-h2 wf-mb-2">Composants partages</h2>
        <div className="wf-grid--2">
          <div className="wf-card">
            <div className="wf-card__header"><span className="wf-h4">Sidebar (desktop)</span></div>
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <SidebarDemo navigate={() => {}} currentScreen="Home" />
            </div>
          </div>
          <div className="wf-card">
            <div className="wf-card__header"><span className="wf-h4">Bottom Nav (mobile)</span></div>
            <div style={{ padding: '1rem' }}>
              <BottomNavDemo />
            </div>
          </div>
        </div>

        <div className="wf-divider wf-mt-3 wf-mb-2" />
        <p className="wf-text--xs wf-text--muted">
          GRAYBOX Wireframe Designer — Showcase temporaire
        </p>
      </div>
    </div>
  );
}
