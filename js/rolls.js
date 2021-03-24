class Rolls {
    constructor(img) {

        this.img = img;
        this.width = 40;
        this.height = 40;
        this.x = this.randomX();
        this.y = 0;
        this.speedY = this.randomSpeedY();
        this.interval = undefined;

    }

    draw() {
        /*this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, 40, 40);*/

        let miImg = new Image();
        miImg.src = "images/Rollswc1.jpg";
        this.img.drawImage(miImg, this.x, this.y)
    }

    move() {
        this.y = this.y + this.speedY;
        if (this.y > 500) {
            this.y = this.y % 500;
        } else if (this.y < 0) {
            this.y = (this.y + 500) % 500;
        }
    }

    startMovingRolls() {
        this.interval = setInterval(this.move.bind(this), 100);
    }

    randomX() {
        return Math.random() * 900;
    }
    randomSpeedY() {
        return 8 + Math.random() * (-1);
    }

}