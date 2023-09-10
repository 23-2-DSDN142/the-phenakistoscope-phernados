const SLICE_COUNT = 10;

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("deadPhog", "png");
  pScope.load_image("phog", "png");


}
//exprement

function setup_layers(pScope) {

  new PLayer(null, "#4a3194"); //lets us draw the whole circle background, ignoring the boundaries
  
  var expBOUND = new PLayer(lillypad); //lillypad
  expBOUND.mode(RING);
  expBOUND.set_boundary(0, 800);

  var deadPhogL = new PLayer(deadPhog);
  deadPhogL.mode(SWIRL(1));
  deadPhogL.set_boundary(600, 1000);

  var phogL = new PLayer(phog,);
  phogL.mode(RING);
  phogL.set_boundary(0, 800,);
}

function phog(x, y, animation, pScope) {

  scale(0.65);
  var phogx = animation.wave(1) * 100
  console.log("here")
  pScope.draw_image("phog", phogx, -700);

}

function deadPhog(x, y, animation, pScope) {


  scale(0.6);
  var deadPhogx = animation.wave(1) * 300
  pScope.draw_image("deadPhog", deadPhogx, y);

}

function squares(x, y, animation, pScope) {


  // this is how you set up a background for a specific layer
  //  let angleOffset = (360 / SLICE_COUNT) / 2
  //  let backgroundArcStart = 270 - angleOffset;
  //  let backgroundArcEnd = 270 + angleOffset;

  //  fill(66, 135, 245)
  //  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  //  fill(255)
  // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}

function lillypad(x, y, animation, pScope) {
  if (animation.frame == 0) {
    fill("#7d47bf")
  ellipse (0,0,1600)
  fill("#a05fb8")
  ellipse (0,0,1200)
    fill("#437836")
    arc(x, y, 900, 800, 20, 360); // slit in lillypad
  }
}