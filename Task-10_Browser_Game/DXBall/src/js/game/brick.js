export default class Brick {
    constructor(game, position) {
        this.imageVersions = [
            document.getElementById("brick_img1"),
            document.getElementById("brick_img2"),
            document.getElementById("brick_img3"),
        ];
        this.position = position;
        this.width = 60;
        this.height = 30;
    }

    draw(ctx) {
        ctx.drawImage(this.imageVersions[2], this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

    }
}