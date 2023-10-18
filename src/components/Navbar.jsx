import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/navbar.scss';

export default function Navbar() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const handleForward = () => {
    if (currentPage < 4) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigateToPage(nextPage);
    }
  };

  const handleBackward = () => {
    if (currentPage > 0) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      navigateToPage(previousPage);
    }
  };

  const navigateToPage = (page) => {
    switch (page) {
      case 0:
      case 1:
        navigate('/home');
        break;
      case 2:
        navigate('/details/superhero-name'); // Replace 'superhero-name' with the actual superhero name
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
    <div>
      <header className='navbar'>
        <section className='btn-section'>
          <button onClick={handleBackward} style={{ display: currentPage === 0 ? 'none' : 'block' }}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button onClick={handleForward} style={{ display: currentPage === 4 ? 'none' : 'none' }}>
            <i className='fas fa-arrow-right'></i>
          </button>
          <Link to="/home" className='text-header'>
            <i className="fa-solid fa-house"></i>
            <h1>Super Mario</h1>
          </Link>
        </section>
        <Link to="/">
          <button className='logout-btn'>Log out</button>
        </Link>
      </header>
    </div>
  );
}
