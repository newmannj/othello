import React from 'react';
import GameboardToken from './GameboardToken';

const PlayerInfo = (props) => {
    return (
        <div className="column side">
            <h1>{props.playerName}</h1>
            <GameboardToken token={props.token}/>
        </div>
    )
}

export default PlayerInfo;