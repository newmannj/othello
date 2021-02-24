import logo from './logo.svg';
import './App.css';
import Gameboard  from './Gameboard';
import PlayerInfo from './PlayerInfo';

function App() {
  return (
    <div className="App">
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
