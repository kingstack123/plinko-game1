class Plinko {
      constructor(x,y) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;        
        push();
        fill(255);
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        ellipse(0, 0, 10, 10)
        pop();
    } 
}