document.addEventListener('DomContentLoaded', () => {


    function createGameScreen() {

        const game = document.getElementById('game')
        game.innerHTML = `
        <canvas id="mycanvas " width="1000 " height="600 "></canvas>
        <button id="play">Play</button>
        `;

        const startButton = document.querySelector('.start-button');
        startButton.addEventListener('click', () => {
            firstScreen.classList.add('hide')
            game.classList.remove('hide')
            game.classList.add('show')
            let mycanvas = document.querySelector('#mycanvas');
            let ctx = mycanvas.getContext('2d')

        })


    }
    createGameScreen()


    function createGameOverScreen() {

    };

    function destroyFirstScreen() {

    };

    function destroyGameScreen() {

    };

});