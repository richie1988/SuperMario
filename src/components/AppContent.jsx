import { Routes, Route,} from 'react-router-dom';
import Home from './Home';
import SuperheroDetails from './Details';
import Login from './Login';
import Weapons from './Weapons';
import Games3DS from './GameList';
import NoMatch from './NoMatch';
import '../style/App.scss'





function AppContent() {
  
    return (
      <div>
      <div className="App">
        <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:name" element={<SuperheroDetails />} />
          <Route path="/games3DS" element={<Games3DS />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route element={<NoMatch />} />
        </Routes>
        </main>
      </div>
      </div>
    );
  }

  export default AppContent