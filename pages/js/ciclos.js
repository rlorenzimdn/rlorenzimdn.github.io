function cuantos(selectObject) {
    let seleccionados = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            seleccionados++;
        }
    }
    return seleccionados;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Opciones seleccionadas:' + "  " + cuantos(document.selectForm.topicsTypes));
});