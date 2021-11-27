// 最終課題を制作しよう
let x,y,vx,vy,balls,angle;
const g =1;
const vyMax =30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x =width/2;
  y =height/2;
  vx =8;
  vy =8;
  balls =[];
  size =[];
  count =0;
  angle =0;
}

function draw(){
  count++;
  background(45,90,200);
  fill(255);
  square(x,y,30);//四角
  if(keyIsDown(LEFT_ARROW)){x -=5;}
  if(keyIsDown(RIGHT_ARROW)){x +=5;}
  if(keyIsDown(" ".charCodeAt(0))){vy = -10;}
  y +=vy;
  vy =constrain(vy+g,-vyMax,vyMax);
  if(y>height-10){vy =0;}
  x =constrain(x,0,width);
  y =constrain(y,0,height-30);


  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
   stroke('rgba(0,255,0,0.25)');
   strokeWeight(1);
   fill(50,200,256);
   ellipse(b.x, b.y, b.size);//丸
   b.x += b.vx;
   b.y += b.vy;
   translate(width/2,height/2);
   rotate(angle);
   angle +=TWO_PI*0.002;
   }

    if(count % 30 == 0){
      const b = {x:width/2, y:height/2, size:random(30,100), vx:random(2)-1, vy:random(2)-1};
      balls.push(b);
    }

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
