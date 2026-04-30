const titulo = document.getElementById('titulo');
const butao = document.getElementById('butao');
const conteudo = document.getElementById('conteudo');

butao.addEventListener("click", function(event) {
    event.preventDefault();
    const novaNota = {
        titulo: titulo.value,
        conteudo: conteudo.value
    };

    const novaNotaElement = document.createElement("div");
    novaNotaElement.classList.add("nota");
    novaNotaElement.innerHTML = `
        <h3>${novaNota.titulo}</h3>
        <p>${novaNota.conteudo}</p>
        <button id="excluir">excluir</button>
    `;
    const excluir = novaNotaElement.querySelector("#excluir");
    excluir.addEventListener("click", function() {
        novaNotaElement.remove();
    });
    document.body.appendChild(novaNotaElement);

});

conteudo.addEventListener("click", function() {
    conteudo.style.backgroundColor = "#fffaf5";
    titulo.style.backgroundColor = "#fffaf5";
});
