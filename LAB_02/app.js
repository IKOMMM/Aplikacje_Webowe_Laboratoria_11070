//Kanały - inicializacja
var channel01 = [];
var channel02 = [];
var channel03 = [];
var channel04 = [];
//Body -odwołanie
var bodyTime = document.querySelector('.body');
var recordStart = null;
//Audio Elementy - odwołanie
var clapAudio = document.querySelector('[data-sound="clap"]'); //[] - odwołanie do atrybutu
var boomAudio = document.querySelector('[data-sound="boom"]');
var hithatAudio = document.querySelector('[data-sound="hithat"]');
var kickAudio = document.querySelector('[data-sound="kick"]');
var openhatAudio = document.querySelector('[data-sound="openhat"]');
var rideAudio = document.querySelector('[data-sound="ride"]');
var snareAudio = document.querySelector('[data-sound="snare"]');
var tinkAudio = document.querySelector('[data-sound="tink"]');
var recordChannel01Btn = document.querySelector('#recordChannel01');
var playChannel01Btn = document.querySelector('#playChannel01');
document.body.addEventListener('keypress', onKeyDown);
recordChannel01Btn.addEventListener('click', recordChannel01);
playChannel01Btn.addEventListener('click', onPlayChannel01);
var isChannel01OnRecord = false;
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (isChannel01OnRecord) {
        if (channel01.length < 1) {
            channel01.push({
                key: key,
                time: 0
            });
        }
        else {
            channel01.push({
                key: key,
                time: time
            });
        }
        console.log(channel01);
    }
    playAudio(key);
    console.log(channel01);
}
function playAudio(key) {
    switch (key) {
        case 'q':
            clapAudio.currentTime = 0; //Wyzerowanie audio
            clapAudio.play(); //Play - funkcja dla HTMLAudioElement
            console.log("Q - pressed");
            break;
        case 'w':
            boomAudio.currentTime = 0;
            boomAudio.play();
            console.log("W - pressed");
            break;
        case 'e':
            hithatAudio.currentTime = 0;
            hithatAudio.play();
            console.log("E - pressed");
            break;
        case 'r':
            kickAudio.currentTime = 0;
            kickAudio.play();
            console.log("R - pressed");
            break;
        case 'a':
            openhatAudio.currentTime = 0;
            openhatAudio.play();
            console.log("A - pressed");
            break;
        case 's':
            rideAudio.currentTime = 0;
            rideAudio.play();
            console.log("S - pressed");
            break;
        case 'd':
            snareAudio.currentTime = 0;
            snareAudio.play();
            console.log("D - pressed");
            break;
        case 'f':
            tinkAudio.currentTime = 0;
            tinkAudio.play();
            console.log("F - pressed");
            break;
        default:
            console.log("Button without any Audio");
            break;
    }
}
function recordChannel01() {
    isChannel01OnRecord = true;
}
function onPlayChannel01() {
    console.log('Play Channel01');
    isChannel01OnRecord = false;
    playChannel01();
}
//Foreach z Timeoutem, by nie puszczać audio w jednej chwili. PrevTime doobliczania różnicy w czasie.
function playChannel01() {
    var prevTime = 0;
    //gdzieś tu czas record na 0 i różnica timeout  od 0
    channel01.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playAudio(sound.key); }, timeout);
    });
}
