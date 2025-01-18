import '@coreui/coreui/dist/css/coreui.min.css';
import { Card } from './Card.jsx';
import { MswTest } from './MswTest.jsx';

function App() {

  return (
    <div className="app">
      <p className="header">Vite React Starter 💯</p>    
      <div className="p-3">
        <Card/>
        <MswTest/>
      </div>
		</div>
  );
}

export default App;
