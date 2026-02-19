let randomNumber=parseInt(Math.random() * 100 + 1 );

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess =[]
let numGuess= 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess =parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number !');
        userInput.value='';
    }
    else if(guess < 1){
        alert('Please enter number more than 1 !');
        userInput.value='';
    }
    else if(guess > 100){
        alert('Please enter number less than 100 !');
        userInput.value='';
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game over , Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right 
            ..You are Winner..`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Your guess number is too low..!`);
    }
    else{
        displayMessage(`Your guess is too high....!`)
    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`;
}

function displayMessage(massage){
    lowOrHi.innerHTML=`<h2>${massage}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML= `<h3 id="newGame">Start new Game </h3>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1 );
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        lowOrHi.innerHTML='';
        remaining.innerHTML=`${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}