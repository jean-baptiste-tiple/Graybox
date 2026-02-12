/**
 * @screen ScreenIndex
 * @description Index visuel de tous les ecrans wireframe du projet.
 * Auto-genere a partir du screen registry.
 */
import * as screens from './index';

const DISPLAY_NAMES = {
  TemplateShowcase: 'Templates',
  UIKit: 'UI Kit',
};

function displayName(key) {
  return DISPLAY_NAMES[key] || key.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export default function ScreenIndex({ navigate }) {
  const screenNames = Object.keys(screens).filter(k => k !== 'ScreenIndex');

  return (
    <div className="wf-page" style={{ background: 'var(--wf-bg)' }}>
      <div className="wf-container" style={{ padding: '2rem' }}>
        <h1 className="wf-h1 wf-mb-1">Wireframes</h1>
        <p className="wf-text--muted wf-mb-3">Index des ecrans du projet</p>

        {screenNames.length === 0 ? (
          <div className="wf-empty">
            <div className="wf-empty__icon">&#128203;</div>
            <div className="wf-empty__title">Aucun ecran</div>
            <div className="wf-empty__text">
              Utilisez <code>/wf-screen [nom]</code> pour creer votre premier ecran.
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {screenNames.map(name => (
              <a key={name} href="#"
                onClick={(e) => { e.preventDefault(); navigate(name); }}
                className="wf-card"
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h2 className="wf-h4" style={{ marginBottom: '0.125rem' }}>{displayName(name)}</h2>
                  <div className="wf-text--sm wf-text--muted">src/screens/{name}.jsx</div>
                </div>
                <span className="wf-text--muted" style={{ fontSize: '1.25rem' }}>&#8250;</span>
              </a>
            ))}
          </div>
        )}

        <div className="wf-divider wf-mt-3 wf-mb-2" />
        <p className="wf-text--xs wf-text--muted">
          GRAYBOX Wireframe Designer — <code>npm run dev</code> pour la preview live
        </p>
      </div>
    </div>
  );
}
