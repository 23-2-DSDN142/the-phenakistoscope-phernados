const SLICE_COUNT = 10;

function setup_pScope(pScope) {
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("tadfog2", "png");
  pScope.load_image("phog", "png");
  pScope.load_image("fly", "png");
  // pScope.load_image_seq

}
//exprement

function setup_layers(pScope) {

  new PLayer(null, "#396acc"); //lets us draw the whole circle background, ignoring the boundaries
  
  var waterlayer = new PLayer(water); //background
  waterlayer.set_boundary(0, 800);

  var deadPhogL = new PLayer(deadPhog);
  deadPhogL.mode(SWIRL(2));
  deadPhogL.set_boundary(400, 1000);

  var expBOUND = new PLayer(lillypad); 
  expBOUND.mode(RING);
  expBOUND.set_boundary(0, 800);

  var phogL = new PLayer(phog);
  phogL.mode(RING);
  phogL.set_boundary(0, 800);

  var expBOUND1 = new PLayer(corn); //small lillypads 
  expBOUND1.mode(RING);
  expBOUND1.set_boundary(0, 800);

  var flyL = new PLayer(fly);
  flyL.mode(RING);
  flyL.set_boundary(0, 1000,);
}

function deadPhog(x, y, animation, pScope) {


  scale(0.45);
  var deadPhogx = animation.wave(1) * 500
  pScope.draw_image("tadfog2", deadPhogx, y);

}


 
function fly (x,y,animation, pScope)  {

var flyx = animation.frame * 20
pScope.draw_image("fly", flyx, -600 -10 *animation.wave());
}



function phog(x, y, animation, pScope) {

  scale(0.65);
  var phogx = animation.wave(1) * 100
  console.log("here")
  pScope.draw_image("phog", phogx, - 500 -300 *animation.wave());

}



function lillypad(x, y, animation, pScope) {
  if (animation.frame == 0) {

    noStroke()
    fill("#437836")
    arc(x, y, 900, 800, 20, 340); // slit in lillypad
  }
}

function water(x, y, animation, pScope) {
  if (animation.frame == 0) {
    fill("#509bc7")
    noStroke()
  ellipse (0,0,1600)
  fill("#73c1c7")
  ellipse (0,0,1200)
  }
}

function corn(x, y, animation, pScope){
  fill("#7ea63f");
  noStroke()
  push();
  translate(x, y-900);
  rotate(360*animation.frame);
  arc(x, y, 150, 150, 20, 340 );
  pop();
}