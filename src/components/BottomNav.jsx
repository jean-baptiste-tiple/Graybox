/**
 * @component BottomNav
 * @description Navigation mobile bottom bar (visible uniquement sur mobile <768px)
 * @usage Utilise dans AppLayout
 */
import WfLink from './WfLink';

export default function BottomNav({ navigate, currentScreen }) {
  return (
    <div className="wf-bottomnav" data-component="bottomnav-app">
      <div className="wf-bottomnav__items">
        <WfLink to="Home" transition="fade" navigate={navigate}
          className={`wf-bottomnav__item${currentScreen === 'Home' ? ' wf-bottomnav__item--active' : ''}`}>
          <span className="wf-bottomnav__icon">&#9750;</span>
          Accueil
        </WfLink>
        {/* Ajouter ici les liens specifiques au projet */}
        <WfLink to="Settings" transition="fade" navigate={navigate}
          className={`wf-bottomnav__item${currentScreen === 'Settings' ? ' wf-bottomnav__item--active' : ''}`}>
          <span className="wf-bottomnav__icon">&#9881;</span>
          Parametres
        </WfLink>
        <WfLink to="Account" transition="fade" navigate={navigate}
          className={`wf-bottomnav__item${currentScreen === 'Account' ? ' wf-bottomnav__item--active' : ''}`}>
          <span className="wf-bottomnav__icon">&#9823;</span>
          Compte
        </WfLink>
      </div>
    </div>
  );
}
