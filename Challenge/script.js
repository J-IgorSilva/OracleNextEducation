const inputTexto = document.querySelector(".input-texto");

const mensagem = document.querySelector(".mensagem");

function BotaoEncripitar(){
    const textoEncripitado = encripitar(inputTexto.value)
    mensagem.value = textoEncripitado
    mensagem.style.backgroundImage="none"
}

function encripitar(stringEncripitada){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","uder"]];
    stringEncripitada  = stringEncripitada.toLowerCase();
    
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncripitada.includes(matrizCodigo[i][0])){
            stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncripitada
}
function desencripitar(stringEncripitada){
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncripitada.includes(matrizCodigo[i][0])){
            stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[0][1], matrizCodigo[1][i])
        }
    }
}