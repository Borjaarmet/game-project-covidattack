class Game {
    constructor(object, callbackWin, callbackOver, ) {
        this.ctx = object.ctx;
        this.player = object.player;
        this.virus = object.virus;
        this.rolls = object.rolls;
        this.viruses = [];
        this.rolls = [];
        this.vaccinesArr = [];
        this.cbWin = callbackWin;
        this.cbOver = callbackOver;
        this.score = 0;
        this.score2 = 0;
        this.intervalId = undefined;
        this.audioGOver = object.audioGOver;
        this.audioShoot = object.audioShoot;
        this.audioScore = object.audioScore;
        this.audioWin = object.audioWin;




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
                case 'Space':
                    this.generateVaccines();
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

        for (let i = 0; i < 20; i++) {

            this.viruses.push(new Virus(this.ctx));

        }
    }


    generateRandomRolls() {
        for (let i = 0; i < 15; i++) {
            this.rolls.push(new Rolls(this.ctx));
        }

    }
    generateVaccines() {

        this.vaccinesArr.push(new Vaccines(this.ctx, this.player.x + this.player.width / 2, this.player.y))

    }



    shootVacc() {
        this.vaccinesArr.forEach((vacc) => {
            this.audioShoot.play();
            vacc.drawVaccines();
            vacc.updateVaccines();

        })

    }
    clearVaccines() {
        if (this.vaccinesArr.length > 0) {
            this.vaccinesArr.forEach((vacc, i) => {
                if (vacc.y <= 0) {
                    this.vaccinesArr.splice(i, 1);
                }
            })
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
                this.viruses.splice(index, 1);
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
                this.audioScore.play();
                let scoreEl = document.getElementById('scoreElement');
                scoreEl.innerHTML = this.score;



            }

        })
        return collision
    };

    vaccinesCollision() {
        let collision = false
        this.viruses.forEach((virus, indexVirus) => {
            this.vaccinesArr.forEach((vacc) => {
                if (vacc.x < (virus.x + virus.width) &&
                    (vacc.x + vacc.width / 2) > virus.x &&
                    vacc.y < (virus.y + virus.height) &&
                    (vacc.y + vacc.height) > virus.y) {

                    collision = true;
                    this.viruses.splice(indexVirus, 1);

                    this.score2 += 1;
                    this.audioScore.play();
                    let scoreEl2 = document.getElementById('scoreElement2');
                    scoreEl2.innerHTML = this.score2;
                }

            })

        })
        return collision
    };


    clean() {
        this.ctx.clearRect(0, 0, 900, 500);
    }

    update() {
        this.clean();
        this.player.drawPlayer();
        this.shootVacc();
        this.clearVaccines();
        if (this.vaccinesCollision()) {
            if (this.score2 === 5) {
                console.log("you win")
                this.stopRolls();
                this.stopVirus();
                this.cbOver();
                this.audioWin.play();
                return;
            }
        };
        this.drawViruses();
        this.drawRolls();
        if (this.rollsCollision()) {

            if (this.score === 5) {
                console.log("you win")
                this.stopRolls();
                this.stopVirus();
                this.cbOver();
                this.audioWin.play();
                return;
            }
        }

        if (this.virusCollision()) {

            console.log("game over");
            this.stopVirus();
            this.stopRolls();
            this.cbWin();
            console.log("sound")
            this.audioGOver.play();

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