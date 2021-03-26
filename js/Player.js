class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 500;
        this.y = 420;
        this.width = 40;
        this.height = 40;
        this.distance = 15;
        this.direction = 'right';






    }

    goRight() {
        this.x += this.distance;
        if (this.x > 900) {

            this.x = 0;

        }
    };

    goLeft() {
        this.x -= this.distance;
        if (this.x < 0) {

            this.x = 900; //this.distance - 1;
        }
    };



    drawPlayer() {
        /*this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.x, this.y, 40, 40);*/

        let miImg = new Image();
        miImg.src = "images/player.png";
        this.ctx.drawImage(miImg, this.x, this.y)
    };

    generateVaccines() {
        for (let i = 0; i < 50; i++) {
            this.vaccinesArr.push(new Vaccines(this.ctx));
        }
    }

}