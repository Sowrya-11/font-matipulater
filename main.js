
noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;






function setup(){
    canvas=createCanvas(550, 500);
    canvas.position(560, 150);
    video=createCapture(VIDEO);
    video.size(550, 500)  
    posenet = ml5.poseNet(video , ModelLoaded);
    posenet.on('pose',gotposes);

}

function ModelLoaded(){
    console.log('PoseNet is workin');
}

function gotposes(results){
    if (results.length > 0){
        console.log(results);

    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    leftwristX=results[0].pose.leftWrist.x
    rightwristX=results[0].pose.rightWrist.x

    console.log('leftwristX = ' + leftwristX + 'rightwristX = '  + rightwristX);
    console.log('noseX = ' + noseX + 'noseY = ' + noseY);


    difference = Math.floor(leftwristX - rightwristX);



    }


}

function draw(){

    background('#40e0ff');

    text('sowrya', noseX, noseY);
    fill('#8e50fc');
    textSize(difference)

    document.getElementById("result").innerHTML='Font size of  the text will be ' + difference + 'pixel'
}