var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(800, 800);
    p.noCursor();
  };

  p.windowResized = () => {
    p.resizeCanvas(800, 800);
  };

  p.draw = () => {
    p.colorMode(p.HSB, 360, p.width, p.height);
    p.background(360);

    const angleStep = 360 / 6;

    p.beginShape(p.TRIANGLE_FAN);
    p.vertex(p.width / 2, p.height / 2);
    for (let angle = 0; angle <= 360; angle += angleStep) {
      let vx = p.width / 2 + p.cos(p.radians(angle)) * 400;
      let vy = p.height / 2 + p.sin(p.radians(angle)) * 400;
      p.vertex(vx, vy);
      p.fill(angle, p.mouseX, p.mouseY);
    }

    p.endShape();
  };
};

var sketchP = new p5(sketch);
