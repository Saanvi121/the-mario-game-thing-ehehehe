function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	gameover = loadSound("gameover.wav")
	die_you_mario = loadSound("mariodie.wav")
	Hhehe_kick = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800,320)
	video.parent('game_console')

	poseNet = ml5.poseNet(video,modelLoaded)
	poseNet.on('pose',gotPoses)
}

function draw() {
	game()
}

function modelLoaded()
{
	console.log("the model is loaded")
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results)
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}