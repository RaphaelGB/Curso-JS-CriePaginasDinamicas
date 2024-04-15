function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play(); 
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let i = 0;i <listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i]; 
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    console.log(i);
}
//Boa prática: uma linha vazia no fim do arquivo