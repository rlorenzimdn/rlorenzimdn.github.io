const form = document.getElementById('formContact');
const nombre = document.getElementById('nameContact');
const log = document.getElementById('mensaje');
// const fecha = DateTime.local(2022, 1, 25, 12, 10);
// const fecha = DateTime();
// const now = DateTime.now();
// const fecha = DateTime.now();
// const dt = DateTime.now();
 const fecha = luxon.DateTime.now();
 const dia = fecha.day;
 const mes = fecha.month;
 const ano = fecha.year;
 const fechaCompleta = dia + '/' + mes + '/' + ano;

// const DateTime = luxon.DateTime;
// const fecha = dt.toLocaleString(DateTime.DATE_FULL);
form.addEventListener('submit', aceptarEvento);

function aceptarEvento(evento) {
    log.textContent = `Gracias por contactarnos: ${nombre.value} ${fechaCompleta}`;
    // log.textContent = `Gracias por contactarnos: ${nombre.value} + ' ' + ${Fecha.value}`;
    console.log(fechaCompleta);
    event.preventDefault();
}
