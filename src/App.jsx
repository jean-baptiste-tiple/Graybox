import { useState, useEffect, useCallback } from 'react';
import * as screens from './screens';
import './styles/wireframe.css';

function getScreenFromHash() {
  const hash = window.location.hash.slice(1);
  return hash && screens[hash] ? hash : 'ScreenIndex';
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(getScreenFromHash);

  const navigate = useCallback((screen) => {
    setCurrentScreen(screen);
    window.history.pushState({ screen }, '', `#${screen}`);
  }, []);

  useEffect(() => {
    const onPopState = (e) => {
      const screen = e.state?.screen || getScreenFromHash();
      setCurrentScreen(screen);
    };
    window.addEventListener('popstate', onPopState);

    // Set initial state if no hash
    if (!window.location.hash) {
      window.history.replaceState({ screen: 'ScreenIndex' }, '', '#ScreenIndex');
    }

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const Screen = screens[currentScreen];

  if (!Screen) {
    return (
      <div className="wf-page">
        <div className="wf-container">
          <div className="wf-alert wf-alert--error">
            Ecran "{currentScreen}" introuvable.
            <button className="wf-btn wf-btn--sm wf-mt-1" onClick={() => navigate('ScreenIndex')}>
              Retour a l'index
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <Screen navigate={navigate} currentScreen={currentScreen} />;
}
