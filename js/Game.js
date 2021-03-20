class Game {
    constructor(object) {
        this.ctx = object.ctx;
        this.player = object.player;
        this.virus = object.virus;

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



    update() {
        this.clean();
        this.player.drawPlayer();
        this.virus.drawVirus();

        window.requestAnimationFrame(this.update.bind(this))
    }

    clean() {

        this.ctx.clearRect(0, 0, 900, 500);
        console.log("works")

    }

    start() {
        this.assignControlsToKeys();


        window.requestAnimationFrame(this.update.bind(this))
    }
};