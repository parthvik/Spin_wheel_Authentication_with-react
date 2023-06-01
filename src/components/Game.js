import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [reward, setReward] = useState('');
  const [playCount, setPlayCount] = useState(0);

  const startGame = () => {
    if (playCount >= 3) {
      return; // Limit the game to be played three times
    }

    // Start spinning animation
    setGameStarted(true);

    // Simulate spinning for 3 seconds
    setTimeout(() => {
      // Generate a random reward
      const rewards = ['Free Chips', '10% off on Amazon', '100 off on Myntra'];
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

      // Stop spinning animation and set the reward
      setReward(randomReward);
      setGameStarted(false);

      // Increment play count
      setPlayCount(playCount + 1);
    }, 3000);
  };

  const resetGame = () => {
    setGameStarted(false);
    setReward('');
  };

  return (
    <div className="game-container">
      {!gameStarted && playCount < 3 && (
        <div className="game-start">
          <h2>Spin the Wheel</h2>
          <button onClick={startGame}>Start</button>
        </div>
      )}
      {gameStarted && (
        <div className="game-result spinning">
          <div className="wheel"></div>
        </div>
      )}
      {!gameStarted && reward !== '' && (
        <div className="game-result">
          <h2>Congratulations!</h2>
          <p>You won:</p>
          <p className="reward">{reward}</p>
          <button onClick={resetGame}>Re-spin</button>
        </div>
      )}
      {playCount >= 3 && (
        <div className="game-finished">
          <h2>Game Over</h2>
          <p>You have reached the maximum number of plays.</p>
        </div>
      )}
    </div>
  );
};

export default Game;
