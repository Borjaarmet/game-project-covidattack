class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.player = options.player;
        this.items = undefined;
        this.cb = callback;
    }

    drawItems() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect = (20, 20, 30, 30)
    }

    update() {
        this.clean()
        this.player.drawPlayer()
        window.requestAnimationFrame(this.update.bind(this))
    }

    start() {
        window.requestAnimationFrame(this.update.bind(this))
    }
};