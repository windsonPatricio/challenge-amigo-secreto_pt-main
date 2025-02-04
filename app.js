//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigos = [];
let idAmigos = 0;


function adicionarAmigo() {
    let nomeDigitado = document.querySelector('input').value;

    if (nomeDigitado == ''){
        alert("Por Favor! digite um nome válido");
    } else{
        nomeAmigos.push(nomeDigitado);
        console.log(nomeAmigos);
        exibirListaTela();
        limparCampo();
    }
}


function exibirListaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    nomeAmigos.forEach(function(){
       lista.innerHTML = nomeAmigos;
    });
    
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   
}

function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}