const titulos = [
  "Pikachu",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Butterfree",
  "Pidgeotto",
  "Caterpie",
  "Metapod",
  "Krabby",
  "Muk"
];

const descricoes = [
  "Pokemon elétrico e parceiro principal de Ash, famoso por usar o ataque Thunderbolt.",
  "Pokemon de planta e veneno que carrega uma semente nas costas que cresce conforme ele evolui.",
  "Pokemon de fogo com uma chama na ponta da cauda que indica sua saúde e energia.",
  "Pokemon de água em forma de tartaruga que pode disparar jatos de água de seu casco.",
  "Pokemon inseto que evolui de Caterpie e usa pó e ataques de vento em batalha.",
  "Pokemon pássaro rápido usado por Ash para batalhas aéreas e reconhecimento.",
  "Pokemon inseto pequeno e verde que foi um dos primeiros capturados por Ash.",
  "Forma evoluída de Caterpie, conhecido por sua casca dura e defesa alta.",
  "Pokemon caranguejo que Ash capturou e que evolui depois para Kingler.",
  "Pokemon de lama roxa que vive em locais poluídos e usa seu corpo tóxico para atacar."
];

const links = [
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png",
  "https://img.pokemondb.net/sprites/scarlet-violet/normal/snorlax.png"
];

const element_img = document.getElementsByClassName("img-card");
const element_title = document.getElementsByClassName("titulo");
const element_info = document.getElementsByClassName("info");

for(let i = 0; i < 10; i++) {
  element_img[i].setAttribute("src", links[i]);
  element_title[i].textContent = titulos[i];
  element_info[i].textContent = descricoes[i];
}