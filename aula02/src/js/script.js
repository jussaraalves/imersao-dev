function converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorConvertido = parseFloat(valor);
  var resultado = 0;
  var resultadoLabelMoeda = "";

  var valorSelecionadoPeloUsuario = mudarMoeda();

  if (valorSelecionadoPeloUsuario === "euro") {
    resultado = converterParaEuro(valorConvertido);
    resultadoLabelMoeda = "Valor em Euro";
  } else if (valorSelecionadoPeloUsuario === "dolar") {
    resultado = converterParaDolar(valorConvertido);
    resultadoLabelMoeda = "Valor em Dólar";
  } else {
    resultado = converterParaIene(valorConvertido);
    resultadoLabelMoeda = "Valor em Iene";
  }

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var exibirValor = `O resultado em real é R$ ${resultado.toFixed(2)} BRL`;
  elementoValorConvertido.innerHTML = exibirValor;
}

function mudarMoeda() {
  var valorSelecionadoPeloUsuario =
    document.getElementById("tiposDeMoedas").value;
  if (valorSelecionadoPeloUsuario === "euro") {
    resultadoLabelMoeda = "Valor em Euro";
  } else if (valorSelecionadoPeloUsuario === "dolar") {
    resultadoLabelMoeda = "Valor em Dólar";
  } else {
    resultadoLabelMoeda = "Valor em Iene";
  }

  document.getElementById("labelMoeda").innerHTML = resultadoLabelMoeda;
  return valorSelecionadoPeloUsuario;
}

function converterParaDolar(valor) {
  return valor * 5.25;
}

function converterParaEuro(valor) {
  return valor * 5.24;
}

function converterParaIene(valor) {
  return valor * 0.036;
}
