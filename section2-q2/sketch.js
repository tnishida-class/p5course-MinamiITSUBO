// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;//width=200,size=25
  noStroke();//枠線なし
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  if((i+j)%2==0){
    noFill();
  }
  else{
    fill(77);
  }
  rect(size*i,size*j,25,25);//ここまで格子
                            //ここから丸
if((i+j)%2==0){
  noFill();
}
else{
  if(j<3){
    fill(196,0,0);
  }
  else if(j<5){
    noFill();
  }
  else if(j<8){
    fill(0);
  }
  circle(size*i+13,size*j+13,23)
  }
 }
}
}
