/**
 * @screen ScreenIndex
 * @description Index visuel de tous les ecrans wireframe du projet.
 * Auto-genere a partir du screen registry.
 */
import * as screens from './index';

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
          <div className="wf-grid--3">
            {screenNames.map(name => (
              <a key={name} href="#"
                onClick={(e) => { e.preventDefault(); navigate(name); }}
                className="wf-card"
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '1rem 1.25rem' }}>
                <h2 className="wf-h4" style={{ marginBottom: '0.25rem' }}>{name}</h2>
                <div className="wf-text--sm wf-text--muted">
                  src/screens/{name}.jsx
                </div>
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
