function Food(snake_){
    this.pos=createVector(random(0,width),random(0,height));
    this.diameter=25;
    this.snake=snake_
    this.display=function(){
        fill(255,0,0);
        ellipseMode(CENTER);
        ellipse(this.pos.x,this.pos.y,this.diameter);
    }
    this.spawn=function(){
        //if(this.isHit()){
          //  console.log("im in");
            this.pos=createVector(random(0,width),random(0,height));
        //}
    }
    // this.isHit=function(){
    //     if(dist(this.pos.x,this.pos.y,this.snake.pos.x,this.snake.pos.y)<(this.diameter)){
    //     return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
}