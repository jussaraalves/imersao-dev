// Criando um objeto no JS
//           chave. valor.
var rafa = { nome: "rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "paulo", vitorias: 3, empates: 2, derrotas: 1, pontos: 0 };
var gui = { nome: "gui", vitorias: 1, empates: 2, derrotas: 3, pontos: 0 };
var jucs = { nome: "jucs", vitorias: 2, empates: 2, derrotas: 3, pontos: 0 };

//Acessar valores especificos
// console.log(rafa.derrotas);
// console.log(paulo.empates);
// console.log(gui.vitorias);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

//Altera uma variavel
rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

//array
var jogadores = [rafa, paulo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias = jogador.vitorias + 1;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores); //exibe na tela a nossa atualizacao de pontos!
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates = jogador.empates + 1;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores); //exibe na tela a nossa atualizacao de pontos!
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores); //exibe na tela a nossa atualizacao de pontos!
}
