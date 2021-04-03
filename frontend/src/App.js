import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import CreateGame from './components/CreateGame';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }
    }

    render() {
        const gameboardEl = this.state.playing ? <Game/> : null;
        return (
            <div className="App">
                <CreateGame/>
                {gameboardEl}
            </div>
        );
    }
}

export default App;
