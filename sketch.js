var bow,arrow,back,score = 0,bbg,arrowGroup,arrow,gS;
function preload(){
  background_image=
   loadImage("background0.png") 
G_balloon=
  loadImage("green_balloon0.png")
P_balloon=
  loadImage("pink_balloon0.png")
B_balloon=
  loadImage("blue_balloon0.png")
R_balloon=
  loadImage("red_balloon0.png")
bow_image=
  loadImage("bow0.png")
arrow_image=
  loadImage("arrow0.png");
  
}
function setup() {
createCanvas(500,480);
  
back = createSprite(400,400,300,78)
back.addImage(background_image)
back.scale=2.5
back.velocityX=-3
       
bow = createSprite(490,250,20,20)
bow.addImage(bow_image)

arrow1 = createSprite(490,250,50,50)
arrow1.addImage(arrow_image)  
arrow1.scale=0.4
arrow1.setCollider("rectangle",-110,0,40,50)
 
  arrowGroup = new Group()
  bbg = new Group()
  rbg = new Group()
  pbg = new Group()
  gbg = new Group()
  
}

function draw() {
bow.y=mouseY
arrow1.y=bow.y

  
  if(keyWentDown("space")){
   createArrow();
     
  }


if (back.x < 0){
    back.x = back.width/1;
}  

if(arrowGroup.isTouching(bbg)){
    bbg.destroyEach()
   score=score+4
}  
  
if(arrowGroup.isTouching(gbg)){
    gbg.destroyEach()
   score=score+2
} 
  
if(arrowGroup.isTouching(rbg)){
    rbg.destroyEach()
   score=score+3
} 
  
 if(arrowGroup.isTouching(pbg)){
    pbg.destroyEach()
   score=score+1
} 
  
  var select_balloon =Math.round(random(1,4))
  
  switch(select_balloon){
  case 1 : 
    spawnBalloonB()
  break;
case 2 :
    spawnBalloonR()  
  break;
  case 3 :
    spawnBalloonG()
  break;
  case 4 :
    spawnBalloonP()
  break;
  default :
    break
}
background("white")
drawSprites()  
textSize(20)
fill("black")
text("score: "+score,50,50)   
}

  function spawnBalloonR()  {
if(frameCount % 100 === 0){
var red = createSprite(Math.round(random(20,400)),30,10,4)
 red.addImage(R_balloon) 
 red.scale=0.11  
 red.velocityY=3  
 red.lifetime=180
  rbg.add(red)
}
}
function spawnBalloonB()  {
if(frameCount % 100 === 0){
 var blue = createSprite(Math.round(random(20,400)),30,10,4)
 blue.addImage(B_balloon) 
 blue.scale=0.12  
 blue.velocityY=3  
   blue.lifetime=180
bbg.add(blue)
}   
 }
  function spawnBalloonG()  {
if(frameCount % 100 === 0){
var green = createSprite(Math.round(random(20,400)),30,10,4)
 green.addImage(G_balloon) 
 green.scale=0.1 
 green.velocityY=3  
 green.lifetime=180
  gbg.add(green)
}
  }
function spawnBalloonP()  {
if(frameCount % 100 === 0){
var pink = createSprite(Math.round(random(20,400)),30,10,4)
 pink.addImage(P_balloon) 
 pink.scale=1.4
 pink.velocityY=3  
 pink.lifetime=180
  pbg.add(pink)
}  
}
  
  function createArrow()
  {
    arrow = createSprite(490,250,50,50)
    arrow.addImage(arrow_image) 
    arrow.scale=0.4
    arrow.y=bow.y
    arrow.velocityX=-6
   arrow.lifetime=120
   arrow.setCollider("rectangle",-110,0,40,50)
    arrowGroup.add(arrow);
    
  }
  
  