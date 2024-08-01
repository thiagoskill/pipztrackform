
let nome = document.getElementById("nomePipz");

let email = document.getElementById("emailPipz");

let cidade = document.getElementById("cidadePipz");

let birthday = document.getElementById("birthdate");

let emailIdentificar = document.getElementById("emailPipzId");

let mensagens = ['Esta mensagem faz Parte de um Array, no slot 0' , 
                 'Esta mensagem faz parte de um Array, no slot 1'  ,
                ];
let soma = document.getElementById("numerodaSoma");
 
//identify
    function identificar(){
        pipz.identify( emailIdentificar.value ,
            {"email" : emailIdentificar.value , 
             "mensagem" : "identificado via Front-End"
        });
        alert("Identificar enviado");
    }
//evento personalizado
    function eventoSimples() {
        pipz.track("eventoSimples",{ 
            "nome" : nome.value ,
            "autor" : "Thiago Alves No JS",
            "email" : email.value , 
            "mensagem" : mensagens , 
            "numeroSoma1" : soma.value ,
            "origem" : "FrontEnd" ,
            "youtube": "youtube.com/sigmask"
           })
        alert("Evento Simples enviado")
    }

    function FormEnviado(){
        alert("Form enviado ao Pipz")
    }

    //TABELA ABAIXO:
   function adicionarLinha(){
    //obter a referencia da tabela

    let tabela = document.getElementById("tabelaEnviada").getElementsByTagName('tbody')[0];
    // Iniciando uma mensagem de erro
    let mensagemErro = "Por favor, preencha os seguintes campos:\n";
    let camposFaltando = false;

    //Verificar se cada campo esta preenchido ! inverte a variavel de true para false. += concatena as coisas
    if (!nome.value) {
        mensagemErro += "Nome\n";
        camposFaltando = true;
    }
    if (!email.value) {
        mensagemErro += "email\n"
        camposFaltando = true;
    }
    if (!cidade.value) {
        mensagemErro += "cidade\n"
        camposFaltando = true;
    }
    if (!birthday.value) {
        mensagemErro += "Data de Nascimento\n"
        camposFaltando = true;
    }
    //mostrar mensagem de erro se houver algum campo faltando
    if(camposFaltando) {
        alert(mensagemErro);
    }else{

    //criar nova linha (tr)
    let novaLinha = tabela.insertRow();

    //criar células e adicionar o conteudo
    let celula1 = novaLinha.insertCell(0);
    let celula2 = novaLinha.insertCell(1);
    let celula3 = novaLinha.insertCell(2);
    let celula4 = novaLinha.insertCell(3);
    let celulaAcao = novaLinha.insertCell(4);


    celula1.innerHTML = nome.value;
    celula2.innerHTML = email.value;
    celula3.innerHTML = cidade.value;
    celula4.innerHTML = birthday.value;
    celulaAcao.innerHTML = "<a class='remove-button'>🚮</a>";
    
    document.getElementById('FormulariodeTeste').reset();

    // Adiciona o evento de clique para o botão de remoção
    celulaAcao.querySelector('.remove-button').addEventListener('click', function() {
        tabela.deleteRow(novaLinha.rowIndex -1);
        });


    }
    // Se eu quisesse limpar os campos de entrada após adicionar a linha
    // nome.value = "";
    // email.value = "";
    // cidade.value = "";
    // birthday.value = ""; //isso deixaria os campos vazios
}