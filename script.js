const wordEl=document.getElementById('word');
const wrongLettersEl=document.getElementById('wrong-letters');
const playAgainBtn=document.getElementById('play-again');
const popup=document.getElementById('popup-container');
const finalMessage=document.getElementById('final-message');
const notification=document.getElementById('notification-container');

const figureParts=document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizzard'];

let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctLetters=[];
const wrongLetters=[];

function displayWord(){

    wordEl.innerHTML=`${selectedWord.split('').map(letter=>`<span class="letter">${correctLetters.includes(letter)? letter : ''}</span>`).join('')}`;

    const innerWord=wordEl.innerText.replace(/\n/g, '');

    if(innerWord===selectedWord){
        finalMessage.innerText='Congratulations! You won! :D'
        popup.style.display='flex';
    }
}

displayWord();