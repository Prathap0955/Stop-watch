let timer;
let elapsedTime = 0;
let running = false;


const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapbutton = document.getElementById('lap');
const clapbutton = document.getElementById('clap');
const laps = document.getElementById('laps');

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = (elapsedTime % 1000).toString().padStart(3, '0');
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function start() {
    if (!running) {
        running = true;
        const startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    updateDisplay();
}

function lapTime(){
   var mp=document.createElement('p')
   mp.innerHTML= display.textContent
//    document.getElementById("laps").appendChild(mp)
    laps.appendChild(mp)
    laps.classList.add('visible');
}

function clearlap(){

    laps.innerHTML='';
    laps.classList.remove('visible'); 
             
}
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
lapbutton.addEventListener('click',lapTime);
clapbutton.addEventListener('click',clearlap);

updateDisplay();
