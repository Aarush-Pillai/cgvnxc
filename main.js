leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

song="";
function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(700, 300);
    video=createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        leftwristX = results[0]. pose.leftWrist.x;
        leftwristY = results[0]. pose.leftWrist.y;
        console.log(" leftwristX = " + leftwristX + " leftwristY = " + leftwristY);
        rightwristX = results[0]. pose.rightWrist.x;
        rightwristY = results[0]. pose.rightWrist.y;
        console.log(" rightwristX = " + rightwristX + " rightwristY = " + leftwristY);
    }
}
function modelLoaded()
{
    console.log("posenet is initilized");
}
function draw()
{
    image(video, 0,0,600,500);
}

function play1()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}