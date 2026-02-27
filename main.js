import { Player } from "./player.js";
import { InputHandler } from "./input.js";
export class Game {
    width;
    height;
    player;
    input;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler();
    }
    //Update function to update the screen each frame
    update() {
        this.player.update(this.input.keys);
    }
    //Creates the canvas
    draw(context) {
        this.player.draw(context);
    }
}
window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    const game = new Game(canvas.width, canvas.height);
    (game);
    console.log(game);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});
