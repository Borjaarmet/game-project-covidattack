class Items {
    constructor(ctx, x, y, w, h) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speedX = 0;
        this.speedY = 1;

    }
}
class Virus extends Items {
    constructor(kill, ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    generateVirus() {

    }
}

class Rolls extends Items {
    constructor(score, ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    generateRolls() {

    }
}

class vaccines extends Items {
    constructor(shoot, ctx, x, y, w, h) {
        super(ctx, x, y, w, h)

    }

    generateVaccines() {

    }
}

class Masks extends Items {
    constructor(health, ctx, x, y, w, h) {
        super(ctx, x, y, w, h)

    }

    generateMasks() {

    }
}