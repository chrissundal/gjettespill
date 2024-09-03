//model
let guessedNumber;
let secretNumber;
let countGuesses = 0;
let eventMessage = '';
let result;
let highScore = '';
let ranWord = '';

//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
     <div class="main">
         <h3>Gjettespill</h3>
         <div>Du har gjettet ${countGuesses} ganger</div><br/>
         <div>Svaret er: ${eventMessage}</div>
         <br/>
         <div>Siste nummer er: ${result ?? 'Locked'}</div>
         <br/>
         <input
         type="number"
         oninput="guessedNumber=this.value"
         value="${guessedNumber ?? ''}"
         min="1"
         max="100"
         step="1"
         />
         <div class="btn">
             <button onclick="helpNumber()">Hjelp</button>
             <button onclick="guess()">Gjett</button>
             <button onclick="init()">Start på nytt</button>
         </div>
         <div class="highscore">
             <div>${highScore ?? ''}</div>
         </div>    
     </div>     
     `;
}

//controller
function init() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    countGuesses = 0;
    result = '';
    updateView();
}
function guess() {
    countGuesses++
    if (secretNumber == guessedNumber) {
        eventMessage = 'RIKTIG';
        ranWord = randomWord();
        highScore += `<li>${ranWord}, din score er bare: ${countGuesses} trekk</li>`
        countGuesses = 0;
        init();
    } else {
        eventMessage = 'FEIL'
    }
    updateView();
}

function randomWord() {
    ranNum = Math.floor(Math.random() * 5) + 1;
    if (ranNum == 1) {
        return 'Nice'
    } else if (ranNum == 2) {
        return 'Cool'
    } else if (ranNum == 3) {
        return 'Good job'
    } else if (ranNum == 4) {
        return 'Awsome'
    } else {
        return 'Badass'
    }
}
function helpNumber() {
    if (countGuesses >= 10) {
        result = secretNumber.toString().slice(-1);
    } else {
        result = 'Ikke prøvd nok ganger!'
    }
    updateView();
}