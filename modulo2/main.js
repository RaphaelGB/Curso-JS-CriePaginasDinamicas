
//Declaração de uma função
/*function nome(parâmetros{
    //código
}) */
function tocaSomPom(){

    document.querySelector('#som_tecla_pom').play(); //toca o áudio POM
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()//toca o áudio CLAP
}

document.querySelector('.tecla_pom'); //pega a tecla POM

//. -> acessa os atributos nativos do JS

//document.querySelector('.tecla_clap').onclick = tocaSomClap();

// ERRO: Uncaught (in promise) DOMException: play() 
//failed because the user didn't interact with the document first. 
//https://goo.gl/xX8pDD
//Resumo: o JS executa a função ao mesmo tempo que é guardada

//Guardando a função dentro do onclick
document.querySelector('.tecla_clap').onclick = tocaSomClap //Precisa ser sem parênteses
