<h1>Pig game</h1>
This is a simple dice game built with HTML, CSS, and JavaScript. It was created as part of the Udemy js course by Jonas Schmedtmann.

<h2>How to Play</h2>
The game has 2 players, playing in rounds. <br>
In each turn, a player rolls a dice as many times as they wish. Each result is added to their ROUND score. <br>
But, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn. <br>
The player can choose to 'Hold', which means that their ROUND score gets added to their GLOBAL score. After that, it's the next player's turn. <br>
The first player to reach the winning score (default 100) wins the game. <br>

<h2>Features</h2>
Roll dice functionality <br>
Accumulate round score <br>
Hold round score and add to global <br>
Switch between players <br>
Reset game after winner <br>

<h2>Code Overview</h2>
The core game logic is handled in JavaScript. The index.html provides the HTML structure and links to CSS/JS files.

The script.js implements the following:

rollDice() - Generates a random dice roll <br>
switchPlayer() - Switches active player <br>
holdScore() - Adds round score to global and switches player <br>
init() - Resets game state <br>
winCheck() - Checks if player has won <br>
HTML elements are updated dynamically with the scores and player info. <br>

<h2>Credits</h2>
This game was built as part of the Udemy course "The Complete JavaScript Course 2023: From Zero to Expert!" by instructor Jonas Schmedtmann.
The HTML/CSS code was provided as part of the course and I implemented the core game logic per the course instructions.
