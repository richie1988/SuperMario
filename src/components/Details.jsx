import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../style/details.scss';

const SuperheroDetails = () => {
  const { name } = useParams();
  const [superhero, setSuperhero] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuperheroDetails = async () => {
      try {
        const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`);
        if (response.ok) {
          const data = await response.json();
          if (data.amiibo && data.amiibo.length > 0) {
            setSuperhero(data.amiibo[0]);
          } else {
            console.error('Superhero not found');
          }
        } else {
          console.error('Error fetching superhero details');
        }
      } catch (error) {
        console.error('Error fetching superhero details', error);
      }
    };

    fetchSuperheroDetails();
  }, [name]);

  if (!superhero) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className='details-container'>
      <div className='details-card'>
      <section className='details-btn'>
      <button onClick={() => navigate(-1)}><i className='fas fa-arrow-left'></i></button>
      <Link to="/weapons">
        <button><i className='fas  fa-arrow-circle-right'></i></button>
      </Link>
      </section>
      <h2>{superhero.name}</h2>
      <img src={superhero.image} alt={superhero.name} />

      <h3>Details</h3>
      <ul>
        <li>
          <strong>Name:</strong> {superhero.name}
        </li>
        <li>
          <strong>Release Date (AU):</strong> {superhero.release.au}
        </li>
        <li>
          <strong>Release Date (EU):</strong> {superhero.release.eu}
        </li>
        <li>
          <strong>Release Date (JP):</strong> {superhero.release.jp}
        </li>
        <li>
          <strong>Release Date (NA):</strong> {superhero.release.na}
        </li>
        <li>
          <strong>Type:</strong> {superhero.type}
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default SuperheroDetails;
