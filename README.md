Projeto de Tabela Dinâmica com Formulário
Este projeto cria uma tabela dinâmica em HTML que permite adicionar e remover entradas através de um formulário. Os dados da tabela serão armazenados no localStorage, 
garantindo que eles persistam mesmo após a atualização da página.

Descrição
O projeto consiste em uma página HTML com um formulário para entrada de dados e uma tabela para exibir essas informações. 
O formulário coleta dados como nome, email, cidade e aniversário. Esses dados são adicionados à tabela e salvos no localStorage. 
O usuário pode remover qualquer linha da tabela, e as mudanças serão refletidas no localStorage.

Funcionalidades
Adicionar Linhas: Adiciona entradas à tabela a partir dos dados do formulário.
Remover Linhas: Remove entradas da tabela com um botão de lixeira.
Persistência de Dados: Os dados da tabela são armazenados no localStorage e carregados automaticamente ao recarregar a página.

UPDATES
UPDATE 08.08 - Adicionado botão que traz todos os itens da tabela pra um JSON. Recomendo tentar fazer envio pra endpoint no "BEECEPTOR",
a fins de estudo, adicionar novo botão que faz o envio dos dados. Após entendimento, usar o mesmo botão que cria o JSON para envio dos dados

Tecnologias Utilizadas
HTML
CSS
JavaScript

Estrutura do Projeto
index.html: Contém o código HTML para o formulário e a tabela.
styles.css: Contém os estilos CSS para a tabela e o botão de remoção.
script.js: Contém o código JavaScript para adicionar, remover e salvar dados da tabela.
Funcionalidade do Código
adicionarLinha()
Função para adicionar uma nova linha à tabela e salvar os dados no localStorage.

adicionarEventoRemoverLinha()
Função para adicionar um evento de clique ao botão de remoção da linha.

salvarTabelaNoLocalStorage()
Função para salvar os dados da tabela no localStorage.

carregarTabelaDoLocalStorage()
Função para carregar os dados da tabela do localStorage ao carregar a página.

Contribuições
Contribuições são bem-vindas! Se você tiver alguma melhoria ou correção, sinta-se à vontade para abrir uma issue. 

Estudante aspirante a DEV. Aberto a conselhos e ajudas
