export default function validation (inputs){
    const errors = {};
    const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const regexpassword = /^[@#][A-Za-z0-9]{7,13}$/;
    const regexnumber = /^[0-9\b]+$/;


    if(!regexEmail.test(inputs.username)){
        errors.username = 'Debe ser correo electronico'
    }
    if(!inputs.username){
        errors.username = "No puede ser vacio"
    }
    if(inputs.username.length > 35){
        errors.username = "Debe tener menos de 35 caracteres"
    }
    if(!regexnumber.test(inputs.password)){
        errors.password = "La conrasena debe tener tu nombre"
    }
    if(!regexpassword.test(inputs.password)){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;

}