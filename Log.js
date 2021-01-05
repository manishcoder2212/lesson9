class Log {
    constructor(x, y,height) {
      
      this.body = Bodies.rectangle(x, y, height, 20);
      
   
      World.add(world, this.body);
      this.height = height;
     this.log=loadImage("images/wood2.png")

    }
    display(){
    
      push();
      translate (this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
       fill  ("yellow")  
        image(this.log,0,0,this.height,20)
        pop ();
  };
}