class Game {
    constructor(object, callbackWin, callbackOver) {
        this.ctx = object.ctx;
        this.player = object.player;
        this.virus = object.virus;
        this.rolls = object.rolls;
        this.vaccines = object.vaccines;
        this.viruses = [];
        this.rolls = [];
        this.vaccinesArr = [];
        this.cbWin = callbackWin;
        this.cbOver = callbackOver;
        this.score = 0;
        this.intervalId = undefined;





    }

    assignControlsToKeys() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowRight':
                    this.player.goRight();
                    break;
                case 'ArrowLeft':
                    this.player.goLeft();
                    break;
                case 'KeyS':
                    this.generateVaccines();
                    this.drawVacc();

                    console.log("shoot")
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
    drawVacc() {
        this.vaccinesArr.forEach((vaccines) => {
            vaccines.draw();
        })
    }

    generateRandomVirus() {

            for (let i = 0; i < 8; i++) {
                this.intervalId = setInterval(() => {
                    this.viruses.push(new Virus(this.ctx));
                    this.startViruses();
                }, 4000)


            }
        }
        /*interval() {
            this.intervalId = setInterval(this.generateRandomVirus, 1000)
        }*/

    generateRandomRolls() {
        for (let i = 0; i < 10; i++) {
            this.rolls.push(new Rolls(this.ctx));
        }

    }
    generateVaccines() {
        for (let i = 0; i < 20; i++) {
            this.vaccinesArr.push(new Vaccines(this.ctx));
        }
    }

    startViruses() {
        this.viruses.forEach((virus) => {
            virus.startMovingVirus();
        })
    }

    stopVirus() {
        if (this.interval) {
            clearInterval(this);
            this.interval = undefined;
        }
    }

    startRolls() {
        this.rolls.forEach((roll) => {
            roll.startMovingRolls();
        })
    }
    stopRolls() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }


    virusCollision() {
        let collision = false
        this.viruses.forEach((virus, index) => {
            if (this.player.x < (virus.x + virus.width) &&
                (this.player.x + this.player.width / 2) > virus.x &&
                this.player.y < (virus.y + virus.height) &&
                (this.player.y + this.player.height) > virus.y) {
                collision = true;
                this.viruses.splice(index, 1)

            }

        })
        return collision
    };

    rollsCollision() {
        let collision = false
        this.rolls.forEach((roll, index) => {
            if (this.player.x < (roll.x + roll.width) &&
                (this.player.x + this.player.width / 2) > roll.x &&
                this.player.y < (roll.y + roll.height) &&
                (this.player.y + this.player.height) > roll.y) {
                collision = true
                this.rolls.splice(index, 1);

                this.score += 1;
                let scoreEl = document.getElementById('scoreElement');
                scoreEl.innerHTML = this.score;

            }

        })
        return collision
    };



    clean() {
        this.ctx.clearRect(0, 0, 900, 500);
    }

    update() {
        this.clean();
        this.player.drawPlayer();
        this.drawViruses();
        this.drawVacc()
        this.drawRolls();
        if (this.rollsCollision()) {

            if (this.score === 5) {
                console.log("you win")
                this.stopRolls();
                this.stopVirus();
                this.cbOver();
                return;
            }
        }

        if (this.virusCollision()) {
            console.log("game over");
            this.stopVirus();
            this.stopRolls();
            this.cbWin();
            return;
        }


        window.requestAnimationFrame(this.update.bind(this))
    }




    start() {
        this.assignControlsToKeys();
        this.generateRandomVirus();
        this.generateRandomRolls();
        //this.generateVaccines();
        this.startViruses();
        this.startRolls();

        window.requestAnimationFrame(this.update.bind(this))
    }
};