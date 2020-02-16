background(219, 255, 255);

//roof
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

//house
fill(209, 93, 39);
rect(60, 150, 280, 207);
for(var i = 160; i<360; i+=10){
    line(60, i, 340, i);
}

//door
fill(120, 80, 19);
rect(180, 280, 40, 77);
fill(107, 104, 107);
ellipse(215, 325, 5, 10);

//roof window
fill(171, 237, 234);
ellipse(200, 100, 60, 60);
line(200, 70, 200, 130);
line(170, 100, 230, 100);

//windows
fill(171, 237, 234);
var x1 = 80;
var x2 = 80;
while(x1 < 280 || x2 < 280){
    rect(x1, 180, 50, 70);
    rect(x2, 270, 50, 70);
    line(x1+25, 180, x1+25, 250);
    line(x2+25, 270, x2+25, 340);
    x1+=65;
    x2+=195;
}

//grass
stroke(73, 143, 46);
strokeWeight(5);
for(var x = 20; x < 380; x+=40){
line(x, 370, x+10, 380);
line(x+10, 370, x+10, 380);
line(x+20, 370, x+10, 380);
}
