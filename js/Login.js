function login() {
    let login_username;
    let login_password;

    document.getElementById("login_submit").onclick = function () {
        login_username = document.getElementById("usernameL").value;
        login_password = document.getElementById("passwordL").value;
        //Validacion
        const validateName = users_data.some((user) => user.name == login_username);
        const validatePassword = users_data.some((user) => user.pass == login_password);

        (validateName && validatePassword) ? document.getElementById("warningGL").innerHTML = "Felicidades " + login_username + "! has iniciado sesion exitosamente" : document.getElementById("warningL").innerHTML = "Usuario o contrasenas no existen";

        return false;
    }
} 