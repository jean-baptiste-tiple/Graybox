/**
 * @screen Signup
 * @description Page de creation de compte
 * @flow-in Login (lien)
 * @flow-out Home (succes), Login (lien)
 * @persona Nouveaux utilisateurs
 * @data User (nom, email, mot de passe)
 */
import CenteredLayout from '../components/CenteredLayout';
import WfLink from '../components/WfLink';

export default function Signup({ navigate, projectName = '[Projet]', logoUrl }) {
  return (
    <CenteredLayout>
      {/* Logo / Nom de l'app */}
      <div className="wf-text--center wf-mb-3" data-component="app-logo">
        {logoUrl ? (
          <img src={logoUrl} alt={projectName} style={{ maxHeight: '3rem', margin: '0 auto' }} />
        ) : (
          <div className="wf-h2">{projectName}</div>
        )}
        <p className="wf-text--muted wf-mt-1">Creez votre compte</p>
      </div>

      {/* Formulaire d'inscription */}
      <div className="wf-card" style={{ padding: '1.5rem' }}>
        <form className="wf-stack--lg" onSubmit={(e) => e.preventDefault()}>
          <div className="wf-row">
            <div className="wf-col">
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="firstname">Prenom</label>
                <input type="text" id="firstname" className="wf-input" placeholder="Marie" />
              </div>
            </div>
            <div className="wf-col">
              <div className="wf-form-group">
                <label className="wf-label" htmlFor="lastname">Nom</label>
                <input type="text" id="lastname" className="wf-input" placeholder="Dupont" />
              </div>
            </div>
          </div>

          <div className="wf-form-group">
            <label className="wf-label wf-label--required" htmlFor="email">Adresse email</label>
            <input type="email" id="email" className="wf-input" placeholder="vous@exemple.com" />
          </div>

          <div className="wf-form-group">
            <label className="wf-label wf-label--required" htmlFor="password">Mot de passe</label>
            <input type="password" id="password" className="wf-input" placeholder="8 caracteres minimum" />
            <span className="wf-help">Au moins 8 caracteres, une majuscule et un chiffre</span>
          </div>

          <div className="wf-form-group">
            <label className="wf-label wf-label--required" htmlFor="password-confirm">Confirmer le mot de passe</label>
            <input type="password" id="password-confirm" className="wf-input" placeholder="Retapez votre mot de passe" />
          </div>

          <div className="wf-check">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">J'accepte les <a href="#">conditions d'utilisation</a></label>
          </div>

          <button type="button" className="wf-btn wf-btn--primary wf-btn--lg wf-w-full"
            data-action="signup"
            onClick={() => navigate('Home')}>
            Creer mon compte
          </button>
        </form>

        {/* ETAT: Erreur d'inscription
        <div className="wf-alert wf-alert--error wf-mt-2">
          Cette adresse email est deja utilisee.
        </div>
        */}
      </div>

      {/* Lien vers connexion */}
      <p className="wf-text--center wf-text--sm wf-text--muted wf-mt-2">
        Deja un compte ?{' '}
        <WfLink to="Login" transition="slide-right" navigate={navigate}>Se connecter</WfLink>
      </p>
    </CenteredLayout>
  );
}
