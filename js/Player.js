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
        /*this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.x, this.y, 40, 40);*/

        let miImg = new Image();
        miImg.src = "/images/player.png";
        this.ctx.drawImage(miImg, this.x, this.y)
    };

    rotate() {
        this.player.sty
    }




}