const baseDados = [
    {titulo: "Vingadores: Ultimato", ano: 2019, status: "Assistido", nota: 5},
    {titulo: "Minecraft", ano: 2025, status: "Assistido", nota: 3},
    {titulo: "O Poderoso Chefão", ano: 1972, status: "Não Assistido", nota: 2},
    {titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, status: "Assistido", nota: 4},
    
]

const linhas = document.getElementsByClassName("linha-filme")

for(let i = 0; i < linhas.length; i++){
    const colunas = linhas[i].getElementsByTagName("td")

    colunas[0].textContent = baseDados[i].titulo
    colunas[1].textContent = baseDados[i].ano
    colunas[2].textContent = baseDados[i].status
    

    if(baseDados[i].status === "Assistido"){
        colunas[2].style.backgroundColor = "green"
    }

    let nome_imagem = `img/star-rating-${baseDados[i].nota}.png`
    const nota = document.createElement("img")
    nota.src = nome_imagem

    colunas[3].appendChild(nota)    
}