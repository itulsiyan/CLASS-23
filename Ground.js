class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;

       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;

       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);

    }
}
