function calcularParcelas() {
    var valorCompra = parseFloat(document.getElementById("valorCompra").value);
    var quantidadeParcelas = parseInt(document.getElementById("quantidadeParcelas").value);
    var juros = 0;

    if (quantidadeParcelas === 2) {
        juros = 3;
    } else if (quantidadeParcelas === 4) {
        juros = 7;
    }

    var valorJuros = (valorCompra * juros) / 100;
    var valorParcela = (valorCompra + valorJuros) / quantidadeParcelas;

    document.getElementById("resultado").value = "R$ " + valorParcela.toFixed(2);
}

function verificarParImpar() {
    var numero = parseInt(document.getElementById("numero").value);

    var resultadoParImpar;
    if (numero % 2 === 0) {
        resultadoParImpar = "Par";
    } else {
        resultadoParImpar = "Ímpar";
    }

    document.getElementById("resultadoParImpar").value = resultadoParImpar;
}