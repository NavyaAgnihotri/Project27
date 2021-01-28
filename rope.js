class Rope{
    constructor(bodyA , pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:0.7,
            stiffness:0.6
        }
        this.pointB=pointB;
       this.rope=Constraint.create(options);
       World.add(world,this.rope);

    }
    display(){
      var  pointA=this.rope.bodyA.position;
     var    pointB=this.pointB;
        stroke("white");
        strokeWeight(6);
        line(pointB.x , pointB.y , pointA.x , pointA.y);
    }
}