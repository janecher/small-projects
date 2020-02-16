var x = 20;
var y = 400;
var z = 400;
var n = 400;
var fishX = 50;
var fishY = 50;

//draw a fish function
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor, tailColor){
noStroke();
fill(bodyColor);

// body
ellipse(centerX, centerY, bodyLength, bodyHeight);

// tail
fill(tailColor);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
         
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
}; 

mouseClicked = function(){
    drawFish(mouseX, mouseY, 50, 30, color(242, 242, 8), color(245, 158, 8));
};

draw = function() {
    background(89, 216, 255);
    drawFish(fishX, fishY, 50, 20, color(162, 0, 255), color(225, 159, 235));
    drawFish(fishX + 100, fishY+150, 100, 100, color(255, 0, 85), color(247, 151, 247));
    drawFish(fishX+250, fishY+50, 80, 50, color(0, 255, 60), color(33, 82, 13));
    drawFish(fishX, fishY + 300, 150, 80, color(234, 247, 57), color(224, 122, 67));
    
    mouseClicked();
    fill(222, 247, 242);
    ellipse(x+10, y, 10, 10);
    ellipse(x+40, z, 20, 20);
    ellipse(x+80, n, 30, 30);
    ellipse(x+120, y, 10, 10);
    ellipse(x+160, n, 30, 30);
    ellipse(x+220, y, 10, 10);
    ellipse(x+240, y, 10, 10);
    ellipse(x+280, z, 20, 20);
    ellipse(x+320, n, 30, 30);
    ellipse(x+360, y, 10, 10);
    y--;
    z-=2;
    n-=3;
    fishX++;
};
