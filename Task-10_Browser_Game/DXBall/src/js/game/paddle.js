export default class Paddle {
    constructor(game) {
        this.image = document.getElementById("paddle_img");
        this.maxWidth = game.gameWidth;
        this.width = 150;
        this.height = 20;

        this.speed = 0;
        this.maxSpeed = 5;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.position.x += this.speed;
        if (this.position.x < 0){
            this.position.x = 0;
        }
        if (this.position.x > this.maxWidth - this.width) {
            this.position.x = this.maxWidth - this.width
        }
    }
}