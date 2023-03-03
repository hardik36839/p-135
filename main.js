function setup()
{
    video = createCapture(VIDEO)
    video.size(550 , 500)
    canvas = createCanvas(550 , 550)
    poseNet = ml5.poseNet(video , model_loaded)
    poseNet.on('pose' , got_poses)
}
function model_loaded()
{
    console.log("model is loaded")
}
function got_poses(results)
{
    if (results.length > 0)
    {
        console.log(results)
    }
}
function draw()
{
    background("#f76f6f")
}