class Paper{
  constructor(x,y,r)  {
     var options={
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:0.2
     } 
     
     this.body=Bodies.circle(x,y,r,options)
     this.r=r
     this.image =loadImage("paper.png");

     World.add(world,this.body)
  }
  display()
  {
    var paperpos =this.body.position;
    push() 
    translate(paperpos.x,paperpos.y)
    rotate(this.body.angle)

image(this.image,0,0,this.r,this.r)
    pop()
  }
}