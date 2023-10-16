import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSuperheroByName } from '../redux/reducerSlice';

function Home() {
  const dispatch = useDispatch();
  const superheroData = useSelector((state) => state.superhero.superhero);

  useEffect(() => {
    // Fetch superhero details when the component mounts
    dispatch(fetchSuperheroByName('mario'));
  }, [dispatch]);

  return (
    <div>
      <Link to="/login"> {/* Add a Link to the Login page */}
        <button>Go to Login</button>
      </Link>
      <h2>Superhero Details</h2>
      {superheroData && superheroData.length > 0 ? (
        superheroData.map((superhero, index) => (
          <div key={index}>
            <h3>Name: {superhero.name}</h3>
            <img src={superhero.image} alt={superhero.name} />
            <Link to={`/details/${superhero.name}`}>
              <button>Details</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading superhero data...</p>
      )}
    </div>
  );
}

export default Home;
