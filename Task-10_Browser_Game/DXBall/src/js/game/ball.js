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

        let bottomOfBall = this.position.y + this.size;
        let leftSideOfBall = this.position.x;
        let rightSideOfBall = this.position.x + this.size;
        let topOfBall = this.position.y;

        let topOfPaddle = this.game.paddle.position.y;
        let bottomOfPaddle = this.game.paddle.position.y + this.game.paddle.height
        let leftSideOfPaddle = this.game.paddle.position.x
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

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

        //checking collision with top of paddle
        if (bottomOfBall >= topOfPaddle &&
            this.position.x >= leftSideOfPaddle &&
            this.position.x + this.size <= rightSideOfPaddle) {
            this.changeDirectionY()
        }

        //checking collision with left or right side of paddle
        if (bottomOfBall >= topOfPaddle && topOfBall <= bottomOfPaddle) {
            if (rightSideOfBall >= leftSideOfPaddle && rightSideOfBall <= leftSideOfPaddle + this.size) {
                this.changeDirectionX();
                this.position.x = leftSideOfPaddle - this.size;
            }
            if (leftSideOfBall <= rightSideOfPaddle && leftSideOfBall >= rightSideOfPaddle - this.size) {
                this.changeDirectionX();
                this.position.x = rightSideOfPaddle;
            }
        }


    }
}