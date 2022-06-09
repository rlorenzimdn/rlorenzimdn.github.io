function aceptarEvento(evento) {
    log.textContent = `Gracias por contactarnos: ${nombre.value}`;
    event.preventDefault();
}

const form = document.getElementById('formContact');
const nombre = document.getElementById('nameContact');
const log = document.getElementById('mensaje');
form.addEventListener('submit', aceptarEvento);