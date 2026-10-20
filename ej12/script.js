
const nombresMeses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];
function ejecucionConDate() {
    console.log("--- 1. EJECUCIÓN CON OBJETO Date ---");

    const hoy = new Date();
    const diaActual = hoy.getDate();
    const mesActual = hoy.getMonth();
    const anioActual = hoy.getFullYear();

    let diaEvento;
    do {
        diaEvento = Math.floor(Math.random() * 30) + 1;
    } while (diaEvento < diaActual);

    const fechaEvento = new Date(anioActual, mesActual, diaEvento);
    const diferenciaMs = fechaEvento.getTime() - hoy.getTime();
    const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    console.log(`La fecha actual es ${diaActual} de ${nombresMeses[mesActual]} de ${anioActual}`);
    console.log(`La fecha del evento: ${diaEvento} de ${nombresMeses[mesActual]} de ${anioActual}`);
    console.log(`Días que faltan para el evento: ${diasFaltantes} días\n`);
}
function ejecucionConTemporal() {
    console.log("--- 2. EJECUCIÓN CON API Temporal ---");
    const TemporalObj = window.Temporal || Temporal;

    const hoy = TemporalObj.Now.plainDateISO();
    const diaActual = hoy.day;
    const mesActual = hoy.month;
    const anioActual = hoy.year;

    let diaEvento;
    do {
        diaEvento = Math.floor(Math.random() * 30) + 1;
    } while (diaEvento < diaActual);

    const fechaEvento = TemporalObj.PlainDate.from({
        year: anioActual,
        month: mesActual,
        day: diaEvento
    });

    const diferencia = hoy.until(fechaEvento, { unit: 'day' });

    console.log(`La fecha actual es ${diaActual} de ${nombresMeses[mesActual - 1]} de ${anioActual}`);
    console.log(`La fecha del evento: ${diaEvento} de ${nombresMeses[mesActual - 1]} de ${anioActual}`);
    console.log(`Días que faltan para el evento: ${diferencia.days} días`);
}
ejecucionConDate();
ejecucionConTemporal();