disney = "";
peter_pan = "";
leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;
status2 = "";
function preload(){
    disney = loadSound("Disney_music.mp3");
    peter_pan = loadSound("peter_pan.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PozeNet Is Initialized");
}

function draw(){
    image(video, 0, 0, 600, 500);

    status1 = disney.isPlaying();

    fill("red");
    stroke("red");

    if(scoreLeftWrist > 0.2){
        circle(leftX, leftY, 20);
        
        status2.stop();
    if(status1 = false){
        status1.play();
        document.getElementById("song").innerHTML = "Disney";
    }
     }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +leftX+" leftWristY = "+leftY);

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " +rightX+" rightWristY = "+rightY);
    }
}