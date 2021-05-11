const channel01: any[] = [];
const clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]')

const playChannel01: HTMLButtonElement = document.querySelector('#playChannel01')

document.body.addEventListener('keypress', onKeyDown);
playChannel01.addEventListener('click', onPlayChannel01);

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    channel01.push({
        key: key,
        time: time
    });

    playSound(key);
    console.log(channel01)
}

function playSound(key: string){
    clapAudio.currentTime = 0;
    clapAudio.play();
}

function onPlayChannel01(): void{
    playChannel01();
}

function playChannel01(): void{
    let prevTime = 0;
    channel01.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(()=> playSound(sound.key), timeout)        
    });
}