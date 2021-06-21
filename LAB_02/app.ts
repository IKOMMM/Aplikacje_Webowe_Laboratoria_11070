//Kanały - inicializacja
const channel01: any[] = [];
const channel02: any[] = [];
const channel03: any[] = [];
const channel04: any[] = [];

//Body -odwołanie
let bodyTime: HTMLBodyElement = document.querySelector('.body');
const recordStart = null;

//Audio Elementy - odwołanie
const clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]');//[] - odwołanie do atrybutu
const boomAudio: HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const hithatAudio: HTMLAudioElement = document.querySelector('[data-sound="hithat"]');
const kickAudio: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const openhatAudio: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const rideAudio: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const snareAudio: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const tinkAudio: HTMLAudioElement = document.querySelector('[data-sound="tink"]');

const recordChannel01Btn: HTMLButtonElement = document.querySelector('#recordChannel01');
const playChannel01Btn: HTMLButtonElement = document.querySelector('#playChannel01');

document.body.addEventListener('keypress', onKeyDown);
recordChannel01Btn.addEventListener('click', recordChannel01);
playChannel01Btn.addEventListener('click', onPlayChannel01);
let isChannel01OnRecord:boolean = false;

function onKeyDown(ev: KeyboardEvent): void {

    const key = ev.key;
    const time = ev.timeStamp;      
    
    if(isChannel01OnRecord){ 

        if(channel01.length<1){
            channel01.push({
                key: key,
                time: 0                
            });
        }
        else{
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

function playAudio(key: string){

    switch(key){

        case 'q':
        clapAudio.currentTime = 0;//Wyzerowanie audio
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

function recordChannel01() : void{    
    isChannel01OnRecord = true;
}


function onPlayChannel01(): void{
    console.log('Play Channel01'); 
    isChannel01OnRecord = false;
    playChannel01();
}

//Foreach z Timeoutem, by nie puszczać audio w jednej chwili. PrevTime doobliczania różnicy w czasie.
function playChannel01(): void{    
    let prevTime = 0; 
    
    //gdzieś tu czas record na 0 i różnica timeout  od 0

    channel01.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(()=> playAudio(sound.key), timeout);        
    }); 
}