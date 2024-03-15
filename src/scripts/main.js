AOS.init();

const dataDoEvento = new Date("Dec 13, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMs = 1000 *60;

    const diasAteOEvento = Math.floor(distanciaAteOevento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOevento % diasEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOevento % horaEmMS) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOevento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOevento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);