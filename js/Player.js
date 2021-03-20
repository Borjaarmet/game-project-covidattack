class Player {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 0;
        this.y = 500;
        this.w = 150;
        this.h = 150;

        this.speedX = 1;
        this.speedY = 0;

    }
    drawPlayer() {

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(500, 490, 40, 40);
    };

        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(260, 260, 50, 50);
    };


}