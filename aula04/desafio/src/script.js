var listaFilmes = [
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ__gbILnE3jJ4cC5-5MYRg1yJpKINKnb4mlkElPRgei9fynPah",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZish2n99p_FbSsSv5zNzK0X3clcQhQmC1Zimm-HAtDQiYod7",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZ7FR5KMc8sY9rMJ520kSC1C_o6IxYl-vs5vKzglEhcEA755p",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTali4zX4xnLgUTsCJzijuYA3bKj6VI12T9ZPGhH72Z7kQXwq5s",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
