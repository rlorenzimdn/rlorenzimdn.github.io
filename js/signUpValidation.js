function formValidation() {
    var uid = document.formSignUp.userid;
    var passid = document.formSignUp.pswid;
    if (useridValidation(uid, 5, 12)) {
        if (passid_validation(passid, 7, 12)) {}
    }
    return false;
}

function useridValidation(uid, min, max) {
    var userid = document.formSignUp.userid.value;
    var uidSize = userid.length;
    (uidSize == 0 || uidSize >= max || uidSize < min) ?
    Swal.fire('El Usuario no puede estar Vacio y debe ser entre: ' + min + ' y ' + max):
        sessionStorage.setItem('Usuario', userid);
}

function passid_validation(passid, min, max) {
    var passid = document.formSignUp.pswid.value;
    var pswSize = document.formSignUp.pswid.value.length;
    (pswSize == 0 || pswSize >= max || pswSize < min) ?
    Swal.fire('El Password no puede estar Vacio y debe ser entre: ' + min + ' y ' + max):
        sessionStorage.setItem('Password', passid);
}