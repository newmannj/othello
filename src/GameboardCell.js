import React from 'react';

import GameboardToken from './GameboardToken';


const GameboardCell = (props) => {
    return (
        <td className='board-cell' onClick={() => {props.onclick(props.xpos, props.ypos)}}>
            <GameboardToken 
                token={props.token}/>
        </td>
    );
}

export default GameboardCell;