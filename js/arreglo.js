function arreglo() {
    for (var tema of[
            'Negocio',
            'Crecimiento Personal',
            'Novela',
            'Filosofia',
            'Innovacion',
            'Tecnologia',
        ]) {
        for (var proy of[
                'Antigua',
                'Moderna',
                'Futurista',
            ]) {
            window.alert(tema + ' ' + proy);
        }
    }
};