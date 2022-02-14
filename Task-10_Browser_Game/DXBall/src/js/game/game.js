import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./inputHandler";
import {buildLevel, levels} from "./levels";

const GAME_STATE = {
    RUNNING: 0,
    PAUSED: 1,
    MENU: 2,
    GAME_OVER: 3,
    NEW_LEVEL: 4
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gameState = GAME_STATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.bricks = [];
        this.levels = levels;
        this.currentLevel = 0;
        this.playerLives = 3;
        new InputHandler(this);
    }

    start() {

        if (this.gameState !== GAME_STATE.MENU &&
            this.gameState !== GAME_STATE.GAME_OVER &&
            this.gameState !== GAME_STATE.NEW_LEVEL) {
            return;
        }

        this.bricks = buildLevel(this, this.levels[this.currentLevel].structure);
        this.ball.setSpeed(this.levels[this.currentLevel].speed)
        this.playerLives = 3;

        this.gameObjects = [this.ball, this.paddle];
        if (this.gameState === GAME_STATE.GAME_OVER) {
            this.currentLevel = 0;
            this.gameState = GAME_STATE.MENU;
        } else {
            this.gameState = GAME_STATE.RUNNING;
        }


    }

    update(deltaTime) {

        console.log("game state - " + this.gameState);

        console.log("player lives - " + this.playerLives);
        if (this.playerLives === 0) {
            this.gameState = GAME_STATE.GAME_OVER;

        }

        if (this.gameState === GAME_STATE.PAUSED ||
            this.gameState === GAME_STATE.MENU ||
            this.gameState === GAME_STATE.GAME_OVER) {
            return;

        }

        console.log("bricks length - " + this.bricks.length);

        if (this.bricks.length === 0) {
            this.currentLevel++;
            this.gameState = GAME_STATE.NEW_LEVEL
            this.start();
        }

        [...this.gameObjects, ...this.bricks].forEach(gameObject => gameObject.update(deltaTime));
        this.bricks = this.bricks.filter(object => !object.deletionMark);
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach(gameObject => gameObject.draw(ctx));
        if (this.gameState === GAME_STATE.PAUSED) {
            this.drawUIScreen(ctx, "PAUSED", 0.5);
        }

        if (this.gameState === GAME_STATE.MENU) {
            this.drawUIScreen(ctx, "PRESS SPACE BAR TO START", 1);
        }

        if (this.gameState === GAME_STATE.GAME_OVER) {
            this.drawUIScreen(ctx, "GAME OVER", 1)
        }
    }

    togglePause() {
        if (this.gameState === GAME_STATE.MENU || this.gameState === GAME_STATE.GAME_OVER) {
            return;
        }
        this.gameState = this.gameState === GAME_STATE.PAUSED ? GAME_STATE.RUNNING : GAME_STATE.PAUSED;
    }

    drawUIScreen(ctx, text, transparency) {
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0, " + transparency + ")";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(text, this.gameWidth / 2, this.gameHeight / 2);
    }
}