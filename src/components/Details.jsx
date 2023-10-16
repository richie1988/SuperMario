import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

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
      <Link to="/weapons">
        <button>Weapons</button>
      </Link>
      <button onClick={() => navigate(-1)}>Back</button>
      {/* ... rest of your component ... */}
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
  );
};

export default SuperheroDetails;
