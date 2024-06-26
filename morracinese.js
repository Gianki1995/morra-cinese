const startGameButton = document.getElementById("inizia");
const threeImgChoose = document.getElementById("scelta");
const leaf = document.getElementById("foglia");
const scissor = document.getElementById("forbice");
const rock = document.getElementById("sasso");
const boxYou = document.getElementById("you");
const boxCpu = document.getElementById("cpu");
const boxResult = document.getElementById("risultato");
const pointsBoxYou = document.getElementById("punteggioYou");
const pointsBoxCpu = document.getElementById("punteggioCpu");
const FOGLIA = 0;
const FORBICE = 1;
const SASSO = 2;

let giocataCpu;
let imgGiocataCpu;

startGameButton.addEventListener("click", startGame);
leaf.addEventListener("click", handleGiocata);
scissor.addEventListener("click", handleGiocata);
rock.addEventListener("click", handleGiocata);

function startGame() {
  startGameButton.style.opacity = 0;
  startGameButton.style.pointerEvents = "none";

  threeImgChoose.style.display = "block";

  boxYou.style.backgroundImage = "";
  boxCpu.style.backgroundImage = "";
  boxResult.style.display = "none";

  giocataCpu = Math.floor(Math.random() * 3);

  /*   if (giocataCpu === 0) {
    imgGiocateCpu = "foglia";
  } else if (giocataCpu === 1) {
    imgGiocateCpu = "forbice";
  } else {
    imgGiocateCpu = "sasso";
  } */

  switch (giocataCpu) {
    case FOGLIA:
      imgGiocataCpu = "foglia";
      break;
    case FORBICE:
      imgGiocataCpu = "forbice";
      break;
    case SASSO:
      imgGiocataCpu = "sasso";
      break;
  }
}

/* 0 foglia
1 forbice
2 sasso */

function handleGiocata(event) {
  //console.log(event.target.id);

  let giocataYou = event.target.id;
  boxYou.style.backgroundImage = `url(./immagini/${giocataYou}.png)`;
  handleChoose();

  if (giocataYou === imgGiocataCpu) {
    //pareggio
    boxResult.innerHTML = "<span class='patta'>Hai pareggiato</span>";
  } else if (
    (giocataYou === "foglia" && imgGiocataCpu === "sasso") ||
    (giocataYou === "forbice" && imgGiocataCpu === "foglia") ||
    (giocataYou === "sasso" && imgGiocataCpu === "forbice")
  ) {
    //vittoria
    boxResult.innerHTML = "<span class='vinta'>Hai vinto</span>";
    pointsBoxYou.innerHTML++;
  } else {
    //sconfitta
    boxResult.innerHTML = "<span class='persa'>Hai perso</span>";
    pointsBoxCpu.innerHTML++;
  }
} //end function

function handleChoose() {
  threeImgChoose.style.display = "none";
  startGameButton.style.opacity = 1;
  startGameButton.style.pointerEvents = "auto";
  boxCpu.style.backgroundImage = `url(./immagini/${imgGiocataCpu}.png)`;
  boxResult.style.display = "block";
}
