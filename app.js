/* cashed Elements */
const diffucltyLevelsEL = document.querySelector('#diffucltyLevel')
const letterBTNEL = document.querySelectorAll ('.EngKey')
const playerLetter = document.querySelectorAll('.word')








/* constents */
const randomWords = ['adore' , 'agree' , 'amuse' , 'ideal' ,'jolly' , 'greet' , 'magic' , 'happy' , 'lucky' , 'model' , 'peace']







/* variables */
let PickedWord 
let newLetter
const playerWord = []




/* functions */
init() 
function init (){
  pickRAndomWord()
  console.log(PickedWord)
}

function runGame(event){

putTheLetterIn(event)


}
function pickRAndomWord(){
   PickedWord = randomWords[Math.floor(Math.random() * 11)]
}
function putTheLetterIn (event){
   for (let i = 0 ;i <playerLetter.length ; i++)
    {
        if (playerLetter[i].textContent === '')
            {
           playerLetter[i].textContent = event.target.textContent
           playerWord.push(event.target.textContent)
           return
        }
    } 

    
}

console.log(playerLetter)
function checkWord (){
   for (let i = 0 ; i < 5 ; i++){
    if (playerWord[i].toLowerCase() === PickedWord[i].toLowerCase()){
        console.log('letter is right')

    }
    else if(PickedWord.includes(playerWord[i].toLowerCase())){
        console.log('Letter in word but wrong position')
    }
   }

   playerWord.splice(0,playerWord.length)
}


/* EventListener */


for (let oneLetter of letterBTNEL){
    oneLetter.addEventListener('click' , runGame )
}