let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  // let array = new Array(8).fill(new Array(8));
  let array = [];
  let arrLength = 8;
  for (let i = 0; i < arrLength; ++i){
    array[i] = new Array(arrLength);
  }
  array[3][4] = new Piece("black");
  array[4][3] = new Piece("black");


  array[3][3] = new Piece("white");
  array[4][4] = new Piece("white");

  return array;
}

//
// grid = _makeGrid()
// console.log(grid)
/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
  this.length = this.grid.length;
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)){
    return this.grid[pos[0]][pos[1]];
  } else {
    throw new Error('Invalid Positions!');
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {

};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  return (this.getPiece(pos).color === color);
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return (this.getPiece(pos) === undefined);
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return (this.validMoves("black").length === 0) && (this.validMoves("white").length === 0);
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] <= 7) && (pos[1] >= 0 && pos[1] <= 7);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (this.isValidPos(pos) && !this.isOccupied(pos)) {
      this.grid[pos[0]][pos[1]] = new Piece(color);
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  let display = [];
  for (let i=0; i< this.length; i++) {
    let eachLine = [];
    for (let j=0; j < this.length; j++){
      if (this.grid[i][j] === undefined ) {
        eachLine.push(" ");
      }else {
        eachLine.push(this.grid[i][j].toString());
      }
    }
    display.push("| " + eachLine.join(" | ") + " |");
  }
  return display.join("\n");
};

// board = new Board();
// console.log(board.print());
// console.log(board.isValidPos([8,8]));

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  // if (!this.isOccupied(pos)) {
  //
  // }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {

};

module.exports = Board;
