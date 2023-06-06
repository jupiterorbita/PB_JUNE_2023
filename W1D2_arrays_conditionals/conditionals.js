// Conditionals like they are checkpoints in a video game.


/* 
In a video game, you might come across a path where you have two options. Depending on whether you have a certain item or not, you can either choose the left path or the right path.

Conditionals in JavaScript work similarly. They allow your code to make decisions based on different situations or 'conditions'. There are three main types of conditional statements in JavaScript: if, else if, and else.
*/

// if statement
// The if statement is the simplest form of a conditional. You provide it with a condition (the equivalent of "Do I have the key item?"), and it checks if that condition is true. If it is, the code inside the if statement runs.
var keyItem = true;

if (keyItem == true) {
  console.log("You can take the right path!");
}

// 2. else statement
// The else statement is like the other option in your video game. It is used together with an if statement and specifies a block of code to be executed if the condition is false.

keyItem = false;

if (keyItem == true) {
  console.log("You can take the right path!");
} else {
  console.log("You have to take the left path.");
}

// 3. else if statement

// The else if statement is used for more than two paths or options. It's like a checkpoint in a game with many paths.

var weapon = "shield"

if (weapon == "sword") {
    console.log("you may pass!")
} else if (weapon == "shield") {
    console.log("you may pass... with care")
} else if (weapon == "bow") {
    console.log("you may pass... fast")
} else {
    console.log("you shall not pass!!")
}

// ============================
var a = 10;
var result = "";

if (a > 0) {
    result = 'positive';
} else if (a > 5) {
    result = 'very postive'
} else {
    result = 'NOT positive';
}

if (a > 5) {
    result = "cool"
}

console.log(result)

// --------------------------

//              0       1        2
var people = ["Carter", "alice", "ben"]  // 3
// AND && 
// OR ||

if (people.length <= 3 && people.includes("Carter")) {
    people.push("albert")
}

if (people[people.length - 1] != "albert") {
    console.log("bob needs to get on the bus!")
}

console.log(people)