import React, {useState} from 'react';

import styles from './CreateGame.module.css';

const CreateGame = () => {
    const [gameCode, setGameCode] = useState(null);
    
    const fetchGameCode = () => {
       setGameCode("NEAFKS"); 
    }
    
    const gameCodeText = gameCode ? gameCode : "Click the button above to get a game code!";
    return (
        <div className={styles.cgContainer}>
            <button
                onClick={fetchGameCode}
            >New game!</button>
            <p>{gameCodeText}</p>
        </div>
    )

};

export default CreateGame;
