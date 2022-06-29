function aceptarEvento(evento) {
    log.textContent = `Gracias por contactarnos: ${nombre.value} ${fechaCompleta}`;
    evento.preventDefault();
}

const form = document.getElementById('formContact');
const nombre = document.getElementById('nameContact');
const log = document.getElementById('mensaje');
const fecha = luxon.DateTime.now();
const dia = fecha.day;
const mes = fecha.month;
const ano = fecha.year;
const fechaCompleta = dia + '/' + mes + '/' + ano;
form.addEventListener('submit', aceptarEvento);
