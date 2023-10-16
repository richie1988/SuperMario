import { useState, } from 'react';
import { BrowserRouter as Routes, Route,  useNavigate } from 'react-router-dom';
import Home from './Home';
import SuperheroDetails from './Details';
import Login from './Login';
import Weapons from './Weapons';
import Games3DS from './GameList';
import NoMatch from './NoMatch';



function AppContent() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleForward = () => {
      if (currentPage < 4) {
        setCurrentPage(currentPage + 1);
        navigateToPage(currentPage + 1);
      }
    };
  
    const handleBackward = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        navigateToPage(currentPage - 1);
      }
    };
  
    const navigateToPage = (page) => {
      switch (page) {
        case 0:
          navigate('/login');
          break;
        case 1:
          navigate('/home');
          break;
        case 2:
          navigate('/details/superhero-name'); // Replace with your superhero name
          break;
        case 3:
          navigate('/games3DS');
          break;
        case 4:
          navigate('/weapons');
          break;
        default:
          break;
      }
    };
  
    return (
      <div className="App">
        <header>
          <h1>Superhero App</h1>
          <button onClick={handleBackward} style={{ display: currentPage === 0 ? 'none' : 'block' }}>
            Backward
          </button>
          <button onClick={handleForward} style={{ display: currentPage === 4 ? 'none' : 'block' }}>
            Forward
          </button>
        </header>
        <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:name" element={<SuperheroDetails />} />
          <Route path="/games3DS" element={<Games3DS />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route element={<NoMatch />} />
        </Routes>
        </main>
      </div>
    );
  }

  export default AppContent