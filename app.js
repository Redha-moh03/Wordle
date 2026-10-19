import { words5, words6, words7 } from "./data.js"
const diffucltyLevelsEL = document.querySelectorAll('.diffucltyLevel')
const letterBTNEL = document.querySelectorAll('.EngKey')
let playerLetter = document.querySelectorAll('.word')
const enterButtonEl = document.querySelector('#EngEnter')
const deleteBTNEl = document.querySelector('#delete')
const messageElement = document.querySelector('#message')
const playBtnEl = document.querySelector('#playAgain')
const hardBtnEl = document.querySelector('#hard')
const ModrateBtnEl = document.querySelector('#Modrate')
const easyBtnEl = document.querySelector('#easy')
const wordContainer = document.querySelectorAll('.wordContainer')
const keyboardEl = document.querySelector('#lettersBTNS')
const modrateLettersEl = document.querySelectorAll('.m')
const hardLettersEl = document.querySelectorAll('.h')
const arabicButtonEl = document.querySelector('#arabic')
const englishButtonEl = document.querySelector('#english')
const ArbLetterBtnEl = document.querySelectorAll('.ArbKey')
const arabicButtonsEl = document.querySelector('.ArabicButton')
const ArbEnterEl = document.querySelector('#arbEnter')
const arbDeleteEl = document.querySelector('#arbDelete')
const arbPLay = document.querySelector('#arbPLay')
const playerWord = []
let PickedWord
let gameOver = false
let round = 0
let hardLevel = false
let easyLevel = false
let modrateLevel = false
let arabic = false
let english = true
init()
function selectArabic() {
    english = false
    arabic = true
    diffucltyLevelsEL[0].classList.remove('hide')
    diffucltyLevelsEL[1].classList.remove('hide')
}
function selectEnglish() {
    english = true
    arabic = false
    diffucltyLevelsEL[0].classList.remove('hide')
    diffucltyLevelsEL[1].classList.remove('hide')
}
function selectEasy() {
    for (let i = 0; i < wordContainer.length; i++) {
        wordContainer[i].classList.remove('hide')
        if (modrateLettersEl[i].classList != 'hideH') {
            modrateLettersEl[i].classList.add('hideM')
        }
        if (hardLettersEl[i].classList != 'hideH') {
            hardLettersEl[i].classList.add('hideH')
        }
    }
    hardLevel = false
    easyLevel = true
    modrateLevel = false
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
    playerWord.splice(0, playerWord.length)
    playerLetter = document.querySelectorAll('.word:not(.hideM):not(.hideH)')
    if (english) {
        keyboardEl.classList.remove('hide')
        playBtnEl.classList.remove('hide')
        if (arabicButtonsEl.classList != 'hide') { arabicButtonsEl.classList.add('hide') }
        pickEeasyRAndomWord()
    }
    if (arabic) {
        arabicButtonsEl.classList.remove('hide')
        pickEasyArabicWord()
        if (keyboardEl.classList != 'hide') {
            keyboardEl.classList.add('hide')
            playBtnEl.classList.add('hide')
        }
    }
}
function selectHard() {
    for (let i = 0; i < wordContainer.length; i++) {
        wordContainer[i].classList.remove('hide')
    }
    keyboardEl.classList.remove('hide')
    playBtnEl.classList.remove('hide')
    for (let i = 0; i < 6; i++) {
        modrateLettersEl[i].classList.remove('hideM')
        hardLettersEl[i].classList.remove('hideH')
    }
    hardLevel = true
    easyLevel = false
    modrateLevel = false
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
    playerWord.splice(0, playerWord.length)
    playerLetter = document.querySelectorAll('.word')
    if (english) {
        keyboardEl.classList.remove('hide')
        playBtnEl.classList.remove('hide')
        if (arabicButtonsEl.classList != 'hide') { arabicButtonsEl.classList.add('hide') }
        pichHardRandomWord()
    }
    if (arabic) {
        arabicButtonsEl.classList.remove('hide')
        pickHardyArabicWord()
        if (keyboardEl.classList != 'hide') {
            keyboardEl.classList.add('hide')
            playBtnEl.classList.add('hide')
        }
    }
}
function selectModrate() {
    for (let i = 0; i < wordContainer.length; i++) {
        wordContainer[i].classList.remove('hide')
    }
    keyboardEl.classList.remove('hide')
    playBtnEl.classList.remove('hide')
    for (let i = 0; i < 6; i++) {
        modrateLettersEl[i].classList.remove('hideM')
        if (hardLettersEl[i].classList != 'hideH') {
            hardLettersEl[i].classList.add('hideH')
        }
    }
    hardLevel = false
    easyLevel = false
    modrateLevel = true
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
    playerWord.splice(0, playerWord.length)
    playerLetter = document.querySelectorAll('.word:not(.hideH')
    if (english) {
        keyboardEl.classList.remove('hide')
        playBtnEl.classList.remove('hide')
        if (arabicButtonsEl.classList != 'hide') { arabicButtonsEl.classList.add('hide') }
        pickModrateRAndomWord()
    }
    if (arabic) {
        arabicButtonsEl.classList.remove('hide')
        pickModrateArabicWord()
        if (keyboardEl.classList != 'hide') {
            keyboardEl.classList.add('hide')
            playBtnEl.classList.add('hide')
        }
    }
}
function init() {
    if (hardLevel) {
        selectHard()
    }
    else if (modrateLevel) {
        selectModrate()
    }
    else if (easyLevel) {
        selectEasy()
    }
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
    playerWord.splice(0, playerWord.length)
}
function runGame(event) {
    putTheLetterIn(event)
}
async function pickEeasyRAndomWord() {
    const response = await fetch('https://randomapi.dev/api/words?minLength=5&maxLength=5&count=1')
    const data = await response.json()
    PickedWord = data.data[0].word
}
async function pickModrateRAndomWord() {
    const response = await fetch('https://randomapi.dev/api/words?minLength=6&maxLength=6&count=1')
    const data = await response.json()
    PickedWord = data.data[0].word
}
async function pichHardRandomWord() {
    const response = await fetch('https://randomapi.dev/api/words?minLength=7&maxLength=7&count=1')
    const data = await response.json()
    PickedWord = data.data[0].word
}
function putTheLetterIn(event) {
    if (playerWord.length < PickedWord.length && !gameOver) {
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
async function checkWord() {
    if (gameOver) { return }
    if (playerWord.length < PickedWord.length && !gameOver) { return }
    if (english) {
        const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${playerWord.join('').toLowerCase()}`)
        const data = await response.json()
        if (data.entries.length === 0) {
            messageElement.textContent = 'Not a valid Word'
            messageElement.classList.toggle('hide')
            setTimeout(() => {
                messageElement.classList.toggle('hide')
                messageElement.textContent = ''
            }, 5000)
            return
        }
    }
    if (english) {
        for (let i = 0; i < playerWord.length; i++) {
            if (playerWord[i].toLowerCase() === PickedWord[i] && !gameOver) {
                playerLetter[i + (round * PickedWord.length)].classList.add('green');
            }
            else if (PickedWord.includes(playerWord[i].toLowerCase()) && !gameOver) {
                playerLetter[i + (round * PickedWord.length)].classList.add('orange');
            }
            else if (!PickedWord.includes(playerWord[i]) && !gameOver) {
            }
        }
    }
    if (arabic) {
        if (easyLevel) {
            const redaLetters = [...playerLetter]
            const newArr = []
            newArr.push(redaLetters.slice(0, 5))
            newArr.push(redaLetters.slice(5, 10))
            newArr.push(redaLetters.slice(10, 15))
            newArr.push(redaLetters.slice(15, 20))
            newArr.push(redaLetters.slice(20, 25))
            newArr.push(redaLetters.slice(25, 30))
            for (let oneArr of newArr) {
                oneArr.reverse()
            }
            const lastArr = newArr.flat()
            for (let i = 4; i >= 0; i--) {
                if (playerWord[i] === PickedWord[i] && !gameOver) {
                    lastArr[i + (round * PickedWord.length)].classList.add('green')
                }
                else if (PickedWord.includes(playerWord[i]) && !gameOver) {
                    lastArr[i + (round * PickedWord.length)].classList.add('orange')
                }
                else if (!PickedWord.includes(playerWord[i]) && !gameOver) {
                }
            }
        }
        else if (modrateLevel) {
            const redaLetters = [...playerLetter]
            const newArr = []
            newArr.push(redaLetters.slice(0, 6))
            newArr.push(redaLetters.slice(6, 12))
            newArr.push(redaLetters.slice(12, 18))
            newArr.push(redaLetters.slice(18, 24))
            newArr.push(redaLetters.slice(24, 30))
            newArr.push(redaLetters.slice(30, 36))
            for (let oneArr of newArr) {
                oneArr.reverse()
            }
            const lastArr = newArr.flat()
            for (let i = 5; i >= 0; i--) {
                if (playerWord[i] === PickedWord[i] && !gameOver) {
                    lastArr[i + (round * PickedWord.length)].classList.add('green')
                }
                else if (PickedWord.includes(playerWord[i]) && !gameOver) {
                    lastArr[i + (round * PickedWord.length)].classList.add('orange')
                }
                else if (!PickedWord.includes(playerWord[i]) && !gameOver) {
                }
            }
        }
        else if (hardLevel) {
            const redaLetters = [...playerLetter]
            const newArr = []
            newArr.push(redaLetters.slice(0, 7))
            newArr.push(redaLetters.slice(7, 14))
            newArr.push(redaLetters.slice(14, 21))
            newArr.push(redaLetters.slice(21, 28))
            newArr.push(redaLetters.slice(28, 35))
            newArr.push(redaLetters.slice(35, 42))
            for (let oneArr of newArr) {
                oneArr.reverse()
            }
            const lastArr = newArr.flat()
            for (let i = 6; i >= 0; i--) {
                if (playerWord[i] === PickedWord[i] && !gameOver) {
                    lastArr[i + (round * PickedWord.length)].classList.add('green')
                }
                else if (PickedWord.includes(playerWord[i]) && !gameOver) {
                    lastArr[i + (round * PickedWord.length)].classList.add('orange')
                }
                else if (!PickedWord.includes(playerWord[i]) && !gameOver) {
                }
            }
        }
    }
    if (playerWord.join("").toLowerCase() === PickedWord && !gameOver) {
        PickedWord = ''
        messageElement.textContent = 'you won!'
        messageElement.classList.toggle('hide')
        gameOver = true
    }
    else if (playerLetter[playerLetter.length - 1].textContent != '' && !gameOver) {
        messageElement.textContent = `You lost ,Your word was ${PickedWord}`
        PickedWord = ''
        messageElement.classList.toggle('hide')
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
function pickEasyArabicWord() {
    PickedWord = words5[Math.floor(Math.random() * 1000)]
}
function pickModrateArabicWord() {
    PickedWord = words6[Math.floor(Math.random() * 1000)]
}
function pickHardyArabicWord() {
    PickedWord = words7[Math.floor(Math.random() * 1000)]
}
function putArabicletterin(event) {
    if (playerWord.length < PickedWord.length && !gameOver) {
        for (let i = PickedWord.length - 1; i >= 0; i--) {
            if (playerLetter[(i + round * PickedWord.length)].textContent === '') {
                playerLetter[(i + round * PickedWord.length)].textContent = event.target.textContent
                playerWord.push(event.target.textContent)
                return
            }
        }
    }
    else {
        return
    }
}
function deleteArabic() {
    if (playerWord.length > 0) {
        playerWord.pop()
        for (let i = (PickedWord.length * round); i < (round * PickedWord.length) + PickedWord.length; i++) {
            if (playerLetter[i].textContent != '') {
                playerLetter[i].textContent = ''
                return
            }
        }
    }
}
enterButtonEl.addEventListener('click', checkWord)
deleteBTNEl.addEventListener('click', deleteF)
playBtnEl.addEventListener('click', init)
easyBtnEl.addEventListener('click', selectEasy)
ModrateBtnEl.addEventListener('click', selectModrate)
hardBtnEl.addEventListener('click', selectHard)
for (let oneLetter of letterBTNEL) {
    oneLetter.addEventListener('click', runGame)
}
for (let oneArabicLetter of ArbLetterBtnEl) {
    oneArabicLetter.addEventListener('click', putArabicletterin)
}
arabicButtonEl.addEventListener('click', selectArabic)
ArbEnterEl.addEventListener('click', checkWord)
englishButtonEl.addEventListener('click', selectEnglish)
arbDeleteEl.addEventListener('click', deleteArabic)
arbPLay.addEventListener('click', init)