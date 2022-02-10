import {detectCollision} from "./collisionDetector";

export default class Ball {
    constructor(game) {

        this.maxWidth = game.gameWidth;
        this.maxHeight = game.gameHeight;
        this.image = document.getElementById("ball_img");
        this.size = 12;

        this.game = game;
        this.position = {
            x: this.maxWidth / 2,
            y: this.maxHeight / 2
        }
        this.speed = {
            x: 3,
            y: 3
        }

    }

    changeDirectionX() {
        this.speed.x = -this.speed.x;
    }

    changeDirectionY() {
        this.speed.y = -this.speed.y;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //checking collision with left or right wall
        if (this.position.x + this.size >= this.maxWidth || this.position.x <= 0) {
            this.changeDirectionX();
        }

        //checking collision with top wall
        if (this.position.y <= 0) {
            this.changeDirectionY();
        }

        //checking collision with bottom wall
        if (this.position.y + this.size >= this.maxHeight) {
            this.changeDirectionY()
        }

        switch (detectCollision(this, this.game.paddle)) {
            case 0:
                this.changeDirectionX();
                this.position.x = this.position.x - this.size;
                break;
            case 1:
                this.changeDirectionX();
                this.position.x = this.game.paddle.position.x + this.game.paddle.width
                break;
            case 2:
                this.changeDirectionY();
                this.position.y = this.game.paddle.position.y - this.size;
                break;
        }
    }
}