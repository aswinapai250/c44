var bg,bg2,form,system,code,security;
var score=0;



function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(0);
  
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  text("SYMBOL OF OXYGEN",100,70);
  text("SYMBOL OF HYDROGEN",690,180);
  text("FORMULA OF WATER",100,280)

  if(score === 3) {
    clear()
    background(0,250,0)
    fill("BLACK")
    textSize(40);
    text("YOU ARE A MASTER",250, 200);
    
  }

  drawSprites()
}