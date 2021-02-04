class Block
{
  constructor(x, y, width, height) 
  {
    // options
    var options = 
    {
      restitution: 0,
      friction: 1.0,
      density: 1.0
    }
    // make rectangle body
    this.body = Bodies.rectangle(x, y, width, height, options);
    // load image for fading
    this.image = loadImage("black rect image.png")
    // define variables
    this.width = width;
    this.height = height;
    this.visibility = 255;
    // add body to world
    World.add(world, this.body);
  }
  display(color)
  {
    var angle = this.body.angle;
    // make fill the color given
    fill(color)
    // if not hit
    if(this.body.speed < 3)
    {
      // make rect with toppling effect
      push();
      translate(this.body.position.x, this.body.position.y)
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    // if hit
    else
    {
      push();
      // make image fade away
      this.visibility -= 10;
      tint(255,this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
      pop();
      // remove from world
      World.remove(world, this.body);
    }
  }
  score()
  {
    if(this.visibility < 0 && this.visibility > -105)
    {
      score++;
    }
  }
}
