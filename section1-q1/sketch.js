// 練習問題：神戸市のマーク
function setup(){
  createCanvas(450, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);//文字の太さ
  strokeCap(SQUARE);//線の形
  arc(100+25, 100, 100, 100,QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  strokeWeight(25)
  strokeCap(SQUARE);
  arc(100-25,100,100,100,QUARTER_PI*5,QUARTER_PI*5+PI);

  // 神戸大学のロゴマーク
  noStroke();//境界線なし
  fill(14,47,146);//青で塗りつぶす
  circle(350,100,150)
  fill(255);//白で塗りつぶす
  circle(340,90,135);
  fill(22,131,46);//緑で塗りつぶす
  circle(338,90,127);
  fill(255);//白で塗りつぶす
  circle(334,98,118)
  fill(77);//灰色
  textSize(30);
  textFont("游明朝 Demibold");
  text("KOBE",290,85);
  textSize(13);
  textFont("游明朝 Demibold");
  text("UNIVERSITY",305,105);

  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
