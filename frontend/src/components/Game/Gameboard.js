import React from 'react';
import GameboardCell from './GameboardCell'; 
import { getNewBoard, validateMove, doMoves } from '../../helpers';


class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameboard: getNewBoard(),
            currentTurn: 'l',
            history: [],
            historyIndex: -1
        }
        
        this.handleCellClick = this.handleCellClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }
    

    resetBoard() {
        this.setState({
            currentTurn: 'l',
            gameboard: getNewBoard()
        })
    }

    handleCellClick (x, y) {
        const directions = validateMove(x, y, this.state.currentTurn, this.state.gameboard);
        if(directions.length > 0) {
            let newState = {...this.state};
            newState.gameboard = this.state.gameboard;
            newState.history.push(this.state.gameboard);
            newState.historyIndex += 1;
            newState.gameboard[y][x] = this.state.currentTurn;
            doMoves(directions, newState.gameboard, this.state.currentTurn);
            if(this.state.currentTurn === 'l') {
                newState.currentTurn = 'd';
            } else {
                newState.currentTurn = 'l';
            }
            this.setState(newState);
        }
    }

    render() {
        const gameboardTable = this.state.gameboard.map((row, y) => {
            const rowCells = row.map((cell, x) => {
                return <GameboardCell 
                    xpos={x} 
                    ypos={y} 
                    key={y + '_' + x} 
                    token={cell}
                    onclick={this.handleCellClick}/>
            });
            return <tr key={y}>{rowCells}</tr>
        })
        return (
            <div className="column middle">
                <h1>Othello</h1>
                <button
                    onClick={this.resetBoard}
                >Reset board</button>
                <div className="board-container">
                    <table className="board-table">
                        <tbody>
                            {gameboardTable}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }   
};

export default Gameboard;
