/**
 * @screen UIKit
 * @description UI Kit — Catalogue visuel de tous les composants wireframe disponibles.
 * Utile pour iterer sur le design system (/wf-design-tokens).
 */
import { useState } from 'react';

/* ── Nav bubble ── */
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

/* ── Helper: section wrapper ── */
function Section({ title, children }) {
  return (
    <section className="wf-mb-4">
      <h2 className="wf-h2 wf-mb-2">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="wf-mb-3">
      <h3 className="wf-h4 wf-mb-1" style={{ color: 'var(--wf-text-muted)' }}>{title}</h3>
      {children}
    </div>
  );
}

/* ── Main component ── */
export default function UIKit({ navigate }) {
  const [accordionOpen, setAccordionOpen] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [toggleOn, setToggleOn] = useState(false);
  const [chipActive, setChipActive] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="wf-page" style={{ background: 'var(--wf-bg)' }}>
      <NavBubble label="UI Kit" onClick={() => navigate('ScreenIndex')} />
      <div className="wf-container" style={{ padding: '2rem', maxWidth: '960px' }}>

        <div className="wf-mb-4">
          <h1 className="wf-h1">UI Kit</h1>
          <p className="wf-text--muted">Tous les composants du wireframe kit GRAYBOX</p>
        </div>

        {/* ════════════════════════════════════════ */}
        {/* TYPOGRAPHY                               */}
        {/* ════════════════════════════════════════ */}
        <Section title="Typographie">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <div className="wf-stack--lg">
              <div className="wf-h1">Heading 1 — wf-h1</div>
              <div className="wf-h2">Heading 2 — wf-h2</div>
              <div className="wf-h3">Heading 3 — wf-h3</div>
              <div className="wf-h4">Heading 4 — wf-h4</div>
              <div className="wf-divider" />
              <p className="wf-text">Texte normal — wf-text</p>
              <p className="wf-text--lg">Texte large — wf-text--lg</p>
              <p className="wf-text--sm">Texte small — wf-text--sm</p>
              <p className="wf-text--xs">Texte extra-small — wf-text--xs</p>
              <p className="wf-text--muted">Texte muted — wf-text--muted</p>
              <p className="wf-text--light">Texte light — wf-text--light</p>
              <p className="wf-text--mono">Texte mono — wf-text--mono</p>
              <p className="wf-text--bold">Texte bold — wf-text--bold</p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* BUTTONS                                  */}
        {/* ════════════════════════════════════════ */}
        <Section title="Boutons">
          <SubSection title="Variantes">
            <div className="wf-card" style={{ padding: '2rem' }}>
              <div className="wf-row" style={{ gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="wf-btn">Default</button>
                <button className="wf-btn wf-btn--primary">Primary</button>
                <button className="wf-btn wf-btn--danger">Danger</button>
                <button className="wf-btn wf-btn--ghost">Ghost</button>
              </div>
            </div>
          </SubSection>
          <SubSection title="Tailles">
            <div className="wf-card" style={{ padding: '2rem' }}>
              <div className="wf-row" style={{ gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="wf-btn wf-btn--sm">Small</button>
                <button className="wf-btn">Default</button>
                <button className="wf-btn wf-btn--lg">Large</button>
              </div>
            </div>
          </SubSection>
          <SubSection title="Full-width &amp; Groupe">
            <div className="wf-card" style={{ padding: '2rem' }}>
              <div className="wf-stack">
                <button className="wf-btn wf-btn--primary wf-w-full">Bouton full-width</button>
                <div className="wf-btn-group">
                  <button className="wf-btn">Jour</button>
                  <button className="wf-btn wf-btn--primary">Semaine</button>
                  <button className="wf-btn">Mois</button>
                </div>
              </div>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* FORMS                                    */}
        {/* ════════════════════════════════════════ */}
        <Section title="Formulaires">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <form className="wf-stack--lg" onSubmit={e => e.preventDefault()}>
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="kit-text">Champ texte</label>
                <input className="wf-input" id="kit-text" placeholder="Placeholder..." />
              </div>
              <div className="wf-form-group">
                <label className="wf-label wf-label--required" htmlFor="kit-email">Email (requis)</label>
                <input className="wf-input" type="email" id="kit-email" placeholder="nom@exemple.com" />
              </div>
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="kit-error">Champ en erreur</label>
                <input className="wf-input wf-input--error" id="kit-error" defaultValue="valeur invalide" />
                <span className="wf-help wf-help--error">Ce champ est requis</span>
              </div>
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="kit-select">Select</label>
                <select className="wf-select" id="kit-select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="kit-textarea">Textarea</label>
                <textarea className="wf-textarea" id="kit-textarea" rows="3" placeholder="Contenu long..." />
              </div>
              <div className="wf-form-group">
                <label className="wf-label">Recherche</label>
                <div className="wf-search">
                  <input className="wf-input" placeholder="Rechercher..." />
                </div>
              </div>
              <div className="wf-form-group">
                <label className="wf-label">Select searchable</label>
                <div className="wf-select-search">
                  <input className="wf-select-search__input" placeholder="Rechercher un pays..." defaultValue="France" />
                  <div className="wf-select-search__dropdown">
                    <div className="wf-select-search__option wf-select-search__option--selected">France</div>
                    <div className="wf-select-search__option">Allemagne</div>
                    <div className="wf-select-search__option">Espagne</div>
                    <div className="wf-select-search__option">Italie</div>
                    <div className="wf-select-search__option">Royaume-Uni</div>
                  </div>
                </div>
              </div>
              <div className="wf-form-group">
                <label className="wf-label">Multi-select</label>
                <div className="wf-select-multi">
                  <span className="wf-select-multi__tag">React <span className="wf-select-multi__tag-remove">&times;</span></span>
                  <span className="wf-select-multi__tag">TypeScript <span className="wf-select-multi__tag-remove">&times;</span></span>
                  <span className="wf-select-multi__tag">Vite <span className="wf-select-multi__tag-remove">&times;</span></span>
                </div>
              </div>
              <div className="wf-form-group">
                <label className="wf-label">Multi-select searchable</label>
                <div className="wf-select-search">
                  <div className="wf-select-multi" style={{ borderRadius: 'var(--wf-radius) var(--wf-radius) 0 0' }}>
                    <span className="wf-select-multi__tag">Design <span className="wf-select-multi__tag-remove">&times;</span></span>
                    <span className="wf-select-multi__tag">Frontend <span className="wf-select-multi__tag-remove">&times;</span></span>
                    <input style={{ border: 'none', outline: 'none', flex: 1, minWidth: '80px', fontSize: '0.875rem', padding: '0.2rem 0.375rem', fontFamily: 'inherit' }} placeholder="Ajouter..." />
                  </div>
                  <div className="wf-select-search__dropdown" style={{ marginTop: 0, borderTop: 'none', borderRadius: '0 0 var(--wf-radius) var(--wf-radius)' }}>
                    <div className="wf-select-search__option">Backend</div>
                    <div className="wf-select-search__option">DevOps</div>
                    <div className="wf-select-search__option">QA</div>
                  </div>
                </div>
              </div>
              <div className="wf-row" style={{ gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div className="wf-check">
                  <input type="checkbox" id="kit-check" defaultChecked />
                  <label htmlFor="kit-check">Checkbox</label>
                </div>
                <div className="wf-check">
                  <input type="checkbox" id="kit-check2" />
                  <label htmlFor="kit-check2">Autre option</label>
                </div>
                <div
                  className={`wf-toggle${toggleOn ? ' wf-toggle--on' : ''}`}
                  onClick={() => setToggleOn(!toggleOn)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="wf-toggle__track">
                    <div className="wf-toggle__thumb" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* CARDS & SURFACES                         */}
        {/* ════════════════════════════════════════ */}
        <Section title="Cards &amp; Surfaces">
          <div className="wf-row" style={{ gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="wf-card wf-col">
              <div className="wf-card__header">
                <span className="wf-h4">Card avec header</span>
                <button className="wf-btn wf-btn--sm">Action</button>
              </div>
              <div className="wf-card__body">
                <p className="wf-text--sm">Contenu du body de la card. Les cards sont les conteneurs principaux du wireframe kit.</p>
              </div>
              <div className="wf-card__footer">
                <span className="wf-text--xs wf-text--muted">Footer de la card</span>
              </div>
            </div>
            <div className="wf-card wf-col" style={{ padding: '1.5rem' }}>
              <p className="wf-text--sm">Card simple avec padding. Pas de header/body/footer, juste du contenu libre.</p>
            </div>
          </div>
          <div className="wf-mt-2">
            <div className="wf-panel" style={{ padding: '1.25rem' }}>
              <p className="wf-text--sm wf-text--muted">Panel — surface secondaire plus subtile que la card.</p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* BADGES, TAGS, CHIPS                      */}
        {/* ════════════════════════════════════════ */}
        <Section title="Badges, Tags, Chips">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <SubSection title="Badges">
              <div className="wf-row" style={{ gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="wf-badge">Default</span>
                <span className="wf-badge wf-badge--filled">Filled</span>
                <span className="wf-badge" style={{ borderColor: 'var(--wf-success)', color: 'var(--wf-success)' }}>Success</span>
                <span className="wf-badge" style={{ borderColor: 'var(--wf-warning)', color: 'var(--wf-warning)' }}>Warning</span>
                <span className="wf-badge" style={{ borderColor: 'var(--wf-danger)', color: 'var(--wf-danger)' }}>Danger</span>
                <span className="wf-badge" style={{ borderColor: 'var(--wf-info)', color: 'var(--wf-info)' }}>Info</span>
              </div>
            </SubSection>
            <SubSection title="Tags">
              <div className="wf-row" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="wf-tag">React</span>
                <span className="wf-tag">Design</span>
                <span className="wf-tag">Wireframe</span>
              </div>
            </SubSection>
            <SubSection title="Chips (selectable)">
              <div className="wf-row" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                {['Tous', 'Actifs', 'Archives', 'Brouillons'].map((label, i) => (
                  <span key={label}
                    className={`wf-chip${chipActive === i ? ' wf-chip--active' : ''}`}
                    onClick={() => setChipActive(i)}
                    style={{ cursor: 'pointer' }}>
                    {label}
                  </span>
                ))}
              </div>
            </SubSection>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* AVATARS                                  */}
        {/* ════════════════════════════════════════ */}
        <Section title="Avatars">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <div className="wf-row" style={{ gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="wf-avatar wf-avatar--sm">SM</div>
              <div className="wf-avatar">MD</div>
              <div className="wf-avatar wf-avatar--lg">LG</div>
              <div style={{ width: '1px', height: '2rem', background: 'var(--wf-border)' }} />
              <div className="wf-avatar-group">
                <div className="wf-avatar wf-avatar--sm">A</div>
                <div className="wf-avatar wf-avatar--sm">B</div>
                <div className="wf-avatar wf-avatar--sm">C</div>
                <div className="wf-avatar wf-avatar--sm">+2</div>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* STATS                                    */}
        {/* ════════════════════════════════════════ */}
        <Section title="Stats">
          <div className="wf-row" style={{ gap: '1rem' }}>
            <div className="wf-card wf-col">
              <div className="wf-stat">
                <div className="wf-stat__value">1,234</div>
                <div className="wf-stat__label">Utilisateurs</div>
              </div>
            </div>
            <div className="wf-card wf-col">
              <div className="wf-stat">
                <div className="wf-stat__value">89%</div>
                <div className="wf-stat__label">Completion</div>
              </div>
            </div>
            <div className="wf-card wf-col">
              <div className="wf-stat">
                <div className="wf-stat__value">42</div>
                <div className="wf-stat__label">Projets actifs</div>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* ALERTS                                   */}
        {/* ════════════════════════════════════════ */}
        <Section title="Alertes">
          <div className="wf-stack">
            <div className="wf-alert wf-alert--info">Information : Votre compte sera verifie sous 24h.</div>
            <div className="wf-alert wf-alert--success">Succes : Votre profil a ete mis a jour.</div>
            <div className="wf-alert wf-alert--warning">Attention : Votre abonnement expire dans 3 jours.</div>
            <div className="wf-alert wf-alert--error">Erreur : Impossible de sauvegarder les modifications.</div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* TABS                                     */}
        {/* ════════════════════════════════════════ */}
        <Section title="Onglets (Tabs)">
          <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="wf-tabs">
              {['General', 'Securite', 'Notifications'].map((label, i) => (
                <button key={label}
                  className={`wf-tabs__tab${activeTab === i ? ' wf-tabs__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}>
                  {label}
                </button>
              ))}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p className="wf-text--sm wf-text--muted">
                Contenu de l'onglet "{['General', 'Securite', 'Notifications'][activeTab]}"
              </p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* LIST                                     */}
        {/* ════════════════════════════════════════ */}
        <Section title="Listes">
          <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
            <ul className="wf-list">
              <li className="wf-list__item">
                <div className="wf-avatar wf-avatar--sm">AB</div>
                <div style={{ flex: 1 }}>
                  <div className="wf-text--sm"><strong>Alice Bernard</strong></div>
                  <div className="wf-text--xs wf-text--muted">alice@exemple.com</div>
                </div>
                <span className="wf-badge" style={{ borderColor: 'var(--wf-success)', color: 'var(--wf-success)' }}>Actif</span>
              </li>
              <li className="wf-list__item">
                <div className="wf-avatar wf-avatar--sm">CD</div>
                <div style={{ flex: 1 }}>
                  <div className="wf-text--sm"><strong>Charles Durand</strong></div>
                  <div className="wf-text--xs wf-text--muted">charles@exemple.com</div>
                </div>
                <span className="wf-badge">Invite</span>
              </li>
              <li className="wf-list__item">
                <div className="wf-avatar wf-avatar--sm">EF</div>
                <div style={{ flex: 1 }}>
                  <div className="wf-text--sm"><strong>Emma Faure</strong></div>
                  <div className="wf-text--xs wf-text--muted">emma@exemple.com</div>
                </div>
                <span className="wf-badge" style={{ borderColor: 'var(--wf-warning)', color: 'var(--wf-warning)' }}>En attente</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* TABLE                                    */}
        {/* ════════════════════════════════════════ */}
        <Section title="Tableau">
          <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="wf-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Role</th>
                  <th>Statut</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marie Dupont</td>
                  <td>Admin</td>
                  <td><span className="wf-badge wf-badge--filled">Actif</span></td>
                  <td>12 fev 2026</td>
                </tr>
                <tr>
                  <td>Pierre Leroy</td>
                  <td>Editeur</td>
                  <td><span className="wf-badge">Invite</span></td>
                  <td>10 fev 2026</td>
                </tr>
                <tr>
                  <td>Sophie Chen</td>
                  <td>Lecteur</td>
                  <td><span className="wf-badge" style={{ borderColor: 'var(--wf-warning)', color: 'var(--wf-warning)' }}>En attente</span></td>
                  <td>8 fev 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* BREADCRUMBS & PAGINATION                 */}
        {/* ════════════════════════════════════════ */}
        <Section title="Breadcrumbs &amp; Pagination">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <SubSection title="Breadcrumbs">
              <nav className="wf-breadcrumbs">
                <a href="#" onClick={e => e.preventDefault()}>Accueil</a>
                <a href="#" onClick={e => e.preventDefault()}>Projets</a>
                <span>MonApp</span>
              </nav>
            </SubSection>
            <SubSection title="Pagination">
              <nav className="wf-pagination">
                <a href="#" className="wf-pagination__item" onClick={e => e.preventDefault()}>&laquo;</a>
                <a href="#" className="wf-pagination__item" onClick={e => e.preventDefault()}>1</a>
                <a href="#" className="wf-pagination__item wf-pagination__item--active" onClick={e => e.preventDefault()}>2</a>
                <a href="#" className="wf-pagination__item" onClick={e => e.preventDefault()}>3</a>
                <a href="#" className="wf-pagination__item" onClick={e => e.preventDefault()}>&raquo;</a>
              </nav>
            </SubSection>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* PROGRESS & LOADING                       */}
        {/* ════════════════════════════════════════ */}
        <Section title="Progression &amp; Chargement">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <SubSection title="Progress bar">
              <div className="wf-stack">
                <div className="wf-progress">
                  <div className="wf-progress__bar" style={{ width: '25%' }} />
                </div>
                <div className="wf-progress">
                  <div className="wf-progress__bar" style={{ width: '65%' }} />
                </div>
                <div className="wf-progress">
                  <div className="wf-progress__bar" style={{ width: '100%' }} />
                </div>
              </div>
            </SubSection>
            <SubSection title="Skeleton loading">
              <div className="wf-stack--sm">
                <div className="wf-row" style={{ gap: '1rem', alignItems: 'center' }}>
                  <div className="wf-skeleton wf-skeleton--avatar" />
                  <div style={{ flex: 1 }}>
                    <div className="wf-skeleton wf-skeleton--title wf-mb-1" />
                    <div className="wf-skeleton wf-skeleton--text" />
                  </div>
                </div>
                <div className="wf-skeleton wf-skeleton--text" />
                <div className="wf-skeleton wf-skeleton--text" style={{ width: '80%' }} />
              </div>
            </SubSection>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* STEPS                                    */}
        {/* ════════════════════════════════════════ */}
        <Section title="Steps">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <div className="wf-steps">
              <div className="wf-steps__step wf-steps__step--done">Informations</div>
              <div className="wf-steps__step wf-steps__step--active">Paiement</div>
              <div className="wf-steps__step">Confirmation</div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* ACCORDION                                */}
        {/* ════════════════════════════════════════ */}
        <Section title="Accordeon">
          <div className="wf-accordion">
            {['Comment fonctionne l\'abonnement ?', 'Puis-je annuler a tout moment ?', 'Quels moyens de paiement acceptez-vous ?'].map((q, i) => (
              <div key={i} className="wf-accordion__item">
                <div className="wf-accordion__header" onClick={() => setAccordionOpen(accordionOpen === i ? -1 : i)}>
                  <span>{q}</span>
                  <span style={{ color: 'var(--wf-text-muted)', fontSize: '0.75rem' }}>{accordionOpen === i ? '▲' : '▼'}</span>
                </div>
                {accordionOpen === i && (
                  <div className="wf-accordion__body">
                    <p className="wf-text--sm">Reponse a la question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* TIMELINE                                 */}
        {/* ════════════════════════════════════════ */}
        <Section title="Timeline">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <div className="wf-timeline">
              <div className="wf-timeline__item wf-timeline__item--active">
                <div className="wf-timeline__date">Aujourd'hui</div>
                <div className="wf-timeline__content">
                  <div className="wf-text--sm"><strong>Deploiement v2.0</strong></div>
                  <div className="wf-text--xs wf-text--muted">Nouvelle version mise en production</div>
                </div>
              </div>
              <div className="wf-timeline__item">
                <div className="wf-timeline__date">Hier</div>
                <div className="wf-timeline__content">
                  <div className="wf-text--sm"><strong>Tests valides</strong></div>
                  <div className="wf-text--xs wf-text--muted">Tous les tests passent en staging</div>
                </div>
              </div>
              <div className="wf-timeline__item">
                <div className="wf-timeline__date">10 fev</div>
                <div className="wf-timeline__content">
                  <div className="wf-text--sm"><strong>Debut du sprint</strong></div>
                  <div className="wf-text--xs wf-text--muted">Planning et attribution des taches</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* KANBAN                                   */}
        {/* ════════════════════════════════════════ */}
        <Section title="Kanban">
          <div className="wf-kanban">
            <div className="wf-kanban__col">
              <div className="wf-kanban__col-header">A faire <span className="wf-badge wf-badge--filled">3</span></div>
              <div className="wf-kanban__col-body">
                <div className="wf-kanban__card">
                  <div className="wf-text--sm"><strong>Refonte page profil</strong></div>
                  <div className="wf-text--xs wf-text--muted">Design</div>
                </div>
                <div className="wf-kanban__card">
                  <div className="wf-text--sm"><strong>API notifications</strong></div>
                  <div className="wf-text--xs wf-text--muted">Backend</div>
                </div>
              </div>
            </div>
            <div className="wf-kanban__col">
              <div className="wf-kanban__col-header">En cours <span className="wf-badge wf-badge--filled">1</span></div>
              <div className="wf-kanban__col-body">
                <div className="wf-kanban__card">
                  <div className="wf-text--sm"><strong>Dashboard analytics</strong></div>
                  <div className="wf-text--xs wf-text--muted">Frontend</div>
                </div>
              </div>
            </div>
            <div className="wf-kanban__col">
              <div className="wf-kanban__col-header">Termine <span className="wf-badge wf-badge--filled">2</span></div>
              <div className="wf-kanban__col-body">
                <div className="wf-kanban__card">
                  <div className="wf-text--sm"><strong>Auth OAuth</strong></div>
                  <div className="wf-text--xs wf-text--muted">Backend</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* UPLOAD & MEDIA                           */}
        {/* ════════════════════════════════════════ */}
        <Section title="Upload &amp; Media">
          <div className="wf-row" style={{ gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="wf-col">
              <SubSection title="Zone d'upload">
                <div className="wf-upload-zone">
                  <div className="wf-upload-zone__icon">&#128228;</div>
                  <div className="wf-upload-zone__text">Glissez un fichier ici</div>
                  <div className="wf-upload-zone__hint">PNG, JPG jusqu'a 5 Mo</div>
                </div>
              </SubSection>
            </div>
            <div className="wf-col">
              <SubSection title="Image placeholders">
                <div className="wf-row" style={{ gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <div className="wf-img-placeholder wf-img-placeholder--sm">SM</div>
                  <div className="wf-img-placeholder">Default</div>
                  <div className="wf-img-placeholder wf-img-placeholder--square">Square</div>
                </div>
              </SubSection>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* EMPTY STATE                              */}
        {/* ════════════════════════════════════════ */}
        <Section title="Etat vide">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <div className="wf-empty">
              <div className="wf-empty__icon">&#128203;</div>
              <div className="wf-empty__title">Aucun projet</div>
              <div className="wf-empty__text">Vous n'avez pas encore cree de projet. Commencez par en creer un.</div>
              <button className="wf-btn wf-btn--primary">+ Nouveau projet</button>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* MODAL (static preview)                   */}
        {/* ════════════════════════════════════════ */}
        <Section title="Modal (apercu statique)">
          <div style={{ position: 'relative', background: 'var(--wf-surface)', padding: '3rem', borderRadius: 'var(--wf-radius-lg)', border: '1px solid var(--wf-border)' }}>
            <div className="wf-modal" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', margin: '0 auto' }}>
              <div className="wf-modal__header">
                <span className="wf-h3">Confirmer la suppression</span>
                <button style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', color: 'var(--wf-text-muted)', padding: '0.25rem', lineHeight: 1 }}>&times;</button>
              </div>
              <div className="wf-modal__body">
                <p className="wf-text--sm">Etes-vous sur de vouloir supprimer cet element ? Cette action est irreversible.</p>
              </div>
              <div className="wf-modal__footer">
                <button className="wf-btn">Annuler</button>
                <button className="wf-btn wf-btn--danger">Supprimer</button>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* TOAST & SNACKBAR (static)                */}
        {/* ════════════════════════════════════════ */}
        <Section title="Toast &amp; Snackbar">
          <div className="wf-row" style={{ gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="wf-col">
              <SubSection title="Toast">
                <div className="wf-toast" style={{ position: 'relative', top: 'auto', right: 'auto' }}>
                  Modifications sauvegardees avec succes.
                </div>
              </SubSection>
            </div>
            <div className="wf-col">
              <SubSection title="Snackbar">
                <div className="wf-snackbar" style={{ position: 'relative', bottom: 'auto', left: 'auto', transform: 'none' }}>
                  3 elements supprimes.
                  <button className="wf-snackbar__action">Annuler</button>
                </div>
              </SubSection>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* DROPDOWN (static)                        */}
        {/* ════════════════════════════════════════ */}
        <Section title="Dropdown">
          <div className="wf-card" style={{ padding: '2rem' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button className="wf-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Options {dropdownOpen ? '▲' : '▼'}
              </button>
              {dropdownOpen && (
                <div className="wf-dropdown" style={{ position: 'absolute', top: '100%', left: 0, marginTop: '0.25rem', display: 'block', zIndex: 10 }}>
                  <a href="#" className="wf-dropdown__item" onClick={e => { e.preventDefault(); setDropdownOpen(false); }}>Modifier</a>
                  <a href="#" className="wf-dropdown__item" onClick={e => { e.preventDefault(); setDropdownOpen(false); }}>Dupliquer</a>
                  <a href="#" className="wf-dropdown__item" onClick={e => { e.preventDefault(); setDropdownOpen(false); }}>Archiver</a>
                  <div className="wf-divider" style={{ margin: '0.25rem 0' }} />
                  <a href="#" className="wf-dropdown__item" onClick={e => { e.preventDefault(); setDropdownOpen(false); }} style={{ color: 'var(--wf-danger)' }}>Supprimer</a>
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* BOTTOM SHEET (static)                    */}
        {/* ════════════════════════════════════════ */}
        <Section title="Bottom Sheet (mobile)">
          <div style={{ maxWidth: '380px' }}>
            <div className="wf-bottom-sheet" style={{ position: 'relative', bottom: 'auto', left: 'auto', right: 'auto', maxHeight: 'none', borderRadius: 'var(--wf-radius-lg) var(--wf-radius-lg) 0 0' }}>
              <div className="wf-bottom-sheet__handle" />
              <div className="wf-bottom-sheet__header">
                <span className="wf-h4">Partager</span>
                <button style={{ background: 'none', border: 'none', fontSize: '1.125rem', cursor: 'pointer', color: 'var(--wf-text-muted)', lineHeight: 1 }}>&times;</button>
              </div>
              <div className="wf-bottom-sheet__body">
                <div className="wf-stack--sm">
                  <div style={{ padding: '0.625rem 0', fontSize: '0.875rem', borderBottom: '1px solid var(--wf-border)' }}>Copier le lien</div>
                  <div style={{ padding: '0.625rem 0', fontSize: '0.875rem', borderBottom: '1px solid var(--wf-border)' }}>Envoyer par email</div>
                  <div style={{ padding: '0.625rem 0', fontSize: '0.875rem' }}>Partager sur Slack</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        {/* SPOTLIGHT (static)                       */}
        {/* ════════════════════════════════════════ */}
        <Section title="Spotlight / Command palette">
          <div style={{ position: 'relative', background: 'var(--wf-surface)', padding: '3rem', borderRadius: 'var(--wf-radius-lg)', border: '1px solid var(--wf-border)' }}>
            <div className="wf-spotlight" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', margin: '0 auto' }}>
              <input className="wf-spotlight__input" placeholder="Rechercher une commande..." />
              <div className="wf-spotlight__results">
                <a href="#" className="wf-spotlight__item" onClick={e => e.preventDefault()}>Creer un projet</a>
                <a href="#" className="wf-spotlight__item" onClick={e => e.preventDefault()}>Inviter un membre</a>
                <a href="#" className="wf-spotlight__item" onClick={e => e.preventDefault()}>Parametres du compte</a>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ */}
        <div className="wf-divider wf-mt-3 wf-mb-2" />
        <p className="wf-text--xs wf-text--muted">
          GRAYBOX Wireframe Designer — UI Kit (~170 composants)
        </p>

      </div>
    </div>
  );
}
