export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.maxWidth = gameWidth;
        this.maxHeight = gameHeight;
        this.image = document.getElementById("ball_img");
        this.size = 12;
        this.position = {
            x: this.maxWidth / 2,
            y: this.maxHeight / 2
        }
        this.speed = {
            x: 4,
            y: 4
        }

    }

    changeDirectionX (){
        this.speed.x = - this.speed.x;
    }

    changeDirectionY (){
        this.speed.y = - this.speed.y;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if( this.position.x + this.size >= this.maxWidth || this.position.x <= 0) {
            this.changeDirectionX();
        }
        if( this.position.y + this.size >= this.maxHeight || this.position.y <= 0) {
            this.changeDirectionY();
        }
    }
}