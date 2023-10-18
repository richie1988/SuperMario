import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Games3DS() {
  const [games, setGames] = useState([]);
  const characterName = "Zelda";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.amiiboapi.com/api/amiibo/?character=${characterName}&showusage`);
        const data = response.data.amiibo;
        setGames(data);
      } catch (error) {
        console.error('Error fetching games data', error);
      }
    };

    fetchData();
  }, [characterName]);

  return (
    <div className='main-games-container'>
      <Navbar />
    <div className='games-card-container'>
      <div className='games-btn'>
    <Link to="/weapons">
      <i className='fas fa-arrow-left'></i>
      </Link>
      <h2>{characterName}&apos, 3DS Games</h2>
      </div>
      {games.map((game, index) => (
        <div key={index} className='games-card'>
          <h3>{game.gameName}</h3>
          {game.games3DS.map((game3DS, game3DSIndex) => (
            <div key={game3DSIndex}>
              <p>Game Name: {game3DS.gameName}</p>
              <img src={game3DS.image} alt={game3DS.gameName} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
}

export default Games3DS;
