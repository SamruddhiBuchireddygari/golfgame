class BallClass{

    constructor(x,y,width,height){
        var options = {
            'restitution': 0.5,
            'density': 1.0,
            'friction' : 1.0,
            'isStatic':true
        }
this.ball = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height = height;
this.image=loadImage("sprites/ball2.png");
World.add(world,this.ball);

    }
    display(){
        var angle = this.ball.angle;
        push()
        translate(this.ball.position.x, this.ball.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop();
    }
}