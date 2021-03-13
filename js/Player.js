class Player {
    constructor(width, height, image, score, health, ) {
        this.width = width;
        this.height = height;
        this.image = image;
        this.score = score;
        this.health = health;
    }

    drawPlayer() {

    }

    playerMove() {
        document.addEventListener('keydown', function(keyCode) {
            console.log(keyCode);
            switch (keyCode) {
                case 'ArrowLeft':
                    player.x = player.x + 1;
                    break;
                case 'ArrowRight':
                    player.x = player.x - 1;
                    break;
                default:
                    break;
            }
        });
    }
    playerCheckCollision() {

    }
    playerExtraLife() {

    }
    playerScore() {

    }
}