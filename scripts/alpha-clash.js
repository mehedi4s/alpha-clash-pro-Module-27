// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
    
//     // show the playground

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    console.log( 'player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('display-latter');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);
    // console.log(currentAlphabetElement.innerText);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('you get a point');
        // console.log('you have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);







        // ------------------------------------------------------
        // // update score:
        // // 1. get the current score
        // // 2. increase the score by 1
        // // 3. show the update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        //start a new round 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        // console.log('you missed. you lost a life') 

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0) {
            gameOver();
        }


        // -------------------------------------------------------------------------
        // // 1. get the current Life number
        // const currentLifeElement = document. getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2. reduce the life count
        // const newLife = currentLife - 1; 

        // // 3. display the update life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

// function handleKeyboardButtonPress(){
//     console.log('button pressed');
// }
// // capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step - 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set randomly generated alphabet to the screen ( show it )
    const displayLetter = document.getElementById('display-latter');
    displayLetter.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementBYId('home-screen');
    hideElementBYId('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver(){
    hideElementBYId('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('display-latter');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}