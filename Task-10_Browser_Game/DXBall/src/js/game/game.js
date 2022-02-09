import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./input";
import Brick from "./brick";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = [];

        for (let i = 1 ; i < (this.gameWidth  / 60) -2 ; i++) {
            bricks.push(new Brick(this, {x: i * 60, y: 30}))
        }

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        this.gameObjects.forEach(gameObject => gameObject.update(deltaTime));
    }

    draw(ctx) {
        this.gameObjects.forEach(gameObject => gameObject.draw(ctx));
    }


}