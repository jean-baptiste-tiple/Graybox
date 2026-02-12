/**
 * @component CenteredLayout
 * @description Layout centre pour les ecrans d'authentification (login, signup, reset-password).
 */
export default function CenteredLayout({ children }) {
  return (
    <div className="wf-flex-center" style={{ minHeight: '100vh', background: 'var(--wf-bg)' }}>
      <div className="wf-container--narrow" style={{ width: '100%', padding: '1.5rem' }}>
        {children}
      </div>
    </div>
  );
}
