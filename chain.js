class Chain
{
    constructor(bodyA, point)
    {
        // options
        var options =
        {
            bodyA: bodyA,
            pointB: point,
            length: 10,
            stiffness: 0.05
        }
        // create constraint
        this.chain = Matter.Constraint.create(options);
        this.pointB = point;
        // add to world
        World.add(world, this.chain);
    }
    // to release object
    fly()
    {
        this.chain.bodyA = null;
    }
    // to bring back object
    attach(body)
    {
        this.chain.bodyA = body;
    }
    display()
    {   
        // if bodyA is attached
        if(this.chain.bodyA)
        {
            // make line to show constraint
            strokeWeight(3);
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, 
            this.pointB.x, this.pointB.y);
        }
    }
}