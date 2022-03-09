// import functions and grab DOM elements
const leftContainer = document.getElementById('left-cup');
const centerContainer = document.getElementById('center-cup');
const rightContainer = document.getElementById('right-cup');

const imgOne = document.getElementById('cup-left');
const imgTwo = document.getElementById('cup-center');
const imgThree = document.getElementById('cup-right');

const leftButton = document.getElementById('leftButton');
const centerButton = document.getElementById('centerButton');
const rightButton = document.getElementById('rightButton');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');


// let state
let correctGuesses = 0;
let totalGuesses = 0;

const correctCup = getRandomCup();


// set event listeners 
leftButton.addEventListener('click', () => {
    revealCup('left', correctCup);

});

centerButton.addEventListener('click', () => {
    revealCup('center', correctCup);
  
});

rightButton.addEventListener('click', () => {
    revealCup('right', correctCup);
  
});

function getRandomCup() {
    const hidingPlaces = [
        'left',
        'center',
        'right',
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    return hidingPlaces[index];

}

function revealCup(userGuess, correctCup) {
    imgOne.src = './assets/normal-cup.png';
    imgTwo.src = './assets/normal-cup.png';
    imgThree.src = './assets/normal-cup.png';

    totalGuesses++;


    if (userGuess === correctCup) {
        correctGuesses++;

        let winner = document.getElementById(`${getRandomCup}-cup`); 
        winner.src = './assets/correct-cup.png';
    }

    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
