/* cashed Elements */
const diffucltyLevelsEL = document.querySelector('#diffucltyLevel')
const letterBTNEL = document.querySelectorAll ('.EngKey')
const playerLetter = document.querySelectorAll('.word')








/* constents */
const randomWords = ['adore' , 'agree' , 'amuse' , 'ideal' ,'jolly' , 'greet' , 'magic' , 'happy' , 'lucky' , 'model' , 'peace']







/* variables */
let PickedWord 
let newLetter





/* functions */
init() 
function init (){
  pickRAndomWord()
  
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
           return
        }
    } 

    
}
function checkWord (){


}


/* EventListener */


for (let oneLetter of letterBTNEL){
    oneLetter.addEventListener('click' , runGame )
}