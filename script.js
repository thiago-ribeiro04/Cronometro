let intervalo;
let minutos = 0;
let segundos = 0;
let cronometroRodando = false;

const display = document.getElementById("cronometro");
const btnStartStop = document.getElementById("startStop");
const btnReset = document.getElementById("reset");

function atualizarCronometro() {
  
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  const formatoTempo = `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  display.textContent = formatoTempo;
}

function iniciarPararCronometro() {
  if (cronometroRodando) {
    clearInterval(intervalo);
    btnStartStop.textContent = "Iniciar";
  } else {
    intervalo = setInterval(atualizarCronometro, 1000);
    btnStartStop.textContent = "Parar";
  }

  cronometroRodando = !cronometroRodando;
}

function reiniciarCronometro() {
  clearInterval(intervalo);
  minutos = 0;
  segundos = 0;
  display.textContent = "00:00";
  btnStartStop.textContent = "Iniciar";
  cronometroRodando = false;
}

btnStartStop.addEventListener("click", iniciarPararCronometro);
btnReset.addEventListener("click", reiniciarCronometro);
