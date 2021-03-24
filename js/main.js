document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom loaded')

    function printGameOver() {
        let gameOver = document.querySelector('#game-over');
        let canvas = document.querySelector('#game');
        canvas.style = 'display: none';
        gameOver.style = 'display: block';

        let reset = document.querySelector('#reset-btn')
        reset.addEventListener('click', () => {
            gameOver.style = 'display: none';
            let firstScreen = document.getElementById('first-screen');
            firstScreen.style = 'display: block';





        });
    }

    function printWinScreen() {
        let winScreen = document.getElementById('win-screen');
        let canvas = document.querySelector('#game');
        canvas.style = 'display: none';
        winScreen.style = 'display: block';

        let restart = document.querySelector('#restart-btn')
        restart.addEventListener('click', () => {
            winScreen.style = 'display: none';
            canvas.style = 'display: block';
        });
    }

    let canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');


    function printGameScreen() {
        const playButton = document.querySelector('#play-button');
        console.log("click", playButton)
        playButton.addEventListener('click', () => {
            let firstScreen = document.getElementById('first-screen');
            firstScreen.style = 'display: none';


            let game = document.getElementById('game');
            game.style = 'display: block';


            const startButton = document.querySelector('#start-button');
            startButton.addEventListener('click', () => {

                const covidGame = new Game({
                        ctx: ctx,
                        player: new Player(ctx),
                        virus: new Virus(ctx),
                        rolls: new Rolls(ctx)
                    },
                    printGameOver,
                    printWinScreen

                );

                covidGame.start();

            });

        });
    }
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
            let paragraph = document.querySelector('.show')
            paragraph.classList.remove('show');
            paragraph.classList.add('hide');

            let btnClose = document.querySelector('.show');
            btnClose.classList.remove('show');
            btnClose.classList.add('hide');

        })
    }
    closeInstructions()
});