class Bird {
    constructor(m, a,n,i) {
      var order1 = {
      
        restitution:1,
        density:1.5,
        friction: 1.0
      }
      this.body= Bodies.rectangle(m, a, n, i, order1);
      this.mybird=loadImage("images/bird.png")
      this.worldsmoke=loadImage("images/smoke.png")
    
      World.add(world, this.body);
      this.width = n;
      this.height = i;

      this.brotherArray=[]

      var value=[this.body.position.x,this.body.position.y]
     this. brotherArray.push(value)
    }
    
    display(){
      //this.body.position.x=mouseX
      //this.body.position.y=mouseY
      push ();
     translate(this.body.position.x,this.body.position.y) 
     rotate (this.body.angle)
     rectMode(CENTER)
      fill  ("red")  
     image (this.mybird,0,0,this.width,this.height)
    for(var a=0    ; a<this.brotherArray.length    ;a=a+1   ){

    image(this.worldsmoke,this.brotherArray[a][0],this.brotherArray[a][1])


    }
     pop ();
     
    }
  };
  