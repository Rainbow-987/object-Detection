function preload() {

    img_dog_cat = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    background("green");
    canvas.center();

}

function draw() {
    image(img_dog_cat,0,0,600,400);
    strokeWeight(3);

    stroke("blue");
    noFill();
    //rect(x,y,width,height);
    rect(100,80,200,250);

    textSize(30);
    //text("text to be shown", x,y);
    text("Dog 80%",100,60);

    
    stroke("green");
    noFill();
    //rect(x,y,width,height);
    rect(300,80,218,250);
    textSize(30);
    //text("text to be shown", x,y);
    text("Cat 88%",300,70);


}