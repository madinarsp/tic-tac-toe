class TicTacToe {
    gameField;
    currSymbol;
    winnerSymb;
    turnNumber;

    constructor() {
        this.gameField = Array( Array(3), Array(3), Array(3) );
        this.currSymbol = 'x';
        this.turnNumber = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        //check if the cell is free
        if(!this.isFinished() && this.getFieldValue(rowIndex, columnIndex) == null) {
            this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            //check for winning situation
            //at least 4 turns should pass to check for winning situation
            if( this.turnNumber >= 4 && this.getWinner() == null) {
                //check columns and rows
                if(this.gameField[rowIndex][0] == this.currSymbol &&
                    this.gameField[rowIndex][1] == this.currSymbol &&
                    this.gameField[rowIndex][2] == this.currSymbol) {
                        this.winnerSymb = this.currSymbol;
                }
                else if(this.gameField[0][columnIndex] == this.currSymbol &&
                    this.gameField[1][columnIndex] == this.currSymbol &&
                    this.gameField[2][columnIndex] == this.currSymbol) {
                        this.winnerSymb = this.currSymbol;
                }
                //check diagonals
                if(this.getWinner() == null) {
                    if( rowIndex == columnIndex || (rowIndex != 1 && columnIndex != 1) ) {
                        if(this.gameField[0][0] == this.currSymbol &&
                            this.gameField[1][1] == this.currSymbol &&
                            this.gameField[2][2] == this.currSymbol) {
                                this.winnerSymb = this.currSymbol;
                        }
                        else if(this.gameField[0][2] == this.currSymbol &&
                            this.gameField[1][1] == this.currSymbol &&
                            this.gameField[2][0] == this.currSymbol) {
                                this.winnerSymb = this.currSymbol;
                        }
                    }
                }
            }
            
            //change current player
            if(this.currSymbol == 'x') this.currSymbol = 'o';
            else this.currSymbol = 'x';
            this.turnNumber++;
        }
        //console.log(`Turn is ${this.turnNumber} and symbol is ${this.currSymbol}`);
    }

    isFinished() {
        if(this.isDraw() || this.getWinner() != null) return true;
        else return false;
    }

    getWinner() {
        if(this.winnerSymb == 'x' || this.winnerSymb == 'o') return this.winnerSymb;
        else return null;
    }

    noMoreTurns() {
        for(let i = 0; i < this.gameField.length; i++) {
            for(let j = 0; j < this.gameField[i].length; j++) {
                if(this.getFieldValue(i, j) != null) continue;
                else return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && this.getWinner() == null) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.gameField[rowIndex][colIndex] == 'x' || this.gameField[rowIndex][colIndex] == 'o')
            return this.gameField[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;
