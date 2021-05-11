var channel01 = [];
var clapAudio = document.querySelector('[data-sound="clap"]');
var playChannel01 = document.querySelector('#playChannel01');
document.body.addEventListener('keypress', onKeyDown);
playChannel01.addEventListener('click', onPlayChannel01);
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
    clapAudio.currentTime = 0;
    clapAudio.play();
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
