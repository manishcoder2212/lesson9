class Chain{

      constructor(p,q){
     var options={
        bodyA:p,
        pointB:q ,
        length:10
 
     }
this.pointB=q
   this.chain=Constraint.create(options)
   World.add(world,this.chain);
   this.worldSling=loadImage("images/sling1.png")
    this.earthSling=loadImage("images/sling2.png")

}
      

   display() {
      if (this.chain.bodyA ){
 line (this.chain.bodyA.position.x+23,this.chain.bodyA.position.y,this.pointB.x+50,this.pointB.y-10)
        line (this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y-20)
         }

         image(this.worldSling,350,170 )
         image (this.earthSling,320,125)
      }




disconectBird(){
   this.chain.bodyA=null 
}


}

