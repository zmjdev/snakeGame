function Tail(x_,y_,arr){
    this.pos=createVector(x_,y_);
    this.height=30;
    this.width=30;
    this.speed=2;
    this.tails=arr;
    this.count=0;
    this.vel=createVector(this.tails[0].vel.x,this.tails[0].vel.y);

    // this.move=function(){
    //     // if(this.vel.x+!0){
    //     //     this.tails[0].pos.x+=this.vel.x;
    //     // }
    //     // else if(this.vel.y!=0){
    //     //     this.tails[0].pos.y+=this.vel.y;
    //     // }
    //     //this.vel=createVector(this.tails[0].vel.x,this.tails[0].vel.y);
    //     if(this.count<=)
    //     if(this.pos.x<this.tails[this.tails.length-2].pos.x){
    //         this.pos.x+=2
    //     }
    //     else if(this.pos.x>this.tails[this.tails.length-2].pos.x){
    //         this.pos.x-=2
    //     }
        
    //     if(this.pos.y<this.tails[this.tails.length-2].pos.y){
    //         this.pos.y+=2
    //     }
    //     else if(this.pos.y>this.tails[this.tails.length-2].pos.y){
    //         this.pos.y-=2
    //     }
    
    //     // if(this.vel.x>0){
    //     //     while(this.pos.x!=this.tails[this.tails.length-2].pos.x){
    //     //         this.pos.x+=2;
    //     //        // this.pos.x+=this.tails[this.tails.length-2].vel.x;
    //     //     }            
    //     //    // this.pos.x+=this.tails[this.tails.length-2].pos.x-this.width;
    //     // }
    //     // else if(this.vel.y<0){
    //     //     while(this.pos.y!=this.tails[this.tails.length-2].pos.y){
    //     //         this.pos.y-=2;
    //     //         //this.pos.y+=this.tails[this.tails.length-2].vel.y;
    //     //     }  
    //     //     //this.pos.y+=this.tails[this.tails.length-2].pos.y+this.height;
    //     // }
    //     // else if(this.vel.x<0){
    //     //     while(this.pos.x!=this.tails[this.tails.length-2].pos.x){
    //     //         this.pos.x-=2;

    //     //         //this.pos.x+=this.tails[this.tails.length-2].vel.x;
    //     //     }  
    //     // }
    //     // else if(this.vel.y>0){
    //     //     while(this.pos.y!=this.tails[this.tails.length-2].pos.y){
    //     //         this.pos.y+=2;

    //     //         //this.pos.y+=this.tails[this.tails.length-2].vel.y;
    //     //     } 
    //     // }
    //     // this.tails[this.tails.length-2].pos.x+=this.pos.x;
    //     // this.tails[this.tails.length-2].pos.y+=this.pos.y;
    //     console.log(this.pos.x);
    //     console.log(this.tails[this.tails.length-2].pos.x);
    // }
    this.display=function(){
        fill(0,255,0);
        stroke(255);
        rectMode(CENTER);
        rect(this.pos.x,this.pos.y,this.width,this.height);
    }
}