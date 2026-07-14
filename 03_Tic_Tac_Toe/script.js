// in this game there is 3 possible outcome:
// 1. x player win
// 2. O player win
// 3. Game Draw





const board = document.getElementById('board');
const stat = document.getElementById('status')
let turn = 'X';
let winnerDecided = false;

const gridBox = ["", "", "", "", "", "", "", "", ""];
let totalInsert = 0;

function checkWinner(player) {
    if (gridBox[0] == player && gridBox[1] == player && gridBox[2] == player)
        return true;

    else if (gridBox[3] == player && gridBox[4] == player && gridBox[5] == player)
        return true;

    else if (gridBox[6] == player && gridBox[7] == player && gridBox[8] == player)
        return true;

    else if (gridBox[0] == player && gridBox[3] == player && gridBox[6] == player)
        return true;

    else if (gridBox[1] == player && gridBox[4] == player && gridBox[7] == player)
        return true;

    else if (gridBox[2] == player && gridBox[5] == player && gridBox[8] == player)
        return true;

    else if (gridBox[0] == player && gridBox[4] == player && gridBox[8] == player)
        return true;

    else if (gridBox[2] == player && gridBox[4] == player && gridBox[6] == player)
        return true;

    else
        false;
}

board.addEventListener('click', (e) => {


    if (winnerDecided || totalInsert == 9 || gridBox[e.target.id] != "") {
        return;   // agar winnerDecided true hai or game Draw to niche ka kux code mat chalwo yahi se return ho
    }

    const box = e.target;
    box.textContent = turn;
    // set the value in the empty array string, find the index and give the value
    const index = box.id;

    gridBox[index] = turn;
    totalInsert++;


    if (checkWinner(turn)) {
        stat.textContent = `Player ${turn} won the game`;
        winnerDecided = true;
        return;
    }

    if (totalInsert == 9) {
        stat.textContent = `Game is Draw`;
        return;
    }

    if (turn == 'X')
        turn = 'O';
    else
        turn = 'X';

    stat.textContent = `Player ${turn}'s Turn`
})

const button = document.getElementById('resetBtn');

button.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";

        gridBox[i] = "";
    }

    totalInsert = 0;
    winnerDecided = false;
    stat.textContent = "Player X's turn"
})