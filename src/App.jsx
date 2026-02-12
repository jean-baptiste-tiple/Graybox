import { useState } from 'react';
import * as screens from './screens';
import './styles/wireframe.css';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('ScreenIndex');

  const Screen = screens[currentScreen];

  if (!Screen) {
    return (
      <div className="wf-page">
        <div className="wf-container">
          <div className="wf-alert wf-alert--error">
            Ecran "{currentScreen}" introuvable.
            <button className="wf-btn wf-btn--sm wf-mt-1" onClick={() => setCurrentScreen('ScreenIndex')}>
              Retour a l'index
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <Screen navigate={setCurrentScreen} currentScreen={currentScreen} />;
}
