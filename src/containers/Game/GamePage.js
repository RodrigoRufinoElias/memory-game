import React, { Component } from "react";

import { Board, Card } from "components";

// const GamePage = () => (
//   <Board>
//     <Card name="Test Card" isActive />
//   </Board>
// );

class GamePage extends Component {
  state = { isActive: false };

  handleCardClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <Board>
        <Card
          name="Test Card"
          isActive={this.state.isActive}
          onClick={this.handleCardClick}
        />
      </Board>
    );
  }
}

export default GamePage;
