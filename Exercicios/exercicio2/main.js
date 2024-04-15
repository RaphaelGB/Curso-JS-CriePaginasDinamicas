// 1 - Achar um botão específico
let botao1 = document.querySelector(".btn-primeiro");
let botao2 = document.querySelector(".btn-segundo");

console.log(botao1);

//2 - Emitir um alerta ao botão ser clicado
function cliqueButton(){
    alert("Fui clicado!");
}
//Usando função anônima
botao1.onclick = function(){
    cliqueButton();
}

//Chamando a função
botao2.onclick = cliqueButton;

//Resposta usando um addEventListener

let botao3;
botao3 = document.getElementById("btn-terceiro");
botao3.addEventListener('click', function(){
    alert('fui clicado!');
})