song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("harry potter.mp3");
    song2 = loadSound("Unstoppable.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400);
}