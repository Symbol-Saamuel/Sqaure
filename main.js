function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);

    canvas = createCanvas(650, 600);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}

function modelLoaded(){
console.log('posenet is initialized');
}

function draw() {
    background('#2E5090');
}