class Game {
    constructor(object) {
        this.ctx = object.ctx;
        this.player = object.player;
        this.virus = object.virus;
        this.viruses = [];
        this.virusstatus = true;
        this.rolls = [];
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
        for (let i = 0; i < 7; i++) {
            this.viruses.push(new Virus(this.ctx));
        }
    }

    generateRandomRolls() {
        for (let i = 0; i < 4; i++) {
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
        this.viruses.forEach((virus) => {
            if (this.player.x < (virus.x + virus.width) &&
                (this.player.x + this.player.width / 2) > virus.x &&
                this.player.y < (virus.y + virus.height) &&
                (this.player.y + this.player.height) > virus.y && this.virusstatus === true) {
                this.virusstatus = false;
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


        if (this.virusCollision()) {
            console.log("collides virus")
            printGameOver();
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