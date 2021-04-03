import {getNewBoard, validateMove, doMoves} from './helpers'

test('move is done correctly', () => {
    let board = getNewBoard();
    const directions = validateMove(3, 2, 'd', board);
    const board2 = doMoves(directions, board, 'd');
})

test('can place a piece on the first move', () => {
    const board = getNewBoard();
    expect(validateMove(3, 2, 'd', board)).toStrictEqual([[{x:3, y:3}]]);
})

test('can place a piece on the first move', () => {
    const board = getNewBoard();
    expect(validateMove(4, 5, 'd', board)).toStrictEqual([[{x: 4, y: 4}]]);
});

test('cannot place a piece on an occupied square', () => {
    const board = getNewBoard();
    expect(validateMove(3, 3, 'l', board)).toBe(false);
});

test('creates new board of correct size', () => {
    const board = getNewBoard();
    expect(board.length).toBe(8);
    for(let i in board) { expect(board[i].length).toBe(8); }
});

test('has correct pieces in the middle', () => {
    const board = getNewBoard();
    expect(board[3][3]).toBe('l');
    expect(board[4][4]).toBe('l');
    expect(board[3][4]).toBe('d');
    expect(board[4][3]).toBe('d');
})