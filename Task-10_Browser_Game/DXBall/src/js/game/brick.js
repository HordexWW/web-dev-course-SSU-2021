import {detectCollision} from "./collisionDetector";

export default class Brick {
    constructor(game, position) {
        this.game = game;
        this.imageVersions = [
            document.getElementById("brick_img1"),
            document.getElementById("brick_img2"),
            document.getElementById("brick_img3"),
        ];
        this.position = position;
        this.width = 80;
        this.height = 40;

        this.deletionMark = false;
    }

    draw(ctx) {
        ctx.drawImage(this.imageVersions[2], this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        switch (detectCollision(this.game.ball, this)){
            case 0:
                this.game.ball.changeDirectionX();
                this.deletionMark = true;
                break;
            case 1:
                this.game.ball.changeDirectionX();
                this.deletionMark = true;
                break;
            case 2:
                this.game.ball.changeDirectionY();
                this.deletionMark = true;
                break;
        }
    }
}