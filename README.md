Word Guessing Game
Objective:
Create a simple word guessing game using JavaScript. The player will guess the letters of a hidden 
word. If they guess correctly, the letter will be revealed; otherwise, they will lose a life. The game 
continues until the player guesses the word correctly or runs out of lives.
Instructions:
1. Choose a Word:
Create an array of words.
Randomly select one word from the array as the word to guess.
2. Display Hidden Word:
Display the word as a series of underscores (_), with one underscore for each letter in the word.
Example: If the word is "apple", display it as   _ _ _.
3. Guessing Mechanism:
Create a loop that allows the player to guess one letter at a time using the prompt function.
If the guessed letter is in the word, reveal the letter in the correct positions.
If the guessed letter is not in the word, subtract a life.
4. Lives and Ending the Game:
Start the player with a set number of lives (e.g., 5).
The game ends when the player either guesses the word correctly or runs out of lives.
Use the confirm function to ask the player if they want to play again.
5. Winning and Losing:
If the player guesses the word correctly, display a winning message.
If the player runs out of lives, display a losing message with the correct word.
