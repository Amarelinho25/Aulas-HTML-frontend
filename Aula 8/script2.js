const nome = document.querySelector("#nome");
const cor = document.querySelector("#cor");
const titulo = document.querySelector("#titulo");
const corpo = document.querySelector("body");

nome.addEventListener("input", () => {
    titulo.textContent = `Perfil de ${nome.value}`;
});

cor.addEventListener("input", (event) => {
    const corEscolhida = event.target.value;
    corpo.style.backgroundColor = corEscolhida;
});