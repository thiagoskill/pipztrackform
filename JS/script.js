
let nome = document.getElementById("nomePipz");

let email = document.getElementById("emailPipz");

let idade = document.getElementById("idadePipz");

let emailIdentificar = document.getElementById("emailPipzId");

let mensagens = ['Esta mensagem faz Parte de um Array, no slot 0' , 
                 'Esta mensagem faz parte de um Array, no slot 1'  ,
                ];
let soma = document.getElementById("numerodaSoma");

let emmId = document.getElementById("numeroId");


    function eventos_pipz(){
      pipz.track("teste", 
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
        pipz.track("eventoSimpes",{ 
            "nome" : "Brewmaster" ,
            "autor" : "Thiago Alves No JS",
            "email" : "thiagoskill@gmail.com" , 
            "mensagem" : mensagens , 
            "numeroSoma1" : soma.value ,
            "origem" : "FrontEnd" ,
            "utm" : "https://www.teste.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=promo&utm_content=pipz1&utm_term=pipzterm"
           })
        alert("Evento Simples enviado")
    }

    function paginaVista() {
        pipz.track("page_view",{
        })
        alert("Pagina carregada")
    }

   /*  criar lista com todos os eventos disparados, assim que reaprender a usar table e criar table     
   no JS*/
