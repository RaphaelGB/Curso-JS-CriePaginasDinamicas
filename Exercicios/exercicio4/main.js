
/*1) Adicionando classe com clique
Imagine que você está trabalhando em um projeto de um teclado virtual musical. 
Sua tarefa é fazer com que, ao clicar em uma tecla do teclado virtual, 
a classe "ativa" seja adicionada a essa tecla,
 alterando sua aparência para indicar que está sendo pressionada.
 Utilize JavaScript para adicionar essa funcionalidade. 
 Considere que já existe um HTML com as teclas e cada uma tem sua 
 própria classe ou id.

*/

document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function() {
        this.classList.add('ativa');
    });
});

/*
2) Removendo classe com clique
Agora, o objetivo é remover a classe "ativa" de uma tecla
 do teclado virtual quando ela é clicada novamente. 
 Isso indicará que a tecla foi "solta". Utilize JavaScript 
 para implementar essa lógica, garantindo que a tecla volte ao 
 seu estado original após o segundo clique. Assuma que o HTML e as 
 classes das teclas já estão definidos. */

 document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function(event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    });
});
