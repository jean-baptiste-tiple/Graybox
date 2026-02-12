/**
 * @screen TemplateShowcase
 * @description Showcase temporaire de tous les templates disponibles
 */
import { useState } from 'react';

// --- Nav bubble (shared) ---
function NavBubble({ label, onClick }) {
  return (
    <div
      style={{
        position: 'fixed', top: '0.75rem', left: '0.75rem', zIndex: 2000,
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        background: 'var(--wf-text)', color: 'var(--wf-white)',
        borderRadius: '999px', padding: '0.5rem',
        fontSize: '0.75rem', cursor: 'default',
        transition: 'all 0.2s ease',
        maxWidth: '2rem', overflow: 'hidden', whiteSpace: 'nowrap',
        opacity: 0.6,
      }}
      onMouseEnter={e => { e.currentTarget.style.maxWidth = '320px'; e.currentTarget.style.padding = '0.5rem 1rem'; e.currentTarget.style.opacity = '1'; }}
      onMouseLeave={e => { e.currentTarget.style.maxWidth = '2rem'; e.currentTarget.style.padding = '0.5rem'; e.currentTarget.style.opacity = '0.6'; }}
    >
      <span style={{ fontWeight: 700, fontSize: '0.8rem', flexShrink: 0, width: '1rem', textAlign: 'center' }}>i</span>
      <span style={{ flexShrink: 0 }}>{label}</span>
      <button
        onClick={onClick}
        style={{
          flexShrink: 0, background: 'transparent', border: '1px solid var(--wf-white)',
          color: 'var(--wf-white)', padding: '0.2rem 0.625rem', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: '0.7rem', borderRadius: '4px',
        }}
      >
        Index
      </button>
    </div>
  );
}

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
    <aside className="wf-sidebar" data-component="sidebar-app">
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

// --- Auth split layout helper ---
function AuthSplitLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: 1, background: 'var(--wf-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--wf-border)' }}>
        <div style={{ textAlign: 'center', color: 'var(--wf-text-light)', padding: '2rem' }}>
          <div style={{ width: '200px', height: '200px', background: 'var(--wf-border)', borderRadius: 'var(--wf-radius-lg)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.5 }}>
            &#128247;
          </div>
          <div className="wf-text--muted" style={{ fontSize: '0.875rem' }}>Image de marque ou illustration</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--wf-bg)', padding: '2rem' }}>
        {children}
      </div>
    </div>
  );
}

// --- Screen Templates ---

function LoginDemo({ navigate }) {
  return (
    <AuthSplitLayout>
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <div className="wf-mb-4" data-component="app-logo">
          <div className="wf-h2">MonApp</div>
          <p className="wf-text--muted wf-mt-1">Connectez-vous a votre compte</p>
        </div>
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
        <p className="wf-text--sm wf-text--muted wf-mt-4">
          Pas encore de compte ? <a href="#" onClick={e => e.preventDefault()}>Creer un compte</a>
        </p>
      </div>
    </AuthSplitLayout>
  );
}

function SignupDemo() {
  return (
    <AuthSplitLayout>
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <div className="wf-mb-4" data-component="app-logo">
          <div className="wf-h2">MonApp</div>
          <p className="wf-text--muted wf-mt-1">Creez votre compte</p>
        </div>
        <form className="wf-stack--lg" onSubmit={e => e.preventDefault()}>
          <div className="wf-form-group">
            <label className="wf-label" htmlFor="demo-semail">Adresse email</label>
            <input className="wf-input" type="email" id="demo-semail" placeholder="nom@exemple.com" />
          </div>
          <div className="wf-form-group">
            <label className="wf-label" htmlFor="demo-spass">Mot de passe</label>
            <input className="wf-input" type="password" id="demo-spass" placeholder="••••••••" />
          </div>
          <button className="wf-btn wf-btn--primary wf-w-full" data-action="signup">Creer mon compte</button>
        </form>
        <p className="wf-text--sm wf-text--muted wf-mt-4">
          Deja un compte ? <a href="#" onClick={e => e.preventDefault()}>Se connecter</a>
        </p>
      </div>
    </AuthSplitLayout>
  );
}

function ResetPasswordDemo() {
  return (
    <AuthSplitLayout>
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <div className="wf-mb-4" data-component="app-logo">
          <div className="wf-h2">MonApp</div>
        </div>
        <div className="wf-stack--lg">
          <div>
            <h2 className="wf-h3">Mot de passe oublie</h2>
            <p className="wf-text--muted wf-text--sm wf-mt-1">Entrez votre email, nous vous enverrons un lien de reinitialisation.</p>
          </div>
          <form className="wf-stack--lg" onSubmit={e => e.preventDefault()}>
            <div className="wf-form-group">
              <label className="wf-label" htmlFor="demo-reset-email">Adresse email</label>
              <input className="wf-input" type="email" id="demo-reset-email" placeholder="nom@exemple.com" />
            </div>
            <button className="wf-btn wf-btn--primary wf-w-full" data-action="reset-password">Envoyer le lien</button>
          </form>
          <p className="wf-text--sm wf-mt-2">
            <a href="#" onClick={e => e.preventDefault()}>Retour a la connexion</a>
          </p>
        </div>
      </div>
    </AuthSplitLayout>
  );
}

