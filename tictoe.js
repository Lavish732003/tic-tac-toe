var currentPlayer = prompt("Who is The Current Player X=1 O=2");

var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        grid[i][j] = 0;
    }
}

function checkWin(player) {
    for (var i = 0; i < 3; i++) {
        if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
            return true; // Horizontal win
        }
        if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) {
            return true; // Vertical win
        }
    }
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
        return true; // Diagonal win (top-left to bottom-right)
    }
    if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
        return true; // Diagonal win (top-right to bottom-left)
    }
    return false;
}

function clickCell(x, y) {
    if (grid[x][y] > 0) {
        alert("Don't try to cheat!");
    } else {
        if (currentPlayer == 1) {
            document.getElementById("cell_" + x + "_" + y).style.color = "#3F88C5";
            document.getElementById("cell_" + x + "_" + y).innerHTML = "X";
            grid[x][y] = 1;
            if (checkWin(1)) {
                alert("Player X wins!");
                reset();
            }
            currentPlayer = 2;
        } else {
            document.getElementById("cell_" + x + "_" + y).style.color = "#E2C290";
            document.getElementById("cell_" + x + "_" + y).innerHTML = "O";
            grid[x][y] = 2;
            if (checkWin(2)) {
                alert("Player O wins!");
                reset();
            }
            currentPlayer = 1;
        }
    }
}

function reset() {
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            grid[i][j] = 0;
            document.getElementById("cell_" + i + "_" + j).innerHTML = "&nbsp;";
        }
    }
    currentPlayer = 1;
}
