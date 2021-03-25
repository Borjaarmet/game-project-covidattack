class Vaccines {
    constructor(ctx) {
        this.ctx = ctx;
        this.x;
        this.y;
        this.width = 8;
        this.height = 8;



    }



    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, 8, 8);
    }


}