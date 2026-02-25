let state = 'start'
let gameStartTime;
let showWarning = true;
let timerStarted = false;
let timerStoppedTime = 0;
let gameCompleted = false;
let clickCount = 0;

let Small01Hover = {
  r: 205,
  g: 255,
  b: 255,
  a: 240
}
let Small02Hover = {
  r: 57,
  g: 160,
  b: 237,
  a: 240
} //205, 255, 255
let Long01Hover = {
  r: 0,
  g: 165,
  b: 207,
  a: 240 
} // 13, 113, 180
let Long02Hover = {
  r: 144,
  g: 194,
  b: 231,
  a: 240
} //144, 194, 23144x


let Small01After = { //0,255,0 is lime green
  r: 0,
  g: 255,
  b: 0,
  a: 300
} //94, 137, 85, 300
let Small02After = { //255,0,0 is red
  r: 255,
  g: 0,
  b: 0,
  a: 300
} //155, 222, 172, 300
let Long01After = { //0,0,225 is blue
  r: 0,
  g: 0,
  b: 255,
  a: 300
} //180, 231, 206, 300
let Long02After = { //255,255,0 is yellow
  r: 255,
  g: 255,
  b: 0,
  a: 300
} //89, 169, 106, 300


function setup() {
  createCanvas(700, 400);
    gameStartTime = millis(); // Record when the game starts
}
function draw() {
  background("rgb(0,0,0)");

  
//     //displays the x and y position of the mouse on the canvas
// fill(205,255,255)
// //white text
// text`${mouseX}, ${mouseY}`, 20, 20);
  
  //displays the x and y position of the mouse on the canvas
  fill(205,255,255,55)
  textSize(10);
  textAlign(LEFT,CENTER);
  text(mouseX + ", " + mouseY, 342, 387);
  text(mouseX + ", " + mouseY, 663, 255);
  text(mouseX + ", " + mouseY, 120, 25);
  text(mouseX + ", " + mouseY, 105, 162);
  text(mouseX + ", " + mouseY, 360, 157);
  text(mouseX + ", " + mouseY, 25, 322);
  text(mouseX + ", " + mouseY, 526, 84);
  text(mouseX + ", " + mouseY, 225, 158);
  text(mouseX + ", " + mouseY, 165, 290);
  text(mouseX + ", " + mouseY, 440, 18);
  text(mouseX + ", " + mouseY, 550, 145);
  text(mouseX + ", " + mouseY, 498, 305);
  
  
  // line - teh ecosystem 
  //stroke("rgb(52,168,213)"); // color for line
  stroke(52,168,213,40); // color for line
  strokeWeight(2); // Line thickness
  noFill();
  
  // Set the line to be dashed
  drawingContext.setLineDash([5, 3]); // dash length, gap length
  
  //in order - same order as circles - start at top left
  beginShape();
  vertex(277,404);
  vertex(337,387);
  vertex(356,157);
  vertex(399,15);
  vertex(434,18);
  vertex(521,82);
  vertex(670,151);
  vertex(658,255);
  vertex(625,330);
  vertex(603,330);
  vertex(529,139);
  vertex(418,96);
  vertex(288,90);
  vertex(115, 25);
  vertex(102, 0);
  vertex(0, 0); //back to very top
  vertex(0, 219); //off screen left middle
  vertex(98, 161);
  vertex(219, 229);
  vertex(257,296);
  vertex(370,330);
  vertex(660,320);
  vertex(700,340); // onto screen bottom right
  vertex(700,8); //off the screen top right
  vertex(630,40);
  vertex(630,40);
  vertex(545,140);
  vertex(580,240);
  vertex(490,300);
  vertex(320,280);
  vertex(290,190);
  vertex(220,160);
  vertex(100,200);
  vertex(50,150);
  vertex(30,90);
  vertex(200,30);
  vertex(300,40);
  vertex(550,40);
  vertex(670,90);
  vertex(645,195);
  vertex(430,250);
  vertex(405,370);
  vertex(210,350);
  vertex(160,290);
  vertex(60,250);
  vertex(20,320);
  vertex(0,330); // off the screen bottom left
  endShape();
  
  // Reset to solid line for rest of the shapes
  drawingContext.setLineDash([]);
  
  //Short Form - mimicing cellphones
  drawLayerOne()
  
  //Long Form - mimicing desktops
  drawLayerTwo()
  
  //Circles
  drawLayerThree()
  
  //Short Form - mimicing cellphones - transparent
  drawLayerFour()
  
  //Long Form - mimicing desktops - transparent
  drawLayerFive()
  
  // this checks of the game is over
  if (allRectanglesClicked() && !gameCompleted) {
    gameCompleted = true;
    timerStoppedTime = millis();
  }
  
  // timer 
  let elapsedTime;
  if (!timerStarted) {
    // Before game starts
    fill(205, 255, 255);
    textAlign(CENTER, TOP);
    textSize(10);
    text("00:00:00", width/2, 10);
  } else {

    if (gameCompleted) {
      elapsedTime = timerStoppedTime - gameStartTime;
    } else {
      elapsedTime = millis() - gameStartTime;
    }
    
if (timerStarted) {
  fill(205, 255, 255);
  textAlign(LEFT, TOP);
  textSize(10);
  text("Click Counter: " + clickCount, 10, 10);
}
    
    let minutes = floor(elapsedTime / 60000);
    let seconds = floor((elapsedTime % 60000) / 1000);
    let milliseconds = floor((elapsedTime % 1000) / 10);
    
    fill(205, 255, 255);
    textAlign(CENTER, TOP);
    textSize(10);
    text(nf(minutes, 2) + ":" + nf(seconds, 2) + ":" + nf(milliseconds, 2), width/2, 10);
  }
  
  
  // turn off all devices layered ontop of everything
  if (showWarning) {
    //fill(0, 0, 0, 130); //transparent overlay
    //fill(45, 48, 71,140);
    fill(48, 48, 54, 160);
    rect(0, 0, width, height);
    
    // Turn off al devices
    fill(205,255,255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("TURN OFF ALL  THE DEVICES", width/2, height/2 +85);
    
    // Click to Start 
    fill(205,255,255);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(' "Click to start" ' , width/2, height/2 + 100);
  }

  // ── GAME COMPLETED OVERLAY ──────────────────────────────────────────────────
  if (gameCompleted) {
    // Dark overlay
    fill(48, 48, 54, 200);
    noStroke();
    rect(0, 0, width, height);

    // Final time
    let elapsedFinal = timerStoppedTime - gameStartTime;
    let mFinal = floor(elapsedFinal / 60000);
    let sFinal = floor((elapsedFinal % 60000) / 1000);
    let msFinal = floor((elapsedFinal % 1000) / 10);

    fill(205, 255, 255);
    textAlign(CENTER, CENTER);

    textSize(20);
    text("ALL DEVICES OFF", width / 2, height / 2 - 55);

    textSize(13);
    text(
      "Time: " + nf(mFinal, 2) + ":" + nf(sFinal, 2) + ":" + nf(msFinal, 2) +
      "   Clicks: " + clickCount,
      width / 2, height / 2 - 25
    );

    // ── Restart button ──────────────────────────────────────────────────────
    let btnW = 140;
    let btnH = 38;
    let btnX = width / 2 - btnW / 2;
    let btnY = height / 2 + 10;

    let btnHover =
      mouseX > btnX && mouseX < btnX + btnW &&
      mouseY > btnY && mouseY < btnY + btnH;

    // Button fill: brighter on hover
    if (btnHover) {
      fill(205, 255, 255, 230);
    } else {
      fill(52, 168, 213, 180);
    }
    noStroke();
    rect(btnX, btnY, btnW, btnH, 6); // rounded corners

    // Button label
    if (btnHover) {
      fill(0, 0, 0);
    } else {
      fill(205, 255, 255);
    }
    textSize(13);
    textAlign(CENTER, CENTER);
    text("RESTART", width / 2, btnY + btnH / 2);
  }
}


// const rect1 - rect4 - Long Form - transparent
const rect1 = {
  x: 80,
  y: 220,
  speed: -2,
  frozen: false,
  clicked: false,
  initX: 80,
  initY: 220,
  initSpeed: -2
}
const rect2 = {
  x: 90,
  y: 20,
  speed: 1,
  frozen: false,
  clicked: false,
  initX: 90,
  initY: 20,
  initSpeed: 1
}
const rect3 = {
  x: 300,
  y: 30,
  speed: 3,
  frozen: false,
  clicked: false,
  initX: 300,
  initY: 30,
  initSpeed: 3
}
const rect4 = {
  x: 500, 
  y: 200,
  speed: 5,
  frozen: false,
  clicked: false,
  initX: 500,
  initY: 200,
  initSpeed: 5
}
function allRectanglesClicked() {
  return rect1.clicked && rect2.clicked && rect3.clicked && rect4.clicked &&
         rect5.clicked && rect6.clicked && rect7.clicked && rect8.clicked &&
         rect9.clicked && rect10.clicked && rect11.clicked && rect12.clicked &&
         rect13.clicked && rect14.clicked && rect15.clicked && rect16.clicked &&
         rect17.clicked && rect18.clicked && rect19.clicked;
}

function drawLayerFive(){  //Long Form - mimicing desktops - transparent
  //fill(29, 13, 162, 90);
  fill(6,31,205,90);
  noStroke();
  
  let allClicked = allRectanglesClicked();
  
let isHovering = 
      mouseX > rect1.x &&
      mouseX < rect1.x + 150 &&
      mouseY > rect1.y &&
      mouseY < rect1.y + 90;
  
  if(allClicked) {
      fill(Long01After.r, Long01After.g, Long01After.b, Long01After.a);  
  } else if(rect1.clicked || isHovering) {
      fill(Long01Hover.r, Long01Hover.g, Long01Hover.b, Long01Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect1.frozen) {
  rect1.y += rect1.speed;
  if(rect1.y > height - 150){
    rect1.speed = rect1.speed * -1;
  }
  if(rect1.y < 0){
    rect1.speed = rect1.speed * -1;
  }
}
//rect(80,220,150,90);
rect(rect1.x, rect1.y, 150, 90);
  
  let isHoveringRect2 = 
      mouseX > rect2.x &&
      mouseX < rect2.x + 150 &&
      mouseY > rect2.y &&
      mouseY < rect2.y + 90;
  
  if(allClicked) {
      fill(Long01After.r, Long01After.g, Long01After.b, Long01After.a);
  } else if(rect2.clicked || isHoveringRect2) {
      fill(Long01Hover.r, Long01Hover.g, Long01Hover.b, Long01Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect2.frozen) {
  rect2.x += rect2.speed;
  if(rect2.x > width - 90){
    rect2.speed = rect2.speed * -1;
  }
  if(rect2.x < 0){
    rect2.speed = rect2.speed *-1;
  }
}
//rect(90,20,90,50);
rect(rect2.x, rect2.y, 90, 50);
  
    let isHoveringRect3 = 
      mouseX > rect3.x &&
      mouseX < rect3.x + 150 &&
      mouseY > rect3.y &&
      mouseY < rect3.y + 90;
  
  if(allClicked) {
      fill(Long01After.r, Long01After.g, Long01After.b, Long01After.a);
  } else if(rect3.clicked || isHoveringRect3) {
      fill(Long01Hover.r, Long01Hover.g, Long01Hover.b, Long01Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect3.frozen) {
  rect3.x += rect3.speed;
  if(rect3.x > width - 130){
    rect3.speed = rect3.speed *-1;
  }
  if(rect3.x < 0){
    rect3.speed = rect3.speed *-1;
  }
}
//rect(300,30,130,70);
rect(rect3.x, rect3.y, 130, 70);
  
    let isHoveringRect4 = 
      mouseX > rect4.x &&
      mouseX < rect4.x + 150 &&
      mouseY > rect4.y &&
      mouseY < rect4.y + 90;
  
  if(allClicked) {
      fill(Long01After.r, Long01After.g, Long01After.b, Long01After.a);
  } else if(rect4.clicked || isHoveringRect4) {
      fill(Long01Hover.r, Long01Hover.g, Long01Hover.b, Long01Hover.a);
  } else {
        fill (6,31,205,90);
      }
if (!rect4.frozen) {
  rect4.x += rect4.speed;
  if(rect4.x > width - 140){
    rect4.speed = rect4.speed *-1;
  }
  if(rect4.x < 0){
    rect4.speed = rect4.speed *-1;
  }
}
//rect(500,200,140,80);  
rect(rect4.x, rect4.y, 140, 80);
}
//const rect5 - rect9 - Short Form - regular
const rect5 = {
  x: 120,
  y: 100,
  speed: 7,
  frozen: false,
  clicked: false,
  initX: 120,
  initY: 100,
  initSpeed: 7
}
const rect6 = {
  x: 250,
  y: 60,
  speed: 9,
  frozen: false,
  clicked: false,
  initX: 250,
  initY: 60,
  initSpeed: 9
}
const rect7 = {
  x: 380,
  y: 180,
  speed: -8,
  frozen: false,
  clicked: false,
  initX: 380,
  initY: 180,
  initSpeed: -8
}
const rect8 = {
  x: 600,
  y: 160,
  speed: 8,
  frozen: false,
  clicked: false,
  initX: 600,
  initY: 160,
  initSpeed: 8
}
const rect9 = {
  x: 65,
  y: 300,
  speed: -9,
  frozen: false,
  clicked: false,
  initX: 65,
  initY: 300,
  initSpeed: -9
}
function drawLayerOne(){ //Short Form - mimicing cellphones - regular
  fill("rgb(44,42,190)");
  noStroke();
  
  let allClicked = allRectanglesClicked();
  
    let isHoveringRect5 = 
        mouseX > rect5.x &&
        mouseX < rect5.x + 150 &&
        mouseY > rect5.y &&
        mouseY < rect5.y + 90;
  
    if(allClicked) {
        fill(Small01After.r, Small01After.g, Small01After.b, Small01After.a);
    } else if(rect5.clicked || isHoveringRect5) {
        fill(Small01Hover.r, Small01Hover.g, Small01Hover.b, Small01Hover.a);
    } else {
          fill (6,31,205,90);
        }
  
if (!rect5.frozen) {
  rect5.y += rect5.speed;
  if(rect5.y > height - 60){
    rect5.speed = rect5.speed *-1;
  }
  if(rect5.y < 0){
    rect5.speed = rect5.speed *-1;
  }
}
//rect(120,102,31,60);
rect(rect5.x, rect5.y, 31, 60);
  
    let isHoveringRect6 = 
        mouseX > rect6.x &&
        mouseX < rect6.x + 150 &&
        mouseY > rect6.y &&
        mouseY < rect6.y + 90;
  
    if(allClicked) {
        fill(Small01After.r, Small01After.g, Small01After.b, Small01After.a);
    } else if(rect6.clicked || isHoveringRect6) {
        fill(Small01Hover.r, Small01Hover.g, Small01Hover.b, Small01Hover.a);
    } else {
          fill (6,31,205,90);
        }
if (!rect6.frozen) {
  rect6.y += rect6.speed;
  if(rect6.y > height - 60){
    rect6.speed = rect6.speed *-1;
  }
  if(rect6.y < 0){
    rect6.speed = rect6.speed *-1;
  }
}
// rect(250,60,32,60);
rect(rect6.x, rect6.y, 32, 60);
  
  let isHoveringRect7 = 
      mouseX > rect7.x &&
      mouseX < rect7.x + 150 &&
      mouseY > rect7.y &&
      mouseY < rect7.y + 90;
  
  if(allClicked) {
      fill(Small01After.r, Small01After.g, Small01After.b, Small01After.a);
  } else if(rect7.clicked || isHoveringRect7) {
      fill(Small01Hover.r, Small01Hover.g, Small01Hover.b, Small01Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect7.frozen) {
  rect7.x += rect7.speed;
  if(rect7.x > width - 60){
    rect7.speed = rect7.speed *-1;
  }
  if(rect7.x < 0){
    rect7.speed = rect7.speed *-1;
  }
}
// rect(380,180,30,60);
rect(rect7.x, rect7.y, 30, 60);
  
  let isHoveringRect8 = 
      mouseX > rect8.x &&
      mouseX < rect8.x + 150 &&
      mouseY > rect8.y &&
      mouseY < rect8.y + 90;
  
  if(allClicked) {
      fill(Small01After.r, Small01After.g, Small01After.b, Small01After.a);
  } else if(rect8.clicked || isHoveringRect8) {
      fill(Small01Hover.r, Small01Hover.g, Small01Hover.b, Small01Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect8.frozen) {
  rect8.y += rect8.speed;
  if(rect8.y > height - 60){
    rect8.speed = rect8.speed *-1;
  }
  if(rect8.y < 0){
    rect8.speed = rect8.speed *-1;
  }
}
//  rect(600,160,30,60);
rect(rect8.x, rect8.y, 30, 60);
  
  let isHoveringRect9 = 
      mouseX > rect9.x &&
      mouseX < rect9.x + 150 &&
      mouseY > rect9.y &&
      mouseY < rect9.y + 90;
  
  if(allClicked) {
      fill(Small01After.r, Small01After.g, Small01After.b, Small01After.a);
  } else if(rect9.clicked || isHoveringRect9) {
      fill(Small01Hover.r, Small01Hover.g, Small01Hover.b, Small01Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect9.frozen) {
  rect9.x += rect9.speed;
  if(rect9.x > width - 60){
    rect9.speed = rect9.speed *-1;
  }
  if(rect9.x < 0){
    rect9.speed = rect9.speed *-1;
  }
}
//   rect(65,300,30,60);
rect(rect9.x, rect9.y, 30, 60);
}
//const rect10 - rect13 - Long Form - regular
const rect10 = {
  x: 250,
  y: 210,
  speed: 0.5,
  frozen: false,
  clicked: false,
  initX: 250,
  initY: 210,
  initSpeed: 0.5
}
const rect11 = {
  x: 140,
  y: 140,
  speed: 1,
  frozen: false,
  clicked: false,
  initX: 140,
  initY: 140,
  initSpeed: 1
}
const rect12 = {
  x: 400,
  y: 90,
  speed: -1,
  frozen: false,
  clicked: false,
  initX: 400,
  initY: 90,
  initSpeed: -1
}
const rect13 = {
  x: 450,
  y: 270,
  speed: 0.75,
  frozen: false,
  clicked: false,
  initX: 450,
  initY: 270,
  initSpeed: 0.75
}
function drawLayerTwo(){  //Long Form - regular
  //fill("rgb(29,13,162)");
  fill(6,31,205,170);
  noStroke();
  
  let allClicked = allRectanglesClicked();
  
    let isHoveringRect10 = 
      mouseX > rect10.x &&
      mouseX < rect10.x + 150 &&
      mouseY > rect10.y &&
      mouseY < rect10.y + 90;
  
  if(allClicked) {
      fill(Long02After.r, Long02After.g, Long02After.b, Long02After.a);
  } else if(rect10.clicked || isHoveringRect10) {
      fill(Long02Hover.r, Long02Hover.g, Long02Hover.b, Long02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect10.frozen) {
  rect10.y += rect10.speed;
  if(rect10.y > height - 90){  
    rect10.speed = rect10.speed * -1;
  }
  if(rect10.y < 0){  
    rect10.speed = rect10.speed * -1;
  }
}
// rect(250,210,150,90);
rect(rect10.x, rect10.y, 150, 90);
  
   let isHoveringRect11 = 
      mouseX > rect11.x &&
      mouseX < rect11.x + 150 &&
      mouseY > rect11.y &&
      mouseY < rect11.y + 90;
  
  if(allClicked) {
      fill(Long02After.r, Long02After.g, Long02After.b, Long02After.a);
  } else if(rect11.clicked || isHoveringRect11) {
      fill(Long02Hover.r, Long02Hover.g, Long02Hover.b, Long02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect11.frozen) {
  rect11.x += rect11.speed;
  if(rect11.x > width - 90){
    rect11.speed = rect11.speed * -1;
  }
  if(rect11.x < 0){ 
    rect11.speed = rect11.speed * -1;
  }
}
//rect(140,140,90,50);
rect(rect11.x, rect11.y, 90, 50);
  
   let isHoveringRect12 = 
      mouseX > rect12.x &&
      mouseX < rect12.x + 150 &&
      mouseY > rect12.y &&
      mouseY < rect12.y + 90;
  
  if(allClicked) {
      fill(Long02After.r, Long02After.g, Long02After.b, Long02After.a);
  } else if(rect12.clicked || isHoveringRect12) {
      fill(Long02Hover.r, Long02Hover.g, Long02Hover.b, Long02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect12.frozen) {
  rect12.y += rect12.speed;
  if(rect12.y > height - 70){
    rect12.speed = rect12.speed * -1;
  }
  if(rect12.y < 0){ 
    rect12.speed = rect12.speed * -1;
  }
}
//rect(400,90,130,70);
rect(rect12.x, rect12.y, 130, 70);
  
   let isHoveringRect13 = 
      mouseX > rect13.x &&
      mouseX < rect13.x + 150 &&
      mouseY > rect13.y &&
      mouseY < rect13.y + 90;
  
  if(allClicked) {
      fill(Long02After.r, Long02After.g, Long02After.b, Long02After.a);
  } else if(rect13.clicked || isHoveringRect13) {
      fill(Long02Hover.r, Long02Hover.g, Long02Hover.b, Long02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect13.frozen) {
  rect13.y += rect13.speed;
  if(rect13.y > height - 80){
    rect13.speed = rect13.speed * -1;
  }
  if(rect13.y < 0){ 
    rect13.speed = rect13.speed * -1;
  }
}
//rect(450,270,140,80); 
rect(rect13.x, rect13.y, 140, 80);
 
}
//const rect14 - rect19 - Short Form - transparent
const rect14 = {
  x: 120,
  y: 102,
  speed: 10,
  frozen: false,
  clicked: false,
  initX: 120,
  initY: 102,
  initSpeed: 10
}
const rect15 = {
  x: 20,
  y: 165,
  speed: 10,
  frozen: false,
  clicked: false,
  initX: 20,
  initY: 165,
  initSpeed: 10
}
const rect16 = {
  x: 640,
  y: 320,
  speed: 10,
  frozen: false,
  clicked: false,
  initX: 640,
  initY: 320,
  initSpeed: 10
}
const rect17 = {
  x: 210,
  y: 280,
  speed: 10,
  frozen: false,
  clicked: false,
  initX: 210,
  initY: 280,
  initSpeed: 10
}
const rect18 = {
  x: 326,
  y: 130,
  speed: -10,
  frozen: false,
  clicked: false,
  initX: 326,
  initY: 130,
  initSpeed: -10
}
const rect19 = {
  x: 540,
  y: 110,
  speed: 10,
  frozen: false,
  clicked: false,
  initX: 540,
  initY: 110,
  initSpeed: 10
}
function drawLayerFour(){  //Short Form - mimicing cellphones - transparent
  fill(44,42,190,100);
  noStroke();
  
  let allClicked = allRectanglesClicked();
  
   let isHoveringRect14 = 
      mouseX > rect14.x &&
      mouseX < rect14.x + 150 &&
      mouseY > rect14.y &&
      mouseY < rect14.y + 90;
  
  if(allClicked) {
      fill(Small02After.r, Small02After.g, Small02After.b, Small02After.a);
  } else if(rect14.clicked || isHoveringRect14) {
      fill(Small02Hover.r, Small02Hover.g, Small02Hover.b, Small02Hover.a);
  } else {
        fill (6,31,205,140);
      }
  
if (!rect14.frozen) {
  rect14.y += rect14.speed;
  if(rect14.y > height - 31){ 
    rect14.speed = rect14.speed * -1;
  }
  if(rect14.y < 0){ 
    rect14.speed = rect14.speed * -1;
  }
}
//rect(120, 102,31,60);
rect(rect14.x, rect14.y, 31, 60);
  
   let isHoveringRect15 = 
      mouseX > rect15.x &&
      mouseX < rect15.x + 150 &&
      mouseY > rect15.y &&
      mouseY < rect15.y + 90;
  
  if(allClicked) {
      fill(Small02After.r, Small02After.g, Small02After.b, Small02After.a);
  } else if(rect15.clicked || isHoveringRect15) {
      fill(Small02Hover.r, Small02Hover.g, Small02Hover.b, Small02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect15.frozen) {
  rect15.y += rect15.speed;
  if(rect15.y > height - 30){  
    rect15.speed = rect15.speed * -1;
  }
  if(rect15.y < 0){ 
    rect15.speed = rect15.speed * -1;
  }
}
//rect(20,165,31,60);
rect(rect15.x, rect15.y, 31, 60);
  
     let isHoveringRect16 = 
      mouseX > rect16.x &&
      mouseX < rect16.x + 150 &&
      mouseY > rect16.y &&
      mouseY < rect16.y + 90;
  
  if(allClicked) {
      fill(Small02After.r, Small02After.g, Small02After.b, Small02After.a);
  } else if(rect16.clicked || isHoveringRect16) {
      fill(Small02Hover.r, Small02Hover.g, Small02Hover.b, Small02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect16.frozen) {
  rect16.x += rect16.speed;
  if(rect16.x > width - 32){  
    rect16.speed = rect16.speed * -1;
  }
  if(rect16.x < 0){  
    rect16.speed = rect16.speed * -1;
  }
}
//rect(640,320,32,60);
rect(rect16.x, rect16.y, 32, 60);
  
   let isHoveringRect17 = 
      mouseX > rect17.x &&
      mouseX < rect17.x + 150 &&
      mouseY > rect17.y &&
      mouseY < rect17.y + 90;
  
  if(allClicked) {
      fill(Small02After.r, Small02After.g, Small02After.b, Small02After.a);
  } else if(rect17.clicked || isHoveringRect17) {
      fill(Small02Hover.r, Small02Hover.g, Small02Hover.b, Small02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect17.frozen) {
  rect17.x += rect17.speed;
  if(rect17.x > width - 30){  
    rect17.speed = rect17.speed * -1;
  }
  if(rect17.x < 0){  
    rect17.speed = rect17.speed * -1;
  }
}
//rect(210,280,30,60);
rect(rect17.x, rect17.y, 30, 60);
  
   let isHoveringRect18 = 
      mouseX > rect18.x &&
      mouseX < rect18.x + 150 &&
      mouseY > rect18.y &&
      mouseY < rect18.y + 90;
  
  if(allClicked) {
      fill(Small02After.r, Small02After.g, Small02After.b, Small02After.a);
  } else if(rect18.clicked || isHoveringRect18) {
      fill(Small02Hover.r, Small02Hover.g, Small02Hover.b, Small02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect18.frozen) {
  rect18.x += rect18.speed;
  if(rect18.x > width - 30){  
    rect18.speed = rect18.speed * -1;
  }
  if(rect18.x < 0){  
    rect18.speed = rect18.speed * -1;
  }
}
//rect(326,130,30,60);
rect(rect18.x, rect18.y, 30, 60);
  
   let isHoveringRect19 = 
      mouseX > rect19.x &&
      mouseX < rect19.x + 150 &&
      mouseY > rect19.y &&
      mouseY < rect19.y + 90;
  
  if(allClicked) {
      fill(Small02After.r, Small02After.g, Small02After.b, Small02After.a);
  } else if(rect19.clicked || isHoveringRect19) {
      fill(Small02Hover.r, Small02Hover.g, Small02Hover.b, Small02Hover.a);
  } else {
        fill (6,31,205,90);
      }
  
if (!rect19.frozen) {
  rect19.x += rect19.speed;
  if(rect19.x > width - 30){  
    rect19.speed = rect19.speed * -1;
  }
  if(rect19.x < 0){  
    rect19.speed = rect19.speed * -1;
  }
}
//rect(540,110,30,60);
rect(rect19.x, rect19.y, 30, 60);

}


function drawLayerThree() {
  //Circles
  //fill("rgb(56,19,211)");
  fill(52,168,213,70);
  noStroke();
  circle(337,387,8);
  circle(356, 157,8);
  circle(399,15,8);
  circle(434,18,8);
  circle(521,82,8);
  circle(670,151,8);
  circle(658,255,8);
  circle(625,330,8);
  circle(603,330,8);
  circle(529,139,8);
  circle(418,96,8);
  circle(288,90,8);
  circle(115, 25,8);
  circle(98,161,8);
  circle(219, 229, 8);
  circle(257,296,8);
  circle(370,330,8);
  circle(660,320,8);
  circle(630,40,8);
  circle(545,140,8);
  circle(580,240,8);
  circle(490,300,8);
  circle(320,280,8);
  circle(290,190,8);
  circle(220,160,8);
  circle(100,200,8);
  circle(50,150,8);
  circle(30,90,8);
  circle(200,30,8);
  circle(300,40,8);
  circle(550,40,8);
  circle(670,90,8);
  circle(645,195,8);
  circle(670,90,8);
  circle(430,250,8);
  circle(405,370,8);
  circle(210,350,8);
  circle(160,290,8);
  circle(60,250,8);
  circle(20,320,8);
}

// ── RESTART ──────────────────────────────────────────────────────────────────
function restartGame() {
  // Reset all rect objects back to their initial positions/speeds/states
  let allRects = [
    rect1, rect2, rect3, rect4,
    rect5, rect6, rect7, rect8, rect9,
    rect10, rect11, rect12, rect13,
    rect14, rect15, rect16, rect17, rect18, rect19
  ];

  for (let r of allRects) {
    r.x       = r.initX;
    r.y       = r.initY;
    r.speed   = r.initSpeed;
    r.frozen  = false;
    r.clicked = false;
  }

  // Reset game state
  gameCompleted  = false;
  timerStarted   = false;
  timerStoppedTime = 0;
  clickCount     = 0;
  showWarning    = true;      // show the "TURN OFF ALL DEVICES / click to start" screen again
}

function mousePressed() {
  // ── If the completion overlay is showing, check for the restart button ──
  if (gameCompleted) {
    let btnW = 140;
    let btnH = 38;
    let btnX = width / 2 - btnW / 2;
    let btnY = height / 2 + 10;

    if (mouseX > btnX && mouseX < btnX + btnW &&
        mouseY > btnY && mouseY < btnY + btnH) {
      restartGame();
      return;
    }
    return; // ignore other clicks on the completion screen
  }

  if (showWarning) {
    showWarning = false;
    timerStarted = true;
    gameStartTime = millis(); // Reset timer to start from now
    return; 
  }
  
  if (!gameCompleted) {
    let rectWasClicked = false;
    
    // this checks if all rectangles were clicked
    rectWasClicked = checkAndFreeze(rect1, 150, 90) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect2, 90, 50) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect3, 130, 70) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect4, 140, 80) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect5, 31, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect6, 32, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect7, 30, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect8, 30, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect9, 30, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect10, 150, 90) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect11, 90, 50) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect12, 130, 70) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect13, 140, 80) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect14, 31, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect15, 31, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect16, 32, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect17, 30, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect18, 30, 60) || rectWasClicked;
    rectWasClicked = checkAndFreeze(rect19, 30, 60) || rectWasClicked;
    
    if (rectWasClicked) {
      clickCount++;
    }
  }
}

function checkAndFreeze(rect, rectWidth, rectHeight) {
  if (mouseX > rect.x && 
      mouseX < rect.x + rectWidth && 
      mouseY > rect.y && 
      mouseY < rect.y + rectHeight) {
    rect.frozen = !rect.frozen;
    rect.clicked = !rect.clicked;
    return true; // Return true to indicate a rectangle was clicked
  }
  return false; // Return false if no rectangle was clicked
}