import { Player } from "./player.js";
export class Game {
    width;
    height;
    player;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
    }
    update() {
    }
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
});
