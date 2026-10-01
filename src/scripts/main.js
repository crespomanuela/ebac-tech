import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const dataDoEvento = new Date("Feb 14, 2027 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contador = document.getElementById('contador');

const diaEmMs = 1000 * 60 * 60 * 24;
const horaEmMs = 1000 * 60 * 60;
const minutoEmMs = 1000 * 60;

function atualizaContador() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = 'Evento expirado';
        return;
    }

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}

const contaAsHoras = setInterval(atualizaContador, 1000);
atualizaContador();