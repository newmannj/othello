import React  from 'react';

import styles from './CreateGame.module.css';

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameCode: ''
        }

        this.fetchNewGameCode = this.fetchNewGameCode.bind(this);
    }

    fetchNewGameCode() {
        fetch("http://localhost:3031/api/game/createGame", 
        {
            method: 'POST',
            body: JSON.stringify({createdBy:"player_id_1"})
        })
            .then(res => res.json())
            .then(res => {
                this.setState({gameCode: res.gameCode});
            });
    }

    render() {
        const playButton = this.state.gameCode !== '' ? 
            <button>Start Playing!</button> : null

        return(
            <div className={styles.cgContainer}>
                <button
                    onClick={this.fetchNewGameCode}
                >Start New Game</button>
                <input type="text" value={this.state.gameCode}/>
                {playButton}
            </div>
        )
    }
};

export default CreateGame;
