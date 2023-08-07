
let nome = document.getElementById("nomePipz");

let email = document.getElementById("emailPipz");

let idade = document.getElementById("idadePipz");

let emailIdentificar = document.getElementById("emailPipzId");

let mensagens = ['Esta mensagem faz Parte de um Array, no slot 0' , 
                 'Esta mensagem faz parte de um Array, no slot 1'  ,
                ];
let soma = document.getElementById("numerodaSoma");

    function PageView() {
        pipz.track("PageView");
        alert("Page is loaded");
    }   

    function eventos_pipz(){
      pipz.track("formulario", 
        {"email": email.value , 
        "nome": nome.value , 
        "Idade":idade.value});
        alert("Form Enviado!")

    }

    function identificar(){
        pipz.identify( emailIdentificar.value ,
            {"email" : emailIdentificar.value , 
             "mensagem" : "identificado via Front-End"
        });
        alert(" Identificar enviado");
    }

    function eventSimples() {
        pipz.track("eventoSimples",{ 
            "nome" : "Brewmaster" ,
            "autor" : "Thiago Alves No JS",
            "email" : "thiagoskill@gmail.com" , 
            "mensagem" : mensagens , 
            "numeroSoma1" : soma.value ,
            "origem" : "FrontEnd" ,
            "youtube": "youtube.com/sigmask",
            "kick": "kick.com/thiagoskill"
           })
        alert("Evento Simples enviado")
    }

   /*  criar lista com todos os eventos disparados, assim que reaprender a usar table e criar table     
   no JS*/
