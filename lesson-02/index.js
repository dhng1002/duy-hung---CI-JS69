const $ = document.querySelector.bind(document)
const newEle = document.createElement.bind(document)
let render = '';
let time = newEle('div')
let controls = newEle('ul')
let components = ['Play', 'Stop', 'Pause']
let run;
let begin = 0;
time.innerHTML = begin 
let look = false;

function start(){
    if(look === false){
        look = true
    run = setInterval(
        () => {
             begin = begin+1;
             time.innerHTML = begin
        },
    1000)
    }
}

function stop(){
    clearInterval(run)
    look = false;
    begin = 0;
    time.innerHTML = begin
}

function pause(){
    clearInterval(run)
}
time.setAttribute('class', "time")
controls.setAttribute('class', 'controlsTime')
components.forEach((component, index) =>{
    render = render + (
        `<li key='${index}'><button>${component}</button></li>`
    )
})

$("#root").appendChild(time)
$("#root").appendChild(controls)
controls.innerHTML = render
$('li[key="0"]').addEventListener('click', () =>{start()})
$('li[key="1"]').addEventListener('click', () =>{stop()})
$('li[key="2"]').addEventListener('click', () =>{pause()})

