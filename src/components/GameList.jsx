import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>{characterName}'s 3DS Games</h2>
      {games.map((game, index) => (
        <div key={index}>
          <h3>{game.gameName}</h3>
          {game.games3DS.map((game3DS, game3DSIndex) => (
            <div key={game3DSIndex}>
              <p>Game Name: {game3DS.gameName}</p>
              {/* Use the actual image URL from the API response */}
              <img src={game3DS.image} alt={game3DS.gameName} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Games3DS;
