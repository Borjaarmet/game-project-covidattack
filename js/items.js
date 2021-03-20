class Virus {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 40;
        this.height = 40;
        this.x = this.randomX();
        this.y = 0;
        this.speedY = 5;
        this.virusArray = [];



    }

    drawVirus() {
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(this.x, this.y, 40, 40);
        }
        /*generateAllVirus() {
            for (let i = 0; i < 10; i++) {
                this.virusArray.push()

            }

        }*/



    move() {
        this.y = this.y + this.speedY;
        if (this.y > 500) {
            this.y = this.y % 500;
        } else if (this.y < 0) {
            this.y = (this.y + 500) % 500;
        }

    }

    startMovingVirus() {
        setInterval(this.moveVirus.bind(this))
    }

    randomX() {
        return Math.random() * 900;
    }



}



class Rolls {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 40;
        this.height = 40;
        this.x = this.randomX();
        this.y = 0;
        this.speedY = this.speedY();
    }

    drawRolls() {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}