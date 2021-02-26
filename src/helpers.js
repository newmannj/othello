const getNewBoard = () => {
    return [
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','l','d',' ',' ',' '],
    [' ',' ',' ','d','l',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ']];
};

const withinBounds = (x, y) => (x >= 0 && x <= 7) && (y >= 0 && y <= 7);

/**
 * Takes in a position, token Color, and board and returns whether it is
 * a valid placement.
 * @param {number} x 
 * @param {number} y 
 */
const validateMove = (x, y, tokenColor, board) => {
    let oppositeColor = tokenColor === 'l' ? 'd' : 'l';
    //Square cannot be occupied.
    if(board[y][x] !== ' ') return false;
    
    //Get all posns with valid direction
    let directions = [];
    for(let y_i = y - 1; y_i < y + 2; y_i += 1) {
        if(!withinBounds(x, y_i)) continue;
        for(let x_i = x - 1; x_i < x + 2; x_i += 1) {
            if(!withinBounds(x_i, y_i)) continue;
            if(board[y_i][x_i] === oppositeColor) {
                directions.push([{x: x_i, y: y_i}]);
            }
        }
    }
    
    //For each direction, keep going until you hit a token of the same color
    //an edge, or an empty square.
    let validDirections = [];
    for(let i in directions) {
        let x_diff = directions[i][0].x - x;
        let y_diff = directions[i][0].y - y;
        //get the next position
        let next_x = directions[i][0].x + x_diff;
        let next_y = directions[i][0].y + y_diff;
        let directionEnded = false;
        while(withinBounds(next_x, next_y)) {
            if(board[next_y][next_x] === oppositeColor) {    
                directions[i].push({x: next_x, y: next_y});
            } else if(board[next_y][next_x] === tokenColor) {
                directionEnded = true;
                break;
            }
            next_x = next_x + x_diff;
            next_y = next_y + y_diff;
        }
        if(directionEnded) validDirections.push(directions[i]);

    }

    return validDirections;
}

const doMoves = (directions, board, tokenColor) => {
    for(let d_i in directions) {
        for(let i in directions[d_i]) {
            board[directions[d_i][i].y][directions[d_i][i].x] = tokenColor;
        }
    }
    return board;
}

module.exports = {getNewBoard, validateMove, doMoves};