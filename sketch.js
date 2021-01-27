var snake;
var tail=[];
var food;
function setup() {
  frameRate(30);
  createCanvas(600,600);
  snake=new Snake();
  food=new Food(snake);
  tail.push(snake);
  console.log(tail.length);
}

function draw() {
  background(0);
  // snake.move();
  // snake.display();

  
  for(var i=0;i<tail.length;i++){
    if(isHit(0)){
      if(tail[i].vel.x>0){
        console.log("1   1");
        tail.push(new Tail(tail[tail.length-1].pos.x-tail[tail.length-1].width , tail[tail.length-1].pos.y,tail));
        
      }
      else if(tail[i].vel.y<0){
        tail.push(new Tail(tail[tail.length-1].pos.x , tail[tail.length-1].pos.y+tail[tail.length-1].width,tail));
        console.log("1   -1");
      }
      else if(tail[i].vel.x<0){
        tail.push(new Tail(tail[tail.length-1].pos.x+tail[tail.length-1].width , tail[tail.length-1].pos.y,tail));
        console.log("-1   1");
      }
      else if(tail[i].vel.y>0){
        tail.push(new Tail(tail[tail.length-1].pos.x , tail[tail.length-1].pos.y-tail[tail.length-1].width,tail));
        console.log("-1   -1");
      }
      food.spawn();
    }
    // tail[0].move();
    // tail[0].display();
      
    if(i==0){
      tail[i].move();
      tail[i].display();
    }
    else{
      if (tail[i-1].vel.x==0){
        if(tail[i].pos.x<tail[i-1].pos.x){
          tail[i].pos.x+=2;
        }
        else if(tail[i].pos.x>tail[i-1].pos.x){
          tail[i].pos.x-=2;
        }
        if(tail[i].pos.y<tail[i-1].pos.y-tail[i-1].width){
          tail[i].pos.y+=2;       
         }
        else if(tail[i].pos.y>tail[i-1].pos.y+tail[i-1].width){
          tail[i].pos.y-=2;        
        }
        
        console.log("y==0");
      }
      if(tail[i-1].vel.y==0){
        
        
        if(tail[i].pos.y<tail[i-1].pos.y){
            tail[i].pos.y+=2;
          
          
        }
        else if(tail[i].pos.y>tail[i-1].pos.y){
            tail[i].pos.y-=2;
          
          
        }
        if(tail[i].pos.x<tail[i-1].pos.x-tail[i-1].width){
          tail[i].pos.x+=2;
        
        
        }
        else if(tail[i].pos.x>tail[i-1].pos.x+tail[i-1].width){
          tail[i].pos.x-=2;
        
        }
        console.log("x==0");
      }
    }    
      //}
        // if(tail[i].pos.x<tail[i-1].pos.x || tail[i].pos.x-tail[i-1].pos.x>2){
        //   tail[i].pos.x+=2;
        // }
        // else if(tail[i].pos.x>tail[i-1].pos.x || tail[i].pos.x-tail[i-1].pos.x>2){
        //   tail[i].pos.x-=2;
        // }
    
        // else if(tail[i].pos.y<tail[i-1].pos.y || tail[i].pos.y-tail[i-1].pos.y>2){
        //   tail[i].pos.y+=2;
        // }
        // else if(tail[i].pos.y>tail[i-1].pos.y || tail[i].pos.y-tail[i-1].pos.y>2){
        //   tail[i].pos.y-=2;
        // }
        tail[i].display();
      //}
    // for(var j=0;j<tail.length;j++){
      
      
    // }
    //console.log(tail[j].pos.x);
      
  }
  
  food.display();
  
  // if(food.isHit()){
  //   tail.push(new snake())
  // }
  //console.log(food.pos.x,this.food.pos.y);
 // console.log(dist(snake.pos.x,snake.pos.y,food.pos.x,food.pos.y));
}

function keyPressed(){
  if(snake.vel.x==0){
    if(keyCode===LEFT_ARROW){
      snake.moveLeft();
    }
    if(keyCode===RIGHT_ARROW){
      snake.moveRight();
    }
  }
  if(snake.vel.y==0){
    if(keyCode===UP_ARROW){
      snake.moveUp();
    }
    if(keyCode===DOWN_ARROW){
      snake.moveDown();
    }
  }
}
function isHit(index){
  if(dist((food.pos.x),(food.pos.y),(tail[index].pos.x),(tail[index].pos.y))<(food.diameter)){
    return true;
  }
  else{
    return false;
  }
}
//food.pos.x),(food.pos.y),(tail[index].pos.x),(tail[index].pos.y