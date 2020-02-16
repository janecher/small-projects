var xPos1 = 100;
var yPos1 = 200;
var xPos2 = 200;
var yPos2 = 300;
var radius = 25;

draw = function() {
    background(29, 40, 115);
    
    //planets
    fill(237, 109, 99);
    ellipse(20, 200, 15, 15);
    fill(204, 48, 37);
    ellipse(50, 170, 30, 30);
    fill(54, 224, 133);
    ellipse(80, 140, 40, 40);
    fill(219, 27, 97);
    ellipse(120, 110, 30, 30);
    fill(199, 102, 50);
    ellipse(180, 100, 60, 60);
    fill(217, 164, 31);
    ellipse(250, 100, 50, 50);
    fill(54, 192, 227);
    ellipse(300, 120, 30, 30);
    fill(54, 60, 227);
    ellipse(340, 140, 30, 30);
    fill(235, 215, 124);
    ellipse(370, 160, 10, 10);
    
    //stars
    fill(255, 242, 0);
    ellipse(xPos1, yPos1, radius, radius);
    ellipse(xPos2, yPos2, radius, radius);
    xPos1++;
    xPos2++;
    yPos2-=2;
    radius-=0.1;
};
