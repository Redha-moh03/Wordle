/* cashed Elements */
const diffucltyLevelsEL = document.querySelector('#diffucltyLevel')
const letterBTNEL = document.querySelectorAll('.EngKey')
const playerLetter = document.querySelectorAll('.word')
const enterButtonEl = document.querySelector('#EngEnter')
const deleteBTNEl = document.querySelector('#delete')
const messageElement = document.querySelector('#message')
const playBtnEl = document.querySelector('#playAgain')
const hardBtnEl = document.querySelector('#hard')
const ModrateBtnEl = document.querySelector('#Modrate')
const easyBtnEl = document.querySelector('#easy')
const wordContainer = document.querySelectorAll('.wordContainer')
const keyboardEl = document.querySelector('#lettersBTNS')




/* ===================================================================================================================================
======================================================================================================================================
====================================================================================================================================== */
/* constents */
const playerWord = []




/* variables */
let PickedWord
let newLetter
let gameOver = false
let round = 0





/* functions */
init()
function selectEasy (){
       for (let i = 0 ; i < wordContainer.length ; i++) 
       {wordContainer[i].classList.remove('hide')}
       keyboardEl.classList.remove('hide')
       playBtnEl.classList.remove('hide')
}
/* ===================================================================================================================================
======================================================================================================================================
====================================================================================================================================== */
function init() {
    gameOver = false
    messageElement.classList.add('hide')
    round = 0
    for (let i = 0; i < playerLetter.length; i++) {
        playerLetter[i].classList.remove('green')
        playerLetter[i].classList.remove('orange')
    }
    for (let i = playerLetter.length - 1; i >= 0; i--) {
        playerLetter[i].textContent = ''
    }
    pickRAndomWord()

    playerWord.splice(0, playerWord.length)

}
/* ===================================================================================================================================
======================================================================================================================================
====================================================================================================================================== */
function runGame(event) {

    putTheLetterIn(event)


}
/* ===================================================================================================================================
======================================================================================================================================
====================================================================================================================================== */
async function pickRAndomWord() {
    
    const response = await fetch('https://randomapi.dev/api/words?minLength=5&maxLength=5&count=1')
    const data = await response.json()
    PickedWord = data.data[0].word
    console.log(PickedWord)
}
function putTheLetterIn(event) {
    if (playerWord.length < 5 && !gameOver) {
        for (let i = 0; i < 25; i++) {
            if (playerLetter[i].textContent === '') {
                playerLetter[i].textContent = event.target.textContent
                playerWord.push(event.target.textContent)
                return
            }
        }
    }
    else {

        return

    }

}
/* ===================================================================================================================================
======================================================================================================================================
====================================================================================================================================== */

async function checkWord() {

    const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${playerWord.join('').toLowerCase()}`)

    const data = await response.json()

    console.log(data)

    if(data.entries.length === 0){
        messageElement.textContent = 'Not a valid Word'
        messageElement.classList.toggle('hide')
        setTimeout(()=>{
            messageElement.classList.toggle('hide')
        messageElement.textContent = ''


        },5000)
        return
    }


    if (playerWord.length < 5 && !gameOver) {
        
        return
    }

    for (let i = 0; i < playerWord.length; i++) {
        console.log(playerWord)
        console.log(PickedWord)
        if (playerWord[i].toLowerCase() === PickedWord[i] && !gameOver) {

            playerLetter[i + (round * PickedWord.length)].classList.add('green');
        }
        else if (PickedWord.includes(playerWord[i].toLowerCase()) && !gameOver) {

            playerLetter[i + (round * PickedWord.length)].classList.add('orange');

        }
        else if (!PickedWord.includes(playerWord[i]) && !gameOver) {

        }

    }

    if (playerWord.join("").toLowerCase() === PickedWord && !gameOver) {
        PickedWord = ''
        
        messageElement.textContent = 'you won!'
        messageElement.classList.toggle('hide')
        gameOver = true
    }

    else if (playerLetter[24].textContent != '' && !gameOver) {
        PickedWord = ''
        
        gameOver = true
    }
    playerWord.splice(0, playerWord.length)

    round++
}
/* ===================================================================================================================================
======================================================================================================================================
====================================================================================================================================== */

function deleteF() {

    if (playerWord.length > 0) {
        playerWord.pop()


        for (let i = playerLetter.length - 1; i >= 0; i--) {
            if (playerLetter[i].textContent != '') {
                playerLetter[i].textContent = ''
                return
            }
        }
    }
}


/* EventListener */


for (let oneLetter of letterBTNEL) {
    oneLetter.addEventListener('click', runGame)
}

enterButtonEl.addEventListener('click', checkWord)

deleteBTNEl.addEventListener('click', deleteF)

playBtnEl.addEventListener('click', init)

easyBtnEl.addEventListener('click' , selectEasy)
