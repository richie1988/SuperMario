import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const characterName = "Zelda";

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
    <Link to="/games3DS">Go to 3DS Games</Link>
      <h2>{characterName} Weapons</h2>
      {weapons.map((weapon, index) => (
        <div key={index}>
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
  );
}

export default Weapons;
