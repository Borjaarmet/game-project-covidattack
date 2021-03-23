class Game {
    constructor(object, callback) {
        this.ctx = object.ctx;
        this.player = object.player;
        this.virus = object.virus;
        this.rolls = object.rolls;
        this.viruses = [];
        this.rolls = [];
        this.cb = callback;
        this.score = 0;





    }

    assignControlsToKeys() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowRight':
                    this.player.goRight();
                    console.log("move right", this.player)
                    break;
                case 'ArrowLeft':
                    this.player.goLeft();
                    console.log("move left", this.player)
                    break;
            }

        });
    };

    drawViruses() {
        this.viruses.forEach((virus) => {
            virus.draw();
        })
    }
    drawRolls() {
        this.rolls.forEach((roll) => {
            roll.draw();
        })
    }

    generateRandomVirus() {
        for (let i = 0; i < 10; i++) {
            this.viruses.push(new Virus(this.ctx));
        }
    }

    generateRandomRolls() {
        for (let i = 0; i < 7; i++) {
            this.rolls.push(new Rolls(this.ctx));

        }
    }

    startViruses() {
        this.viruses.forEach((virus) => {
            virus.startMovingVirus();
        })
    }

    startRolls() {
        this.rolls.forEach((roll) => {
            roll.startMovingRolls();
        })
    }


    virusCollision() {
        this.viruses.forEach((virus, index) => {
            if (this.player.x < (virus.x + virus.width) &&
                (this.player.x + this.player.width / 2) > virus.x &&
                this.player.y < (virus.y + virus.height) &&
                (this.player.y + this.player.height) > virus.y) {

                this.viruses.splice(index, 1)
                console.log("collides virus", index)


                let gameOver = document.querySelector('#game-over');
                let canvas = document.querySelector('#game');
                canvas.style = 'display: none';
                gameOver.style = 'display: block';

                let reset = document.querySelector('#reset-btn')
                reset.addEventListener('click', () => {
                    gameOver.style = 'display: none';
                    canvas.style = 'display: block';

                });
                /*let scoreEl = document.getElementById('scoreElement');
                scoreEl.innerHTML = '0';*/
            }

        })

    };

    rollsCollision() {

        this.rolls.forEach((roll, index) => {
            if (this.player.x < (roll.x + roll.width) &&
                (this.player.x + this.player.width / 2) > roll.x &&
                this.player.y < (roll.y + roll.height) &&
                (this.player.y + this.player.height) > roll.y) {

                this.rolls.splice(index, 1);

                this.score += 1;
                let scoreEl = document.getElementById('scoreElement');
                scoreEl.innerHTML = this.score;


                /*if (this.score === 3) {
                    console.log("wiiiiin");
                    this.virus.stopVirus(this.startMovingVirus());
                    this.rolls.stopRolls(this.startMovingRolls());
                    let winScreen = document.getElementById('win-screen');
                    let canvas = document.querySelector('#game');
                    canvas.style = 'display: none';
                    winScreen.style = 'display: block';

                    let restart = document.querySelector('#restart-btn')
                    restart.addEventListener('click', () => {
                        winScreen.style = 'display: none';
                        canvas.style = 'display: block';
                    });


                }*/
            }

        })
    };


    clean() {
        this.ctx.clearRect(0, 0, 900, 500);
    }

    update() {
        this.clean();
        this.player.drawPlayer();
        this.drawViruses();
        this.drawRolls();
        if (this.rollsCollision()) {
            console.log("collides rolls", index)
            if (this.score === 3) {
                this.rolls.stopRolls()
                this.cb();
                return printWinScreen();


            }
        }
        if (this.virusCollision()) {
            console.log(" game over");
            this.virus.stopVirus(startMovingVirus());
            this.cb();
            return printGameOver();
        }


        window.requestAnimationFrame(this.update.bind(this))
    }




    start() {
        this.assignControlsToKeys();
        this.generateRandomVirus();
        this.generateRandomRolls();
        this.startViruses();
        this.startRolls();

        window.requestAnimationFrame(this.update.bind(this))
    }
};