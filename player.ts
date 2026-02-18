import { Game } from "./main.js";

export class Player {
    game: Game;
    width: number
    height: number
    x: number;
    y: number;
    image: HTMLCanvasElement

    constructor(game: Game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player') as HTMLCanvasElement;
    }

    update(): void{
        this.x++;
    }

    draw(context: CanvasRenderingContext2D):void{
            context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
}