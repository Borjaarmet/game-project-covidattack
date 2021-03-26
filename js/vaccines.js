class Vaccines {
    constructor(ctx, positionXInitial, positionYInitial) {
        this.ctx = ctx;
        this.x = positionXInitial;
        this.y = positionYInitial;
        this.width = 8;
        this.height = 8;



    }

    drawVaccines() {
        //this.ctx.fillStyle = "black";
        //this.ctx.fillRect(this.x, this.y, 8, 8);

        let miImg = new Image();
        miImg.src = "images/syringe (2).jpg";
        this.ctx.drawImage(miImg, this.x, this.y)
    }
    updateVaccines() {
        setInterval(() => {
            this.y -= 2;
        }, 150)

    }

}