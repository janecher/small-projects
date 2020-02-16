fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(0,5));
if (answer < 1) {
    textSize(30);
    fill(232, 232, 14);
    text("YES", 170, 240); 
}
else if(answer >= 1 && answer < 2){
    textSize(30);
    fill(230, 16, 34);
    text("NO", 180, 240); 
}
else if(answer >= 2 && answer < 3){
    textSize(30);
    fill(91, 242, 247);
    text("MAYBE", 150, 240); 
}
else if(answer >= 3 && answer < 4){
    textSize(30);
    fill(89, 232, 67);
    text("TRY", 170, 240); 
}
else{
    textSize(30);
    fill(208, 48, 240);
    text("SLOW", 155, 240); 
}
