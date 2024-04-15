//main.js é o nome padrão para arquivos padrão no JS

//alert("Olá mundo"); //testando o alert - aparece uma mensagem de alerta na tela
//Ao abrir a página

//Buscando um elemento no JS

//Para encontrar um elemento HTML no JS usamos o seguinte código

document.querySelector('.tecla_pom'); //acessa a tecla Pom pela class

//chamando elementos pela TAG

document.querySelector('a');

//chamando elemento pelo id

document.querySelector('#som_tecla_pom');

//Dando play no audio
document.querySelector('#som_tecla_pom').play() // retorna um erro
//Uncaught TypeError: Cannot read properties of null (reading 'play') - não pode ler propriedade null
//Este erro ocorre quando a TAG <script> está antes do Body
//Como o script analisa linha por linha, se o <script> estiver antes do Body, ele não vai achar nada

//Resolvido esse erro, aparece outro:
/*
Uncaught (in promise) DOMException:
 play() failed because the user didn't interact with the document first.
 O navegador não permite executar um som antes do carregamento da página, então ele dá esse erro,
 é necessário tentar guardar e usar só quando necessário esse código (ver pasta 2)
*/


/*

APÊNDICE

DevTools - ferramenta de programador web
Console - mostra os erros mais facilmente do Javascriot
document - referencia que estamos querendo achar um elemento dentro do documento HTML
. -> chama uma função
querySelector() - função que faz uma busca tentando encontrar o seletor dentro do parênteses

depois do document.querySelector().
Após esse ponto, é mostrada todas as funções nativas para essa consulta
*/

