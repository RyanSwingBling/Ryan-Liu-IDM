// VARIABLES
// Set of variables with meaningful names
let playerName = "Ryan";
let playerLevel = 1;
let hasKey = false;
let health = 100;

console.log("Initial Variables:");
console.log("Player Name:", playerName);
console.log("Player Level:", playerLevel);
console.log("Has Key:", hasKey);
console.log("Health:", health);

// Changing the values of some variables
playerLevel = 5;
hasKey = true;
health = 85;

console.log("\nAfter Changes:");
console.log("Player Level:", playerLevel);
console.log("Has Key:", hasKey);
console.log("Health:", health);

// An array with 5 items
let inventory = ["sword", "shield", "potion", "map", "compass"];

// Listing the second and third items (remember arrays start at index 0)
console.log("\nArray Items:");
console.log("Second item:", inventory[1]); // shield
console.log("Third item:", inventory[2]);  // potion

// FUNCTIONS
// Variable for playerScore
let playerScore = 0;

// Function that adds one to playerScore
function addPoint() {
  playerScore = playerScore + 1;
}

// Function that displays the playerScore
function showScore() {
  console.log("Player Score:", playerScore);
}

// Testing the functions
console.log("\nTesting Score Functions:");
showScore(); // Shows 0
addPoint();
showScore(); // Shows 1
addPoint();
addPoint();
showScore(); // Shows 3

// CONDITIONS
// Checking if playerScore is odd or even
console.log("\nChecking if score is odd or even:");

if (playerScore % 2 === 0) {
  console.log("Your score is even!");
} else {
  console.log("Your score is odd!");
}

// Adding one more point to see the message change
addPoint();
showScore();

if (playerScore % 2 === 0) {
  console.log("Your score is even!");
} else {
  console.log("Your score is odd!");
}