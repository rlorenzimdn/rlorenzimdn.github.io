function formValidation() {
    uid = document.formSignUp.userid;
    if (useridValidation(uid, 5, 12)) {}
    return false;
}

function useridValidation(uid, min, max) {
    uidSize = uid.value.length;
    if (uidSize == 0 || uidSize >= max || uidSize < min) {
        Swal.fire('El Usuario no puede estar Vacio y debe ser entre: ' + min + ' y ' + max);
        uid.focus();
        return false;
    }
    document.getElementById('usuario');
    usuario = document.getElementById('usuario').value;
    sessionStorage.setItem('Usuario', usuario);
    return true;

};