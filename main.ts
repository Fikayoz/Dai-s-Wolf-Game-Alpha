export class Game {
        width: number;
        height: number;
        
        constructor(width: number, height: number){
            this.width = width;
            this.height = height;
        }
        update():void{

        }
        draw():void{

        }
    }

window.addEventListener('load', function(){
    const canvas: HTMLCanvasElement = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = 500;
    canvas.height = 500;

});