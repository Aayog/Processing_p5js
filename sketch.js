function setup() {
  // put setup code here
    createCanvas(1320,700);
}
function draw() {
  // put drawing code here
    background(150);
    translate(width/2,height/2);
    strokeWeight(5);
    drawRect();
    frameRate(2);

}
function drawRect(){
    var angle= random(0,360);
    for(var i =1; i < 600; i += 1){
        if(i % 20 == 0){
            fill(random(0,255),random(0,255),random(0,255),random(0,150));
        }
        // rect(i,i,40,70);
        rect(i,i,400,800);

        rotate(angle);
    }
}
