import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./inputHandler";
import {buildLevel, levels} from "./levels";

const GAME_STATE = {
    RUNNING: 0,
    PAUSED: 1
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.gameState = GAME_STATE.RUNNING;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = buildLevel(this, levels[0].structure);

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        new InputHandler(this);
    }

    update(deltaTime) {
        if (this.gameState === GAME_STATE.PAUSED) return;

        this.gameObjects.forEach(gameObject => gameObject.update(deltaTime));
        this.gameObjects = this.gameObjects.filter(object => !object.deletionMark);
    }

    draw(ctx) {
        this.gameObjects.forEach(gameObject => gameObject.draw(ctx));
        if (this.gameState === GAME_STATE.PAUSED) {
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0, 0.7)"
            ctx.fill();

            const TEXT = "PAUSED"
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(TEXT, this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        console.log(this.gameState)
        this.gameState = this.gameState === GAME_STATE.PAUSED ? GAME_STATE.RUNNING : GAME_STATE.PAUSED;
    }
}