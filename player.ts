import { Game } from "./main";

export class Player {
    game: Game;
    width: number
    height: number
    x: number;
    y: number;

    constructor(game: Game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = 0;
    }

    update(): void{

    }

    draw(context: CanvasRenderingContext2D):void{
            context.fillRect(this.x, this.y, this.width, this.height)
        }
}