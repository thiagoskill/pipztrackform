
let nome = document.getElementById("nomePipz");

let email = document.getElementById("emailPipz");

let idade = document.getElementById("idadePipz");

let emailIdentificar = document.getElementById("emailPipzId");



    function eventos_pipz(){
      pipz.track("teste", {"email": email.value , "Nome": nome.value , "Idade":idade.value});
      alert ("apertou o botão")
    }

    function identificar(){
        pipz.identify( emailIdentificar.value ,{
            "email" : emailIdentificar.value});
        console.log (emailIdentificar);
        console.log (emailIdentificar.value);
    }
