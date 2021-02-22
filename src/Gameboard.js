import React from 'react';
import GameboardCell from './GameboardCell'; 
import { getNewBoard } from './helpers';


class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameboard: getNewBoard(),
            currentTurn: 'l' 
        }
        
        this.handleCellClick = this.handleCellClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }
    
    /**
     * Check if the move x, y is valid.
     * @param {number} x 
     * @param {number} y 
     */
    validMove(x, y) {
        // square can't be already occupied
        if(this.state.gameboard[y][x] !== ' ') return false;
        
        //check up
        let y_i = y - 1;
        let oppositeFound = false;
        let validTop = false;
        validTop = this.state.gameboard[y_i][x] === this.state.currentTurn;
        if(validTop) {
            while(y_i >= 0) {
                if(this.state.gameboard[y_i][x] !== this.state.currentTurn) {
                    oppositeFound = true;
                } else if(this.state.gameboard[y_i][x] === this.state.currentTurn && oppositeFound) {
                    validTop = true;
                }
                y_i -= 1;
            }
        } 

        y_i = y + 1;
        oppositeFound = false;
        let validBottom = false;
        while(y_i <= 7) {
            if(this.state.gameboard[y_i][x] !== this.state.currentTurn) {
                oppositeFound = true;
            } else if(this.state.gameboard[y_i][x] === this.state.currentTurn && oppositeFound) {
                validBottom = true;
            }
            y_i += 1;
        }

        console.log('Valid top is: ' + validTop);
        console.log('Valid bottom is: ' + validBottom);
        return true;
    }

    resetBoard() {
        this.setState({
            currentTurn: 'l',
            gameboard: getNewBoard()
        })
    }

    handleCellClick (x, y) {
        if(this.validMove(x, y)) {
            let newState = {...this.state};
            newState.gameboard = this.state.gameboard;
            newState.gameboard[y][x] = this.state.currentTurn;
            if(this.state.currentTurn === 'l') {
                newState.currentTurn = 'd';
            } else {
                newState.currentTurn = 'l';
            }
            this.setState(newState);
        } else {
            alert('bad move! try again :)');
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
            <div>
                <h1>Othello</h1>
                <button
                    onClick={this.resetBoard}
                >Reset board</button>
                <div className="board-container">
                    <table>
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
