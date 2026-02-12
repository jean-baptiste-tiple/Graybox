/**
 * @screen Login
 * @description Page de connexion a l'application
 * @flow-in Acces direct (URL), Deconnexion, Inscription (lien)
 * @flow-out Home (succes), Signup (lien), ResetPassword (lien)
 * @persona Tous les utilisateurs
 * @data Credentials (email, mot de passe)
 */
import CenteredLayout from '../components/CenteredLayout';
import WfLink from '../components/WfLink';

export default function Login({ navigate }) {
  return (
    <CenteredLayout>
      {/* Logo / Nom de l'app */}
      <div className="wf-text--center wf-mb-3">
        <div className="wf-h2" data-component="app-logo">[Nom du Projet]</div>
        <p className="wf-text--muted wf-mt-1">Connectez-vous a votre compte</p>
      </div>

      {/* Formulaire de connexion */}
      <div className="wf-card" style={{ padding: '1.5rem' }}>
        <form className="wf-stack--lg" onSubmit={(e) => e.preventDefault()}>
          <div className="wf-form-group">
            <label className="wf-label" htmlFor="email">Adresse email</label>
            <input type="email" id="email" className="wf-input" placeholder="vous@exemple.com" defaultValue="marie.dupont@email.com" />
          </div>

          <div className="wf-form-group">
            <label className="wf-label" htmlFor="password">Mot de passe</label>
            <input type="password" id="password" className="wf-input" placeholder="Votre mot de passe" />
            <WfLink to="ResetPassword" transition="fade" navigate={navigate}
              className="wf-help" style={{ alignSelf: 'flex-end' }}>
              Mot de passe oublie ?
            </WfLink>
          </div>

          <button type="button" className="wf-btn wf-btn--primary wf-btn--lg wf-w-full"
            data-action="login"
            onClick={() => navigate('Home')}>
            Se connecter
          </button>
        </form>

        {/* ETAT: Erreur de connexion
        <div className="wf-alert wf-alert--error wf-mt-2">
          Email ou mot de passe incorrect. Veuillez reessayer.
        </div>
        */}
      </div>

      {/* Lien vers inscription */}
      <p className="wf-text--center wf-text--sm wf-text--muted wf-mt-2">
        Pas encore de compte ?{' '}
        <WfLink to="Signup" transition="slide-left" navigate={navigate}>Creer un compte</WfLink>
      </p>
    </CenteredLayout>
  );
}
