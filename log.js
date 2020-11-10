class Log{
    constructor(x,y,h,angle){
        var options={
            restitution:0.8,
            friction:1.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,20,h,options)
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body,angle);

        World.add(myworld, this.body);
    }
    
    display(){
            
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(10);
            stroke("blue");
            fill("white");
            rect(0,0, this.width, this.height);
            pop();
    
    }
    }
    
    