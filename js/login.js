function verifica() {
    let email = document.querySelector("#username").value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Obrigatório o preenchimento do email ou senha")
        document.querySelector("#username").focus()

    } else {

        pesquisa(email, senha);
    }
}

function pesquisa(email, senha) {
    if (email == "murillofernandes10@gmail.com" && senha == "12345678") {
        window.open("../index.html");
       
    } 
    

}
