class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 500;
        this.y = 420;
        this.width = 40;
        this.height = 40;
        this.distance = 10;
        this.direction = 'right';

    }

    goRight() {
        this.x += this.distance;
        if (this.x >= 860) {
            console.log("collides wall")
        }

    };

    goLeft() {
        this.x -= this.distance;
        if (this.x <= 40) {
            console.log("collides wall")
        }

    };

    drawPlayer() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.x, this.y, 40, 40);
    };

    collidesWith(virus) {
        return (
            this.x < virus.x + virus.width &&
            this.x + this.width > virus.x &&
            this.y < virus.y + virus.height &&
            this.y + this.height > virus.y
        );

    };

}