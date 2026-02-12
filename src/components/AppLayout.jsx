/**
 * @component AppLayout
 * @description Layout principal avec sidebar (desktop) et burger menu (mobile).
 * @usage Wrapper pour tous les ecrans authentifies.
 */
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function AppLayout({ navigate, currentScreen, projectName = '[Projet]', logoUrl, children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="wf-page">
      {/* Mobile topbar */}
      <div className="wf-topbar">
        <span className="wf-topbar__title">{projectName}</span>
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
              {logoUrl ? (
                <img src={logoUrl} alt={projectName} style={{ maxHeight: '2rem', maxWidth: '100%' }} />
              ) : (
                <div className="wf-h3">{projectName}</div>
              )}
            </div>
            <nav className="wf-sidenav">
              <a href="#" className={`wf-sidenav__item${currentScreen === 'Home' ? ' wf-sidenav__item--active' : ''}`}
                onClick={e => { e.preventDefault(); setDrawerOpen(false); navigate('Home'); }}>
                &#9750; Accueil
              </a>
              {/* Ajouter ici les liens specifiques au projet */}
            </nav>
            <div style={{ flex: 1, minHeight: '2rem' }} />
            <nav className="wf-sidenav" style={{ borderTop: '1px solid var(--wf-border)', paddingTop: '0.75rem' }}>
              <a href="#" className={`wf-sidenav__item${currentScreen === 'Settings' ? ' wf-sidenav__item--active' : ''}`}
                onClick={e => { e.preventDefault(); setDrawerOpen(false); navigate('Settings'); }}>
                &#9881; Parametres
              </a>
              <a href="#" className={`wf-sidenav__item${currentScreen === 'Account' ? ' wf-sidenav__item--active' : ''}`}
                onClick={e => { e.preventDefault(); setDrawerOpen(false); navigate('Account'); }}>
                &#9823; Mon compte
              </a>
            </nav>
          </div>
        </>
      )}

      {/* Desktop layout */}
      <div className="wf-layout-sidebar">
        <Sidebar navigate={navigate} currentScreen={currentScreen} projectName={projectName} logoUrl={logoUrl} />
        <main className="wf-main">
          {children}
        </main>
      </div>
    </div>
  );
}
