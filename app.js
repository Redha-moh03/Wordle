/* cashed Elements */
const diffucltyLevelsEL = document.querySelector('#diffucltyLevel')
const letterBTNEL = document.querySelectorAll('.EngKey')
const playerLetter = document.querySelectorAll('.word')
const enterButtonEl = document.querySelector('#EngEnter')
const deleteBTNEl = document.querySelector('#delete')
const messageElement = document.querySelector('#message')

let round = 0




/* constents */
const randomWords = ['adore', 'agree', 'amuse', 'ideal', 'jolly', 'greet', 'magic', 'happy', 'lucky', 'model', 'peace']
const playerWord = []







/* variables */
let PickedWord
let newLetter
let gameOver = false





/* functions */
init()
function init() {
    for (let i = 0; i < playerLetter.length; i++) {
        playerLetter[i].classList.remove('green')
        playerLetter[i].classList.remove('orange')
    }
    pickRAndomWord()
    /* console.log(PickedWord) */
}

function runGame(event) {

    putTheLetterIn(event)


}
function pickRAndomWord() {
    PickedWord = randomWords[Math.floor(Math.random() * 11)]
}
function putTheLetterIn(event) {
    if (playerWord.length < 5) {
        for (let i = 0; i < playerLetter.length; i++) {
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


function checkWord() {

    if (playerWord.length < 5) {
        console.log('word too short')
        return
    }

    for (let i = 0; i < playerWord.length; i++) {
        if (playerWord[i].toLowerCase() === PickedWord[i]) {
            console.log(`${playerWord[i]} is in the right place`)
            playerLetter[i + (round * PickedWord.length)].classList.add('green');
        }
        else if (PickedWord.includes(playerWord[i].toLowerCase())) {
            console.log(`${playerWord[i]} is in the word but not in the right position`)
            playerLetter[i + (round * PickedWord.length)].classList.add('orange');


        }
        else if (!PickedWord.includes(playerWord[i])) {
            console.log(`${playerWord[i]} is not in the word`)
        }

    }

    if (playerWord.join("").toLowerCase() === PickedWord) {
        PickedWord = ''
        console.log('you won!')
        messageElement.textContent = 'you won!'
        messageElement.classList.toggle('hide')
        for (let i = playerLetter.length - 1; i >= 0; i--) {
            playerLetter[i].textContent = ''
        }
        init()
        gameOver = true
    }

    else if (playerLetter[24].textContent != '' && !gameOver) {
        PickedWord = ''
        console.log('you lost')
        for (let i = playerLetter.length - 1; i >= 0; i--) {
            playerLetter[i].textContent = ''
        }
        init()
        gameOver = true
    }
    playerWord.splice(0, playerWord.length)

    round++
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
    }
}


/* EventListener */


for (let oneLetter of letterBTNEL) {
    oneLetter.addEventListener('click', runGame)
}

enterButtonEl.addEventListener('click', checkWord)

deleteBTNEl.addEventListener('click', deleteF)




