function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    circle(30, 30, 40,);
    circle(30, 30, 30);
    circle(30, 30, 20);
    circle(30, 30, 10);

    circle(610, 30, 40);
    circle(610, 30, 30);
    circle(610, 30, 20);
    circle(610, 30, 10);

    circle(610, 450, 40);
    circle(610, 450, 30);
    circle(610, 450, 20);
    circle(610, 450, 10);

    circle(30, 450, 40);
    circle(30, 450, 30);
    circle(30, 450, 20);
    circle(30, 450, 10);

    image(video, 70, 70, 500, 300);
}

function take_snapshot()
{
    save('My_p5.js_Pic.png');
}

