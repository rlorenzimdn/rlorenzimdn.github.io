function formValidation() {
    var uid = document.formSignUp.userid;
    var pswid = document.formSignUp.pswid;
    if (useridValidation(uid, 5, 12)) {}
    return false;
}

function useridValidation(uid, min, max) {
    var userid = document.formSignUp.userid.value;
    var uidSize = userid.length;
    (uidSize == 0 || uidSize >= max || uidSize < min) ?
    Swal.fire('El Usuario no puede estar Vacio y debe ser entre: ' + min + ' y ' + max):
        sessionStorage.setItem('Usuario', userid);
}