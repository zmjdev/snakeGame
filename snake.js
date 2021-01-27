function Snake(){
    this.width=30;
    this.height=30;
    this.pos=createVector(width/2,height/2);
    this.speed=2;
    this.vel=createVector(2,0);
    this.display=function(){
        fill(0,255,0);
        stroke(255);
        rectMode(CENTER);
        rect(this.pos.x,this.pos.y,this.width,this.height);
    }
    this.move=function(){
        this.pos.x+=this.vel.x;
        this.pos.y+=this.vel.y;
        if(this.pos.x-this.width/2>=width){
            this.pos.x=this.width/2;
        }else if(this.pos.x+this.width/2<=0){
            this.pos.x=width-this.width/2;
        }
        
        if(this.pos.y-this.width/2>=height){
            this.pos.y=this.width/2;
        }
        else if(this.pos.y+this.width/2<=0){
            this.pos.y=height; 
        }
    }
    this.moveLeft=function(){
        this.vel=createVector(-this.speed,0);
    }
    this.moveRight=function(){
        this.vel=createVector(this.speed,0);
    }
    this.moveUp=function(){
        this.vel=createVector(0,-this.speed);
    }
    this.moveDown=function(){
        this.vel=createVector(0,this.speed);
    }
}