//A tecla button tem um foco em um botão automaticamente (tecla Tab)
function tocaSom(seletorAudio){

    //retorna aquilo que é passado como parâmetro da função
    const elemento = document.querySelector(seletorAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else
    {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i <listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i]; 
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    //onkeydown - quando a tecla for abaixada/pressionada
    tecla.onkeydown = function (evento) {
        //Pega a tecla que foi clicada 
        key = evento.code
        
        //Compara se a tecla foi o Space ou o Enter
        if (key === "Space" || key === "Enter"){
            //classList - lista todas as classes de um elemento
            //add - adiciona uma classe ao elemento
        tecla.classList.add('ativa');
        }
    }

    //onkeyup - Quando a tecla for levantada
    tecla.onkeyup = function() {
        //remove - tira uma class do elemento
        tecla.classList.remove('ativa');
    }
    
  }
 