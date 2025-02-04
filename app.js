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
    nomeAmigos.forEach(nome => {
        let li =  document.createElement('li');
        lista.appendChild(li);
        li.innerHTML = nome;
        limparResultado("resultado");
    });
    
}

function sortearAmigo(){
    if (nomeAmigos == ""){
        alert("Sem nomes para sortear!");
    } else{
        let amigoEscolhido =  parseInt(Math.random() * nomeAmigos.length );
        console.log(amigoEscolhido);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = "seu amigo secreto é " + nomeAmigos[amigoEscolhido];
        limparResultado("listaAmigos");
        nomeAmigos = [];
    }
}



function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}

function limparResultado(id){
    let limparCampo = document.getElementById(id);
    limparCampo.innerHTML="";
}