function HomeDemo({ navigate }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="wf-page">
      {/* Mobile topbar with burger */}
      <div className="wf-topbar">
        <span className="wf-topbar__title">MonApp</span>
        <button className="wf-topbar__burger" onClick={() => setDrawerOpen(true)}>
          <span /><span /><span />
        </button>
      </div>
      {/* Mobile drawer */}
      {drawerOpen && (
        <>
          <div className="wf-drawer-overlay" onClick={() => setDrawerOpen(false)} />
          <div className="wf-mobile-drawer">
            <button className="wf-mobile-drawer__close" onClick={() => setDrawerOpen(false)}>&times;</button>
            <div className="wf-mb-3" data-component="app-logo">
              <div className="wf-h3">MonApp</div>
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
          </div>
        </>
      )}
      <div className="wf-layout-sidebar">
        <SidebarDemo navigate={navigate} currentScreen="Home" />
        <main className="wf-main">
          <div className="wf-mb-3">
            <div className="wf-row wf-row--center wf-row--between" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <h1 className="wf-h1" style={{ marginBottom: '0.125rem' }}>Bonjour, Marie</h1>
                <p className="wf-text--muted">Voici votre tableau de bord</p>
              </div>
              <button className="wf-btn wf-btn--primary" data-action="create">+ Nouveau</button>
            </div>
          </div>
          <div className="wf-row wf-mb-3" style={{ gap: '1rem' }}>
            <div className="wf-card wf-col">
              <div className="wf-stat">
                <div className="wf-stat__value">12</div>
                <div className="wf-stat__label">Actifs</div>
              </div>
            </div>
            <div className="wf-card wf-col">
              <div className="wf-stat">
                <div className="wf-stat__value">3</div>
                <div className="wf-stat__label">En attente</div>
              </div>
            </div>
            <div className="wf-card wf-col">
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
                    <div className="wf-text--sm"><strong>Marie Dupont</strong> a modifie &quot;Rapport Q4&quot;</div>
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
        <NavBubble label={active} onClick={() => setActive(null)} />
        <Template navigate={(screen) => alert(`Navigation → ${screen}`)} />
      </div>
    );
  }

  return (
    <div className="wf-page" style={{ background: 'var(--wf-bg)' }}>
      <NavBubble label="Templates" onClick={() => navigate('ScreenIndex')} />
      <div className="wf-container" style={{ padding: '2rem' }}>
        <h1 className="wf-h1 wf-mb-1">Templates GRAYBOX</h1>
        <p className="wf-text--muted wf-mb-3">Cliquez sur un template pour le voir en plein ecran</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {Object.keys(TEMPLATES).map(name => (
            <div key={name} className="wf-card" style={{ cursor: 'pointer', overflow: 'hidden', padding: 0 }} onClick={() => setActive(name)}>
              <div style={{ transform: 'scale(0.45)', transformOrigin: 'top left', height: '280px', width: '222%', pointerEvents: 'none' }}>
                {(() => { const T = TEMPLATES[name]; return <T navigate={() => {}} />; })()}
              </div>
              <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--wf-border)' }}>
                <h2 className="wf-h4">{name}</h2>
                <div className="wf-text--xs wf-text--muted">_templates/screens/{name.replace(' (Dashboard)', '')}.jsx</div>
              </div>
            </div>
          ))}
        </div>

        <div className="wf-divider wf-mt-3 wf-mb-2" />

        <h2 className="wf-h2 wf-mb-2">Composants partages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--wf-border)' }}>
              <span className="wf-h4">Sidebar (desktop)</span>
            </div>
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <aside className="wf-sidebar" style={{ display: 'flex', flexDirection: 'column' }} data-component="sidebar-preview">
                <div className="wf-mb-3"><div className="wf-h3">MonApp</div></div>
                <nav className="wf-sidenav">
                  <a href="#" className="wf-sidenav__item wf-sidenav__item--active" onClick={e => e.preventDefault()}>&#9750; Accueil</a>
                  <a href="#" className="wf-sidenav__item" onClick={e => e.preventDefault()}>&#128196; Projets</a>
                  <a href="#" className="wf-sidenav__item" onClick={e => e.preventDefault()}>&#128100; Equipe</a>
                </nav>
              </aside>
            </div>
          </div>
          <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--wf-border)' }}>
              <span className="wf-h4">Topbar Burger (mobile)</span>
            </div>
            <div>
              <div className="wf-topbar" style={{ display: 'flex', position: 'relative' }}>
                <span className="wf-topbar__title">MonApp</span>
                <button className="wf-topbar__burger" style={{ cursor: 'default' }}>
                  <span /><span /><span />
                </button>
              </div>
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
