import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../style/App.scss';

function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const characterName = "Mario";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.amiiboapi.com/api/amiibo/?character=${characterName}&showusage`);
        const data = response.data.amiibo;
        setWeapons(data);
      } catch (error) {
        console.error('Error fetching weapons data', error);
      }
    };

    fetchData();
  }, [characterName]);

  return (
    <div>
      <Navbar/>
    <div className='main-weapons-container'>
      {weapons.map((weapon, index) => (
    <div key={index} className='weapons-container'>
    <section className='weapons-btn'>
    <Link to="/home">
      <i className='fas fa-arrow-left'></i>
    </Link>
    <Link to="/games3DS">Go to 3DS Games</Link>
    </section>
    <h2>{characterName} Weapons</h2>
          <h3>{weapon.gameName}</h3>
          {weapon.games3DS.map((game, gameIndex) => (
            <div key={gameIndex}>
              {game.amiiboUsage.map((usage, usageIndex) => (
                <p key={usageIndex}>{usage.Usage}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Weapons;
