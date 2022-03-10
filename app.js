// import functions and grab DOM elements
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



// set event listeners 
leftButton.addEventListener('click', () => {
    const correctCup = getRandomCup();
    revealCup('left', correctCup);

});

centerButton.addEventListener('click', () => {
    const correctCup = getRandomCup();
    revealCup('center', correctCup);
  
});

rightButton.addEventListener('click', () => {
    const correctCup = getRandomCup();
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

function resetCups() {
    imgOne.src = './assets/normal-cup.png';
    imgTwo.src = './assets/normal-cup.png';
    imgThree.src = './assets/normal-cup.png';
}

function revealCup(userGuess, correctCup) {
    resetCups();

    totalGuesses++;


    const winner = document.getElementById(`cup-${correctCup}`); 

    winner.src = './assets/correct-cup.PNG';

    if (userGuess === correctCup) {
        correctGuesses++;
    
    }

    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
