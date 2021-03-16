document.addEventListener('DOMcontentLoaded', () => {


    /*function printGameOver() {
        let gameOver = document.getElementById('gameover');
        let canvas = document.querySelector('#mycanvas');
        canvas.style = 'display: none';
        gameOver.style = 'display: block';
    }*/

    /*function printWinScreen() {
        let winScreen = document.getElementById('win-screen');
        let canvas = document.querySelector('#mycanvas');
        canvas.style = 'display: none';
        winScreen.style = 'display: block';
    }*/

    function printGameScreen() {
        const playButton = document.querySelector('#play-button');
        playButton.addEventListener('click', () => {
            let firstScreen = document.getElementById('first-screen');
            firstScreen.style.display = 'none';

            let game = document.getElementById('game');
            game.style.display = 'block';


            let canvas = game.querySelector('#mycanvas');
            let ctx = canvas.getContext('2d');

        });

    };
    printGameScreen()


    /*function hideScreen() {
        let firstScreen = document.getElementById('first-screen').innerHTML;
        firstScreen.style.display = 'none';
    }

    function showScreen() {
        let game = document.getElementById('game').innerHTML;
        game.style.display = 'block';
    }*/
});