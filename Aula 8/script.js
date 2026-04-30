const botao = document.querySelector("#botao");
const pontos = document.querySelector("#pontos");
let pontosCount = 0;

botao.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * 350;

    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;
});

botao.addEventListener("click", () => {
    pontosCount++;
    pontos.textContent = `pontos: ${pontosCount}`;
    alert("vc conseguiu clicar no botão");
}); 

alert("b" + "a" + + "a" + "a");