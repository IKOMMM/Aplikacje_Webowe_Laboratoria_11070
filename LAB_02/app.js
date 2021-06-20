var channel01 = [];
var clapAudio = document.querySelector('[data-sound="clap"]');
var recordChannel01Btn = document.querySelector('#recordChannel01');
var playChannel01Btn = document.querySelector('#playChannel01B');
document.body.addEventListener('keypress', onKeyDown);
playChannel01Btn.addEventListener('click', onPlayChannel01);
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel01.push({
        key: key,
        time: time
    });
    playSound(key);
    console.log(channel01);
}
function playSound(key) {
    switch (key) {
        case 'w':
            clapAudio.currentTime = 0;
            clapAudio.play();
            break;
        default:
            console.log("There Is No Sound To This Button");
            break;
    }
}
function onPlayChannel01() {
    playChannel01();
}
function playChannel01() {
    var prevTime = 0;
    channel01.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
