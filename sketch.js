function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
   circle ("blue");
  fill ("red");
    
    if (mouseIsPressed){
      circle(mouseX, mouseY, 5, 50);
    }
  }