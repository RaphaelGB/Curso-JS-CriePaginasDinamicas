//Comparando funções normais e anônimas

//função normal
function soma(a, b){
    console.log(a+b);
}

soma(1+2);

//anônima

const soma = function (a, b){
    console.log( a + b)
}

//Não tem nome
// o resultado é armazenado em uma constante

function imprime(){
    console.log("Olá mundo!");
}

setTimeout(imprime, 1000) // a função é executada depois de 1000 milisegundos

setTimeout(function(){
    console.log("Usando função anônima!")
}, 1000); //Executa depois de 1000 milisegundos e depois apaga a função

//A função normal permanece na memória e depois não se pode usar o nome dela de novo

//Funções anônimas são úteis quando precisam ser executadas apenas uma vez no código

//Funções anônimas: usadas para passar funções com parâmetro como referência
function mostra(mensagem){
    console.log(mensagem);
}

setTimeout( function(){mostra("Estou usando uma função anônima!")}, 1000);
//Executa depois de 1000 milisegundos

//Diferente de 
setTimeout(mostra("Função normal"), 1000); //Não executa depois 1000 milisegundos.

//RESUMO
//Funções anônimas: Usadas em só um lugar e quando tem que chamar função com parâmetro