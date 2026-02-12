/**
 * @component AppLayout
 * @description Layout principal avec sidebar (desktop) et bottom nav (mobile).
 * @usage Wrapper pour tous les ecrans authentifies.
 */
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

export default function AppLayout({ navigate, currentScreen, projectName, children }) {
  return (
    <div className="wf-page">
      <div className="wf-layout-sidebar">
        <Sidebar navigate={navigate} currentScreen={currentScreen} projectName={projectName} />
        <main className="wf-main">
          {children}
        </main>
      </div>
      <BottomNav navigate={navigate} currentScreen={currentScreen} />
    </div>
  );
}
