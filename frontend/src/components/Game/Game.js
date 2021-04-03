import React from 'react';

import PlayerInfo from './PlayerInfo'
import Gameboard from './Gameboard'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <PlayerInfo 
                playerName = "Player 1"
                token="d"
            />
            <Gameboard/>
            <PlayerInfo
                playerName = "Player 2"
                token="l"
            />
        </div>)
    }
}

export default Game;