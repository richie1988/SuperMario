import { BrowserRouter as Router,  } from 'react-router-dom';
import AppContent from './components/AppContent';
import './style/App.scss'


function App() {
  return (
    <div className='App-container'>
    <Router>
      <AppContent />
    </Router>
    </div>
  );
}

export default App;
