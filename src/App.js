import './App.css';
import Gameboard  from './components/Gameboard';
import PlayerInfo from './components/PlayerInfo';
import CreateGame from './components/CreateGame';

function App() {
  return (
    <div className="App">
        <CreateGame/>
        <PlayerInfo 
          playerName = "Player 1"
          token="d"
        />
        <Gameboard/>
        <PlayerInfo
          playerName = "Player 2"
          token="l"
        />
    </div>
  );
}

export default App;
