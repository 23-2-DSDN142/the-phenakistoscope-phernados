const SLICE_COUNT = 6;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("leaf" , "png");

}
//exprement
function setup_layers(pScope){

  new PLayer(null, "#ff9999");  //lets us draw the whole circle background, ignoring the boundaries

  var expL1 = new PLayer(leaf);
  expL1.mode( SWIRL(5) );
  expL1.set_boundary( 200, 1000 );

  var expBOUND = new PLayer(squares);
  expBOUND.mode( RING );
  expBOUND.set_boundary( 0, 400 );
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function leaf(x, y, animation, pScope){

  scale(0.3);
  pScope.draw_image("leaf",x,y);

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
