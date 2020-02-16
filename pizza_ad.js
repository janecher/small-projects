var small = 20;
var x = 200;
var y = 250;
draw = function() {
    background(255, 255, 255);
    //banner
    fill(255, 0, 0);
    textSize(30);
    text("Best pizza in the town!", 50, 30);
    fill(13, 12, 12);
    textSize(20);
    text("Hot, delisios, fast!", 100, 60);
    text("Meet and veggi lovers are welcome!", 50, 90);
    
    //pizza
    stroke(176, 104, 21);
    strokeWeight(20);
    fill(245, 185, 81);
    ellipse(x, y, 150, 150);
    noStroke();
    fill(250, 5, 38);
    ellipse(x, y-40, small, small);
    ellipse(x + 20, y - 30, small, small);
    ellipse(x + 40, y, small, small);
    ellipse(x + 20, y + 30, small, small);
    ellipse(x, y + 40, small, small);
    ellipse(x - 20, y + 20, small, small);
    ellipse(x - 40, y - 10, small, small);
    ellipse(x, y, small, small);
    
    //car()
    fill(30, 30, 209);
    rect(x-100, y + 100, 200, 20);
    quad(x+120, y + 80, x + 100, y + 80, x+100, y+120, x+140, y+120);
    fill(5, 5, 5);
    ellipse(x-80,y+120, small+5, small+5);
    ellipse(x+110,y+120, small+5, small+5);
    
    x+=2;
    
};
