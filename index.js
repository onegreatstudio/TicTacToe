function setPlayerName() {
    var playerNameDiv = document.getElementById('playerName');
    var playerNameTitle = document.getElementById('player1NameT');

    playerNameDiv.innerHTML = "Player 1 Name: " + document.getElementById('playerNameInput').value;
    playerNameTitle.innerHTML = document.getElementById('playerNameInput').value + "'s Tic Tac Toe";

    // hide input field and button
    document.getElementById('divSetPlayerName').style.display = 'none';
}

function setPlayer2Name() {
    var player2NameDiv = document.getElementById('player2Name');

    player2NameDiv.innerHTML = "Player 2 Name: " + document.getElementById('player2NameInput').value;

    // hide input field and button
    document.getElementById('divSetPlayer2Name').style.display = 'none';
}