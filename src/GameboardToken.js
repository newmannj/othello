import React from 'react';

const GameboardToken = (props) => {
    const style = () => {
        if(props.token === 'l') {
            return { backgroundColor: "white"}
        } else if(props.token === 'd') {
            return {backgroundColor: "black"}
        } else {
            return {display: "none"}
        }
    }
    return (
        <div className="board-token" style={style()}></div>
    )
}

export default GameboardToken;