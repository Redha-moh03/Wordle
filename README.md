#  The wordle game

Wordle is a game where the player has 6 tries to guess a random word
## How to play 
The player would have to choose betwwen 2 languages Arabic and English than choose a diffuclty level ,Easy modrate and hard ,In the easy level the player would have to guess a 5 letter word in 6 tries in whatever language he choose at first ,Modrate will be 6 letter word ,Hard will be 7 letter word ,The player will have to press on the keyboard element on the screen to enter each letter than press on the enter button to check if the word he entered is a valid word ,The player will see the each letter box turn green if the letter is in its right place in the word and orange if the letter is in the word but at the wrong postion.
## what the user should be able to do 
1. user should choose between arabic and english
2. user should select a diffuclty level
3. user should see the keyboard when he loads the page 
4. user should see the letter he clicked on on the screen 
5. user should inter a valid word
6. user should see wich charchters are in the word and wich are not and if the charchters are at the right place
7. user should have limted attempts
8. user should get a reset button to play again with a diffrent word
## Technolgies
### geting a random word 
![randome word function](./screenshots/Screenshot%202026-10-19%20131828.png)
These functions genrates a randome number between 0 and 1 than it multibly it by 1000 to select an index of the 1000 words length array  there is 3 arrays each one has 1000 words of length 5 ,6 and 7 based on the diffuclty level than it saves this word in a variable.
### selecting a language
![chicking the language function](./screenshots/Screenshot%202026-10-19%20131922.png)
These functions change the variable for every time you select a language and it shows the language keyboard and hide the other language keyboard
### initail function 
![initial page function](./screenshots/Screenshot%202026-10-19%20131951.png)
This function is called when you first load the page and every time you click on play again it empties the letters in the boxes and turnes every colored box to its normal color it setes the rounds back to 0 and it hides any message you got
## Future Enhancements
- add an api to genrate and check arabic words
- add more languages
- add catogries
## resources
1. This API checks if the word that player entered is valid <br>
https://freedictionaryapi.com/api/v1/entries/en/

2. This API takes a length parameter and a word counter parameter i used it to genrate randome english words <br>
https://randomapi.dev/api/words?minLength=5&maxLength=5&count=1