/**
 * @screen ResetPassword
 * @description Permet de demander un lien de reinitialisation du mot de passe
 * @flow-in Login (lien "Mot de passe oublie")
 * @flow-out Login (retour), Confirmation (email envoye)
 * @persona Tous les utilisateurs
 * @data Email
 */
import CenteredLayout from '../components/CenteredLayout';
import WfLink from '../components/WfLink';

export default function ResetPassword({ navigate }) {
  return (
    <CenteredLayout>
      {/* Logo / Nom de l'app */}
      <div className="wf-text--center wf-mb-3">
        <div className="wf-h2" data-component="app-logo">[Nom du Projet]</div>
      </div>

      {/* Etat par defaut : formulaire */}
      <div className="wf-card" style={{ padding: '1.5rem' }}>
        <div className="wf-stack--lg">
          <div>
            <h1 className="wf-h3">Mot de passe oublie</h1>
            <p className="wf-text--sm wf-text--muted wf-mt-1">Entrez votre adresse email. Vous recevrez un lien pour reinitialiser votre mot de passe.</p>
          </div>

          <form className="wf-stack--lg" onSubmit={(e) => e.preventDefault()}>
            <div className="wf-form-group">
              <label className="wf-label wf-label--required" htmlFor="email">Adresse email</label>
              <input type="email" id="email" className="wf-input" placeholder="vous@exemple.com" />
            </div>

            <button type="submit" className="wf-btn wf-btn--primary wf-btn--lg wf-w-full" data-action="reset-password">Envoyer le lien</button>
          </form>
        </div>
      </div>

      {/* ETAT: Confirmation (email envoye)
      <div className="wf-card" style={{ padding: '1.5rem' }}>
        <div className="wf-stack--lg">
          <div className="wf-text--center">
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>&#9993;</div>
            <h1 className="wf-h3">Email envoye</h1>
            <p className="wf-text--sm wf-text--muted wf-mt-1">
              Un lien de reinitialisation a ete envoye a <strong>marie.dupont@email.com</strong>.
              Verifiez vos spams si vous ne le voyez pas.
            </p>
          </div>
          <button type="button" className="wf-btn wf-w-full" data-action="resend">Renvoyer l'email</button>
        </div>
      </div>
      */}

      {/* Retour a la connexion */}
      <p className="wf-text--center wf-text--sm wf-text--muted wf-mt-2">
        <WfLink to="Login" transition="slide-right" navigate={navigate}>&larr; Retour a la connexion</WfLink>
      </p>
    </CenteredLayout>
  );
}
