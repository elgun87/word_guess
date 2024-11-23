// Create an array of words. Randomly select one word from the array as the word to guess.

let azeriMovies = [
  "usaqligin son gecesi",
  "nabat",
  "babek",
  "o olmasin, bu olsun",
  "istintaq",
];

// Welcome the gamers
alert("Welcome to Guessing of Azerbaijani movie name");

// user Math to get random number in range 0 and azeriMovies array length
let randomIndex = Math.floor(Math.random() * azeriMovies.length);

// select random word from array
let secretWord = azeriMovies[randomIndex];

// TODO: Below is helper functions

// create a function to accept string and replace all characters in the string with "_"
function replaceSecretWord(secretWord) {
  // define another string for storing letters
  let updatedWord = "";
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord.charAt(i) === " ") {
      // if secret word has empty space make the sure updated string has also
      updatedWord += " ";
    } else if (secretWord.charAt(i) === ",") {
      //if secret word has "," make the sure updated string has also
      updatedWord += ",";
    } else {
      // replace entire word with # but replace only letters
      updatedWord += "#";
    }
  }
  return updatedWord;
}

// this function will check if user entered valid input only and avoid to enter duplicate letter
function checkUserInput(userInput, hidden) {
  // REGEX HISSESINI CHAT-GP ILE YAZDIM
  if (!userInput) {
    alert("You must enter a value!");
    return false;
    // check if user entered not empty space or entered letters only
  } else if (userInput.length !== 1 || !/^[a-zA-Z]$/.test(userInput)) {
    alert("Invalid input. Please enter exactly one letter.");
    // reset user onput
    userInput = null;
    return false;
    // check if the user already entered letter
  } else if (hidden.includes(userInput)) {
    alert("You already guessed this letter");
    return false;
  }
  return true;
}

// displaye the secret word
alert(`Here is the secret movie name: ${replaceSecretWord(secretWord)}`);

// help the gamer to know the length of secret word
alert(
  `secret movie name consist of ${
    replaceSecretWord(secretWord).replaceAll(" ", "").length
  } letters`
);

// define variable to hide the secret word
let hidden = replaceSecretWord(secretWord);

// convert hidden secret word to array for future use
let hidden_as_arr = hidden.split("");

// below function will be reset all the game
function resetGame() {
  chance = 5;
  randomIndex = Math.floor(Math.random() * azeriMovies.length);
  secretWord = azeriMovies[randomIndex];
  hidden = replaceSecretWord(secretWord);
  hidden_as_arr = hidden.split("");
}

// Create a function to ask user to enter guess letter
function startGame(str, num) {
  // Define chance for gamer
  let chance = 5;
  //use while loop
  while (chance != 0 || !hidden.includes("#")) {
    // ask user to enter letter
    let userInput = prompt("Guess the word");

    // define boolen var to check user input
    let check = false;

    // ask user to enter valid input untill he enters valid input
    while (!check) {
      check = checkUserInput(userInput, hidden);
      if (check) {
        break;
      }
      userInput = prompt("Guess the word");
    }

    // if user finds the letter replace "#" with letter and display word
    if (secretWord.includes(userInput)) {
      alert("YEEEY you found one of the letter");

      // use additional var because will be modifying secret word
      let temp = secretWord;

      // this loop will find user input index in secret word and replace "#" with letter
      while (temp.includes(userInput)) {
        // first find index
        let index = temp.indexOf(userInput);

        // replace hidden array element with user input
        hidden_as_arr[index] = userInput;

        // replace temp with "_" not to loose the index so next time if user enter correct letter I can find index of letter
        temp = temp.replace(userInput, "_");
      }

      // convert hidden arr to string
      hidden = hidden_as_arr.join("");
      alert(hidden);
    } else {
      // decrease user chance
      chance--;
      alert(`You have left ${chance}`);
    }
    if (chance == 0) {
      alert("Sorry...You have lost all your chance!!!");
      break;
    } else if (!hidden.includes("#")) {
      alert(
        `Congratulations.You win the Game.The secret word was - ${secretWord}`
      );
      let replay = confirm("Would you like to play again?");
      if (replay) {
        // reset game
        resetGame();

        // start the game
        startGame(secretWord);
      } else {
        break;
      }
      break;
    }
  }
}
// start the game
startGame(secretWord);
