var resultado;

function escutar() {
    var valor = document.getElementById('input-valor');
    var pessoas = document.getElementById('input-pessoas');

    var span = document.getElementById('span');

    valor = parseInt(valor.value);
    pessoas = parseInt(pessoas.value);

    if(isNaN(valor) || isNaN(pessoas) || pessoas <= 0) {
        span.innerHTML = ("Insira um valor válido");
    } else {
        resultado = valor/pessoas;
        span.innerHTML = "R$ " + resultado.toFixed(2);
    }


}

function compartilhar() {
    var valor = document.getElementById('input-valor');
    var pessoas = document.getElementById('input-pessoas');

    var span = document.getElementById('span');

    valor = parseInt(valor.value);
    pessoas = parseInt(pessoas.value);

    if(isNaN(valor) || isNaN(pessoas) || pessoas <= 0) {
        span.innerHTML = ("Insira um valor válido");
    } else {
        resultado = valor/pessoas;
        span.innerHTML = resultado.toFixed(2);
    }

    var mensagem;

    mensagem = "💸*Vamos Rachar!*💸" + "\n\n valor total: R$ " + valor + "\n Pessoas: " + pessoas + "\n Valor por pessoa: R$ " + resultado;

    alert(mensagem);
}

