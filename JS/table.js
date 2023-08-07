let nometable = document.getElementById("nomePipz");

let emailtable = document.getElementById("emailPipz");

let idadetable = document.getElementById("idadePipz");

let emailIdentificartable = document.getElementById("emailPipzId");


let cadastro = [];
cadastro[0] = nometable.value;
cadastro[1] = emailtable.value;
cadastro[2] = idadetable.value;

function mostrar(){
    alert (cadastro);
};

