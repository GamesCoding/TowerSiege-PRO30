class Block4 extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("wood1.png");
  }

  display(){
    if(this.body.speed<3){
      super.display();
  
      var boxPos=this.body.position;
  
      push();
      translate(boxPos.x, boxPos.y);
      rectMode(CENTER)
      strokeWeight(2);
      fill("pink");
      rect(0,0,this.width,this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
  
        push();
  
        this.visibility = this.visibility-5;
  
        pop();
      }
  }

}
