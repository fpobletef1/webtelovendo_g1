function validar() {
    let texto = document.getElementsByClassName('form-control');
    for (let i = 0; texto.length; i++) {
        if (texto[i].value == '' || texto[i].value == null) {
            alert('Favor de completar todos los campos antes de enviar')
            break
        }
    }
}