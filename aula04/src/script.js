var listaFilmes = [
  "O castelo animado",
  "A viagem de Chihiro",
  "Meu amigo totoro",
];
//Adicionar novos elementos
listaFilmes.push("O castelo no céu");
listaFilmes.push("Princesa Mononoke");
listaFilmes.push("O Serviço de Entregas da Kiki");
listaFilmes.push("Ponyo");
listaFilmes.push("Sussurros do Coração");
listaFilmes.push("Vidas ao Vento");
listaFilmes.push("O Túmulo dos Vagalumes");
listaFilmes.push("O Reino dos Gatos");

// valor inicial. condição. expressao final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
