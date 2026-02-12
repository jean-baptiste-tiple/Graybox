/**
 * @component Sidebar
 * @description Sidebar principale de l'application (desktop uniquement)
 * @usage Utilise dans AppLayout, visible sur desktop, masquee sur mobile
 */
import WfLink from './WfLink';

export default function Sidebar({ navigate, currentScreen, projectName = '[Projet]' }) {
  return (
    <aside className="wf-sidebar wf-hide-mobile" data-component="sidebar-app">
      {/* Logo */}
      <div className="wf-h3 wf-mb-3" data-component="app-logo">{projectName}</div>

      {/* Nav principale */}
      <nav className="wf-sidenav">
        <WfLink to="Home" transition="fade" navigate={navigate}
          className={`wf-sidenav__item${currentScreen === 'Home' ? ' wf-sidenav__item--active' : ''}`}>
          &#9750; Accueil
        </WfLink>
        {/* Ajouter ici les liens specifiques au projet */}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Nav secondaire (bas) */}
      <nav className="wf-sidenav" style={{ borderTop: '1px solid var(--wf-border)', paddingTop: '0.75rem' }}>
        <WfLink to="Settings" transition="fade" navigate={navigate}
          className={`wf-sidenav__item${currentScreen === 'Settings' ? ' wf-sidenav__item--active' : ''}`}>
          &#9881; Parametres
        </WfLink>
        <WfLink to="Account" transition="fade" navigate={navigate}
          className={`wf-sidenav__item${currentScreen === 'Account' ? ' wf-sidenav__item--active' : ''}`}>
          &#9823; Mon compte
        </WfLink>
      </nav>
    </aside>
  );
}
