import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./input";
import {buildLevel, levels} from "./levels";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = buildLevel(this, levels[0].structure);

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