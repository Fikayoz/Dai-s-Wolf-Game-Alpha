import { Player } from "./player.js";
import { InputHandler } from "./input.js";

export class Game {
        width: number;
        height: number;
        player: Player;
        input: InputHandler;
        
        constructor(width: number, height: number){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update():void{
            this.player.update();
        }
        draw(context: CanvasRenderingContext2D):void{
            this.player.draw(context);
        }
    }

window.addEventListener('load', function(){
    const canvas: HTMLCanvasElement = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = 500;
    canvas.height = 500;

    const game: Game = new Game(canvas.width, canvas.height);(game)
    console.log(game);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();

});