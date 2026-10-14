/* cashed Elements */
const diffucltyLevelsEL = document.querySelector('#diffucltyLevel')
const letterBTNEL = document.querySelectorAll('.EngKey')
const playerLetter = document.querySelectorAll('.word')
const enterButtonEl = document.querySelector('#EngEnter')
const deleteBTNEl = document.querySelector('#delete')






/* constents */
const randomWords = ['adore', 'agree', 'amuse', 'ideal', 'jolly', 'greet', 'magic', 'happy', 'lucky', 'model', 'peace']







/* variables */
let PickedWord
let newLetter
const playerWord = []




/* functions */
init()
function init() {
    pickRAndomWord()
    console.log(PickedWord)
}

function runGame(event) {
    
    putTheLetterIn(event)
     

}
function pickRAndomWord() {
    PickedWord = randomWords[Math.floor(Math.random() * 11)]
}
function putTheLetterIn(event) {
    if (playerWord.length < 5)
    {
    for (let i = 0; i < playerLetter.length; i++) {
        if (playerLetter[i].textContent === '') {
            playerLetter[i].textContent = event.target.textContent
            playerWord.push(event.target.textContent)
            return
        }
    }
    }
    else
    {
        
        return 

    }

}


function checkWord() {
    
    if (playerWord.length < 5) {
        console.log('word too short')
        return
    }

    for (let i = 0; i < 5; i++) {
        if (playerWord[i].toLowerCase() === PickedWord[i]) {
            console.log('letter is right')


        }
        else if (PickedWord.includes(playerWord[i].toLowerCase())) {
            console.log(`${playerWord[i]} is in the word but not in the right position`)

        }
        else if (!PickedWord.includes(playerWord[i]))
        {
            console.log(`${playerWord[i]} is not in the word`)
        }
    }

    playerWord.splice(0, playerWord.length)
}

function deleteF() {

    if (playerWord.length > 0) {
        playerWord.pop()

    
    for (let i = playerLetter.length - 1; i >= 0; i--) {
        if (playerLetter[i].textContent != '') {
            playerLetter[i].textContent = ''
            return
        }
    }
}}
/* EventListener */


for (let oneLetter of letterBTNEL) {
    oneLetter.addEventListener('click', runGame)
}

enterButtonEl.addEventListener('click', checkWord)

deleteBTNEl.addEventListener('click', deleteF)