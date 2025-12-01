class Board {
    constructor(rows = 6, columns = 7){
        this.rows = rows;
        this.columns = columns;
        this.grid = [];

        for (let i = 0; i< rows; i++){
            const row = [];
            for (let j = 0; j < columns; j++){
                row.push(new Cell());
            }
            this.grid.push(row);
        }
    }
    printBoard(){
        const boardValues = this.grid.map((row)=> row.map((cell)=> cell.getValue()));
        console.log(boardValues);
    }
    dropToken(column, token){
        const availableCell = this.grid.filter((row)=> row[column].getValue() === 0).map((row) => row[column]);
        if (!availableCell.length) return;

        const lowestRow = availableCell.length -1;
        this.grid[lowestRow][column].addToken(token);
    }
}

class Cell {
    constructor(){
        this.value = 0;
    }
    addToken(token){
        this.value = token;
    }
    getValue(){
        return this.value;
    }
}

class Player {
    constructor(p1 = "playerOne", p2 = "playerTwo"){
        this.p1 = p1;
        this.p2 = p2;
        this.players = [{
            name: p1,
            token: 1
        },{
            name: p2,
            token: 2
        }];
        this.activePlayer = this.players[0];
    }
    switchTurn(){
        this.activePlayer = this.activePlayer === this.players[0] ? this.players[1] : this.players[0];
    }
    getActivePlayer(){
        return this.activePlayer;
    }
}

class Game {
    constructor(){
        this.board = new Board();
        this.player = new Player();
    }
    printNewRound(){
        this.board.printBoard();
        console.log(`It is ${this.player.getActivePlayer().name}'s turn`);
    }
    playRound(column){
        const currentPlayer = this.player.getActivePlayer();
        console.log(`Dropping ${currentPlayer.name}'s token into column ${column}`);
        this.board.dropToken(column, currentPlayer.token);

        this.player.switchTurn();
        this.printNewRound();
    }
    checkWin(activePlayer){
        const row = this.board.rows;
        const col = this.board.columns;
        let count = 1;
        let goingBackward = false;

        for(let i = 0; i< row; i++){

        }
    }
}

const game = new Game();
game.playRound(3);
game.playRound(3);
game.playRound(3);