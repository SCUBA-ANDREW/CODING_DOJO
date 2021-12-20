console.log("page loaded...");
// console.log(`test`)
var vid_id = document.getElementById("main_vid");
vid_id.muted=true;

function over(){
    vid_id.muted=true;
    vid_id.play();
}

function out(Element){
    vid_id.muted=false;
    vid_id.pause();
}

function unmute(){
    vid_id.muted=false;
}