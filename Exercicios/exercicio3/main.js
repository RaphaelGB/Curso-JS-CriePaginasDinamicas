//1- Incrementar o contador no console ao clicar no botão

let contador = 0;
botao = document.querySelector(".btn-primeiro");


function adicionaContador(){
    contador++;
    console.log(contador);
}

// botao.onclick = function(){
//     adicionaContador();
// }

botao.addEventListener('click', function(){
    adicionaContador();
})

// 2 - array com botões

let botoes = document.querySelectorAll(".btn");
console.log(botoes);

//3- Trabalhando com um botão específico dentro do array

botoes[3].onclick = adicionaContador;

// 4 - While para cada vez que um botão for clicado, adiciona no
/*let i = 0;
while(i < botoes.length){
    botoes[i].onclick = adicionaContador;
    i++
}*/

// 5 - utilize o for para a mesma tarefa

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = adicionaContador;

}