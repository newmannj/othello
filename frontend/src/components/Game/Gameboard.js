import React from 'react';
import GameboardCell from './GameboardCell'; 
import { getNewBoard, validateMove, doMoves } from '../../helpers';


class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameboard: getNewBoard(),
            availableSquares: 64,
            currentTurn: 'l',
            history: [],
            historyIndex: -1
        }
        
        this.handleCellClick = this.handleCellClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    checkGameEnded() {
        //Easiest check
        if(this.state.availableSquares === 0) return true;
        //Check if both players have no more moves
        //
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
            newState.availableSquares = this.state.availableSquares - 1;
            doMoves(directions, newState.gameboard, this.state.currentTurn);
            if(this.state.currentTurn === 'l') {
                newState.currentTurn = 'd';
            } else {
                newState.currentTurn = 'l';
            }
            this.setState(newState);
        }
        //After each move, check if the game has ended,
        this.checkGameEnded();
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
            <div className="column middle" style={{textAlign: "center"}}>
                <h2 >Othello</h2>
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
