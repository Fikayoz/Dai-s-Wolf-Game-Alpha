import { Game } from "./main.js";

export class Player {
    game: Game;
    width: number
    height: number
    x: number;
    y: number;
    image: HTMLCanvasElement
    speed: number;
    maxSpeed: number;
    vy: number;  //Vertical velocity
    weight: number;  //Force of gravity on the player

    constructor(game: Game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player') as HTMLCanvasElement;
        this.speed = 0;
        this.maxSpeed = 10;
        this.vy = 0;
        this.weight = 1;
    }

    update(input:string[]): void{
        this.x += this.speed
        if (input.includes('ArrowRight')) 
            {this.speed = this.maxSpeed;}
        else if (input.includes('ArrowLeft')) 
            {this.speed = -this.maxSpeed;}
        else
            {this.speed = 0;}

        //Keeping the player within the bounds of the canvas (screen)
        if(this.x < 0) 
            {this.x = 0;}
        if(this.x > this.game.width - this.width) 
            {this.x = this.game.width - this.width;}

        if(this.y < 0) 
            {this.y = 0;}
        if(this.y > this.game.height - this.height) 
            {this.y = this.game.height - this.height;}

        //Handling Vertical movement
        this.y += this.vy;
        if (input.includes('ArrowUp') && this.onGround())
            {this.vy -= 20;}

        this.y += this.vy;

        if (!this.onGround()) 
            {this.vy += this.weight;}
        else
            {this.vy = 0;}
    }

    draw(context: CanvasRenderingContext2D):void{
            context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }

    onGround(): boolean{
        return this.y >= this.game.height - this.height;
    }
}