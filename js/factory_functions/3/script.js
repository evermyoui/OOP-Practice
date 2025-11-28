function Gameboard(){
    const row = 6;
    const column = 7;
    const board = [];

    const getBoard = () => board;

    for (let i = 0; i< row; i++){
        board[i] = [];
        for (let i = 0; i < column; i++){
            board[i].push(Cell());
        }
    }

    const printBoard = () => {
        const boardWithCellValue = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValue);
    }

    const dropToken = () => {
        const availableCell = board.filter((row)=> row[column].getValue() === 0).map(row => row[column]);

        if (!availableCell.length) return;
    }
}

function Cell(){
    let value = 0;

    const addToken = (player) => {
        value = player;
    }

    const getValue = () => value;

    return {
        addToken, getValue
    };
}

function GameController(playerOne = "Player 1", playerTwo = "Player 2"){
    const board = Gameboard();

    const players = [{
        name: playerOne,
        token: 1
    },{
        name: playerTwo,
        token: 2
    }];

    let playerActive = players[0];

    const switchPlayerTurn = () => {
        playerActive = playerActive === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => playerActive;

    const printNewBoard = () => {

    }
}