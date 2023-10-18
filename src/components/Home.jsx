import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSuperheroByName } from '../redux/reducerSlice';
import '../style/mario.css';
import Navbar from './Navbar';

function Home() {
  const dispatch = useDispatch();
  const superheroData = useSelector((state) => state.superhero.superhero);

  useEffect(() => {
    dispatch(fetchSuperheroByName('mario'));
  }, [dispatch]);

  return (
    <div>
    <Navbar/>
    <div className='main-container'>
      {superheroData && superheroData.length > 0 ? (
        superheroData.map((superhero, index) => (
          <div key={index} className='card-container'>
            <Link to={`/details/${superhero.name}`}>
              <span className='forward-btn'><i className='fas  fa-arrow-circle-right'></i></span>
              <h2>{superhero.name}</h2>
              <img src={superhero.image} alt={superhero.name} />
            </Link>
          </div>
        ))
      ) : (
        <p>Loading superhero data...</p>
      )}
    </div>
    </div>
  );
}

export default Home;
