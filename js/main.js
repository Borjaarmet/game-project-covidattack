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

            const covidGame = new Game({
                    ctx: ctx,
                    player: new Player(ctx),
                    virus: new Virus(ctx),
                    rolls: new Rolls(ctx),
                    audioGOver: audioGOver,
                    audioShoot: audioShoot,
                    audioScore: audioScore,
                    audioWin: audioWin
                },
                printGameOver,
                printWinScreen

            );

            // covidGame.start();



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

    const audioGOver = document.createElement('audio');
    audioGOver.src = 'sounds/wickedmalelaugh1.mp3';

    const audioShoot = document.createElement('audio');
    audioShoot.src = 'sounds/12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com.mp3';

    const audioScore = document.createElement('audio');
    audioScore.src = 'sounds/mixkit-retro-arcade-casino-notification-211 (1).wav';

    const audioWin = document.createElement('audio');
    audioWin.src = 'sounds/mixkit-girls-audience-applause-510.wav';

    const audiobtnInstr = document.createElement('audio');
    audiobtnInstr.src = '/sounds/mixkit-sci-fi-interface-robot-click-901.wav';

    const audiobtnPlay = document.createElement('audio');
    audiobtnPlay.src = '/sounds/mixkit-magic-sweep-game-trophy-257.wav';


    function printGameScreen() {
        const playButton = document.querySelector('#play-button');
        console.log("click", playButton)
        playButton.addEventListener('click', () => {
            audiobtnPlay.play();
            let firstScreen = document.getElementById('first-screen');
            firstScreen.style = 'display: none';


            let game = document.getElementById('game');
            game.style = 'display: block';


            const startButton = document.querySelector('#start-button');
            startButton.addEventListener('click', () => {

                startButton.style = 'display: none';

                const covidGame = new Game({
                        ctx: ctx,
                        player: new Player(ctx),
                        virus: new Virus(ctx),
                        rolls: new Rolls(ctx),
                        audioGOver: audioGOver,
                        audioShoot: audioShoot,
                        audioScore: audioScore,
                        audioWin: audioWin
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
            audiobtnInstr.play();
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