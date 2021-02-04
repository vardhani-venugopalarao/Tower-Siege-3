class Ground 
{
    constructor(x, y, width, height)
    {
      // make options
      var options = 
      {
        isStatic: true
      }
      // make rectangle body
      this.body = Bodies.rectangle(x, y, width, height, options);
      // define variables
      this.width = width;
      this.height = height;
      // add to world
      World.add(world, this.body);
    }
    display()
    {
      // make rect
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
