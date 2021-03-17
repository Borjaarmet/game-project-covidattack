console.log('main.js')


document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom loaded')

    function printGameOver() {
        let gameOver = document.getElementById('gameover');
        let canvas = document.querySelector('#mycanvas');
        canvas.style = 'display: none';
        gameOver.style = 'display: block';
    }

    function printWinScreen() {
        let winScreen = document.getElementById('win-screen');
        let canvas = document.querySelector('#mycanvas');
        canvas.style = 'display: none';
        winScreen.style = 'display: block';
    }

    function printGameScreen() {
        const playButton = document.querySelector('#play-button');
        console.log("click", playButton)
        playButton.addEventListener('click', () => {
            let firstScreen = document.getElementById('first-screen');
            firstScreen.style = 'display: none';


            let game = document.getElementById('game');
            game.style = 'display: block';


            let canvas = game.querySelector('#mycanvas');
            let ctx = canvas.getContext('2d');

        });

    };
    printGameScreen()

    function showInstructions() {
        let btnInstr = document.querySelector('.but-instructions');
        btnInstr.addEventListener('click', () => {
            console.log("paragraph appears")
            let paragraph = document.querySelector('.hide')
            paragraph.classList.remove('hide');
            paragraph.classList.add('show');
            let btnClose = document.querySelector('.hide');
            btnClose.classList.remove('hide');
            btnClose.classList.add('show');
        })
    }
    showInstructions()

    function closeInstructions() {
        let btnClose = document.querySelector('.but-close');
        btnClose.addEventListener('click', () => {
            console.log("paragraph hide")
            let paragraph = document.querySelector('.hide')
            if (paragraph.classList == '.show') {
                paragraph.classList.add('hide')
            } else {
                paragraph.classList.add('hide')
            }
        })
    }
    closeInstructions()
});