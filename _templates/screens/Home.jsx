/**
 * @screen Home
 * @description Page d'accueil de l'application authentifiee
 * @flow-in Login (succes), Signup (succes), Toute page (via sidebar)
 * @flow-out Settings, Account, autres ecrans via sidebar
 * @persona Utilisateur connecte
 * @data Resume d'activite
 */
import AppLayout from '../components/AppLayout';

export default function Home({ navigate, currentScreen }) {
  return (
    <AppLayout navigate={navigate} currentScreen={currentScreen}>
      {/* En-tete mobile (visible uniquement sur mobile) */}
      <div className="wf-row wf-row--center wf-row--between wf-mb-2 wf-hide-tablet"
        data-note="Visible sur mobile uniquement">
        <div className="wf-h3" data-component="app-logo">[Projet]</div>
        <div className="wf-avatar" onClick={() => navigate('Account')}>MD</div>
      </div>

      {/* Titre de la page */}
      <div className="wf-row wf-row--center wf-row--between wf-mb-3">
        <div>
          <h1 className="wf-h1">Bonjour, Marie</h1>
          <p className="wf-text--muted">Voici votre tableau de bord</p>
        </div>
        <div className="wf-row wf-row--center" style={{ gap: '0.5rem' }}>
          <button className="wf-btn wf-btn--primary" data-action="create"
            data-note="Action principale — adapter au projet">
            + Nouveau
          </button>
        </div>
      </div>

      {/* Stats rapides */}
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

      {/* Activite recente */}
      <div className="wf-card">
        <div className="wf-card__header">
          <span className="wf-h3">Activite recente</span>
          <button className="wf-btn wf-btn--sm" onClick={() => navigate('ActivityList')}>Voir tout</button>
        </div>
        <div className="wf-card__body" style={{ padding: 0 }}>
          <ul className="wf-list">
            <li className="wf-list__item">
              <div className="wf-avatar wf-avatar--sm">MD</div>
              <div style={{ flex: 1 }}>
                <div className="wf-text--sm"><strong>Marie Dupont</strong> a modifie le document "Rapport Q4"</div>
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
            <li className="wf-list__item">
              <div className="wf-avatar wf-avatar--sm">SC</div>
              <div style={{ flex: 1 }}>
                <div className="wf-text--sm"><strong>Sophie Chen</strong> a cree un nouveau projet</div>
                <div className="wf-text--xs wf-text--muted">Hier</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ETAT: Vide (decommenter pour montrer)
      <div className="wf-empty">
        <div className="wf-empty__icon">&#128203;</div>
        <div className="wf-empty__title">Rien ici pour le moment</div>
        <div className="wf-empty__text">Commencez par creer votre premier element pour voir l'activite ici.</div>
        <div className="wf-empty__action">
          <button className="wf-btn wf-btn--primary" data-action="create">+ Nouveau</button>
        </div>
      </div>
      */}
    </AppLayout>
  );
}
