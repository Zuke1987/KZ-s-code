/*Variables for the starting bet, amount of money held during the gameMoney
number of rolls taken throughout the game, the maximum amount
held during the game, and the maximum number of rolls taken when
the user had the most amount of money*/
var startingBet;
var gameMoney;
var rollsTaken = 0;
var maxMoney = 0;
var maxMoneyRolls = 0;

/* A function to make sure the starting bet is greater than 0.
If the amount entered is less than or equal to 0 an error message appears
and the cursor is focused on the textbox again. If the starting bet is greater
than 0 the amount of game money is set equal to the starting bet.
*/
function validateBet() {

  startingBet = document.forms["startingBet"]["bets"].value;
  if (startingBet <= 0) {
    alert("You must bet an amount greater than 0!");
    document.forms["startingBet"]["bets"].focus();
    return false;
  }
  else {
      gameMoney = startingBet;
      rollDice();
  }
  return false;

}
/* This function rolls the each die once and adds the result.  It then
checks if the amount is equal to 7.  If so 4 is added to the gameMoney. If not
1 is subtracted from the game money. It also keeps track of the rolls taken,
max money held in game, and max rolls when max money is held.  */
function rollDice() {
  while (gameMoney > 0) {
    var diceOneRoll = Math.floor(Math.random() * 6) + 1;
    var diceTwoRoll = Math.floor(Math.random() * 6) + 1;
    rollsTaken++;

    if (diceOneRoll + diceTwoRoll == 7) {
        gameMoney = gameMoney + 4;
        if (gameMoney > maxMoney) {
            maxMoney = gameMoney;
            maxMoneyRolls = rollsTaken;
        }
    } else {
      gameMoney = gameMoney - 1;

    }
  } /*Places the ending results values in the hidden table then
  makes the table visible by removing and adding certain class attributes. */
  document.getElementById("startBet").innerText = "$" + startingBet;
  document.getElementById("totalRolls").innerText = rollsTaken;
  document.getElementById("highestAmount").innerText = "$" + maxMoney;
  document.getElementById("highestRolls").innerText = maxMoneyRolls;
  document.getElementById("results").classList.remove("d-none", "border-top-0");
  document.getElementById("results").classList.add("d-block", "border-top", "border-dark");
  document.getElementById("tableResults").classList.remove("d-none");
  document.getElementById("tableResults").classList.add("d-block");
  document.getElementById("playButton").innerText = "Play Again";
  return;
}
/* Resets the game by checking if the now shown elements have certain
class attributes which make them visible.  If so the elements are made invisible
for the next round of the game. */
function resetGame() {
  if (document.getElementById("results").classList.contains
  ("d-block", "border-top", "border-dark") && (document.getElementById("tableResults").classList.contains("d-block"))) {
      document.getElementById("results").classList.remove("d-block", "border-top", "border-dark");
      document.getElementById("results").classList.add("d-none", "border-top-0");
      document.getElementById("tableResults").classList.remove("d-block");
      document.getElementById("tableResults").classList.add("d-none");
  }
}
