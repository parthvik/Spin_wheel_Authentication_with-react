import React from 'react';
import Game from './Game';

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: false
    };
  }

  handleStartGame = () => {
    this.setState({ startGame: true });
  };

  render() {
    const { startGame } = this.state;
    const { name } = this.props;

    return (
      <div>
        <h1>Welcome {name}</h1>
        <button onClick={this.handleStartGame}>Start Game</button>
        {startGame && <Game />}
      </div>
    );
  }
}

export default Success;
