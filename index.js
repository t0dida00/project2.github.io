const canvas = document.getElementById("target")
const c = canvas.getContext("2d")

canvas.width=700
canvas.height= window.innerHeight

const frog_size_x= 50
const frog_size_y=canvas.height/14

class Background{
    constructor(x,y,width,height,color)
    {
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.color=color
    }

    update()
    {}

    draw(){
        c.beginPath()
        c.rect(this.x,this.y,this.width,this.height,this.color)
        c.fillStyle=this.color
        c.fill()
    }
  
}

class Frog{
    constructor(x,y,w,h)
    {
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color='red'
    }
    moveUp() {
        // when key up arrow is pressed,
        // then decrease y coordinate by the amout of movementSpeedY value
        console.log(this.x,this.y)
        
        if(this.y   > this.h)
        {
        this.y = this.y - this.h;
       
        }
      }

      moveDown() {
        if(this.y + frog_size_y < canvas.height)
        {
        this.y = this.y + this.h;
       
        }
       
      }

      moveLeft() {
        if(this.x > 0)
        {
        this.x = this.x - this.w;
       
        }
      }

      moveRight() {
        if(this.x +frog_size_x < canvas.width)
        {
        this.x = this.x + this.w;
       
        }

      }
    draw(){
        c.beginPath()
        c.rect(this.x,this.y,this.w,this.h)
        c.fillStyle=this.color
        c.fill()
    }
    update()
    {   
        
    }
    
}

const frog= new Frog(Math.floor(Math.random() * 14)*frog_size_x, canvas.height - frog_size_y , frog_size_x, frog_size_y)

const gameObjectStorage= [];
gameObjectStorage.push(frog)

function updateScreen() {
    // clear the canvas
    c.clearRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < gameObjectStorage.length; i++) {
      gameObjectStorage[i].update();
      gameObjectStorage[i].draw();
    }

    window.requestAnimationFrame(updateScreen);
}
window.requestAnimationFrame(updateScreen);



window.addEventListener('keydown', function(event){
    console.log(event.code)
    switch(event.code) {
      case "ArrowLeft":
        frog.moveLeft();
        break;
      case "ArrowUp":
        frog.moveUp();
        break;
      case "ArrowRight":
        frog.moveRight();
        break;
      case "ArrowDown":
        frog.moveDown();
        break;
    }
  });