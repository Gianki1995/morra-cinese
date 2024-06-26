let btnEnter = document.getElementById('inizia')
let punteggioPlayer = document.getElementById('punteggioYou');
let punteggioCpu = document.getElementById('punteggioCpu');

let containerPlayer = document.getElementById('you')
let containerChoose = document.querySelector('#gioco #scelta')
let containerCpu = document.getElementById('cpu');

let containerResult = document.getElementById('risultato');


let sassoDisplay = document.getElementById('sasso');
let fogliaDisplay = document.getElementById('foglia');
let forbiceDisplay = document.getElementById('forbice');

let cpuChoice;
let imgCpuChoice;



const FOGLIA = 1;
const SASSO = 2;
const FORBICE = 3;

btnEnter.addEventListener('click', startGame);
sassoDisplay.addEventListener('click', chooseImage);
fogliaDisplay.addEventListener('click', chooseImage);
forbiceDisplay.addEventListener('click', chooseImage);

function startGame() {
    btnEnter.style.opacity = 0;
    btnEnter.style.pointerEvents = 'none';
    containerChoose.style.display = 'block';
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    containerPlayer.style.backgroundImage = '';
    containerCpu.style.backgroundImage = '';

     switch (cpuChoice) {
        case FOGLIA:
            imgCpuChoice = 'foglia';
            break;
        case SASSO:
            imgCpuChoice ='sasso';
            break;
        case FORBICE:
            imgCpuChoice = 'forbice';
            break;
    }

   
    
   

}


function handleChoose(){
    containerChoose.style.display = 'none';
    btnEnter.style.opacity = 1;
    btnEnter.style.pointerEvents = 'auto';
    containerCpu.style.backgroundImage = `url(./immagini/${imgCpuChoice}.png)`;
    containerResult.style.display = 'block';

}

function chooseImage(event) {
   let imgChoice = event.target.id;
   containerPlayer.style.backgroundImage = `url(./immagini/${imgChoice}.png)`;
   handleChoose();

   if(imgChoice === imgCpuChoice) {
    containerResult.innerHTML = '<span class="patta">Hai pareggiato</span>';
   }else if((imgChoice == 'foglia' && imgCpuChoice =='sasso') || (imgChoice =='sasso' && imgCpuChoice == 'forbice') || (imgChoice == 'forbice' && imgCpuChoice == 'foglia')){
    containerResult.innerHTML = '<span class="vinta">Hai vinto</span>';
    punteggioPlayer.innerHTML++
   }else{
    containerResult.innerHTML = '<span class="persa">Hai perso</span>';
    punteggioCpu.innerHTML++
   }
   
   
}