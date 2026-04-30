// 1. Selecionando os elementos principais da página
const formSugestao = document.getElementById('form-sugestao');
const inputTitulo = document.getElementById('titulo');
const inputConteudo = document.getElementById('conteudo');
const inputMotivo = document.getElementById('Motivo');
const containerSugestoes = document.getElementById('container-sugestoes');

// 2. Escutando o evento de envio do formulário
formSugestao.addEventListener('submit', function(event) {
    // Impede a página de recarregar
    event.preventDefault();

    // 3. Organizando os dados capturados em um Objeto
    const novaNota = {
        titulo: inputTitulo.value,
        conteudo: inputConteudo.value,
        motivo: inputMotivo.value,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    // 4. Construindo a estrutura HTML da Nota (Hierarquia DOM)
    const cardSugestao = document.createElement('div');
    cardSugestao.classList.add('nota-card'); // Adicionando a classe do CSS

    const tituloSugestao = document.createElement('h3');
    tituloSugestao.textContent = `Nome: ${novaNota.titulo}`;

    const textoSugestao = document.createElement('p');
    textoSugestao.textContent = `Conteúdo: ${novaNota.conteudo}`;

    const motivoSugestao = document.createElement('p');
    motivoSugestao.textContent = `Motivo: ${novaNota.motivo}`;


    const dataSugestao = document.createElement('small');
    dataSugestao.textContent = `Adicionada em: ${novaNota.data}`;

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'X';
    btnExcluir.classList.add('btn-excluir');

    // Juntando as peças: colocando os filhos dentro do pai (cardSugestao)
    cardSugestao.appendChild(tituloSugestao);
    cardSugestao.appendChild(textoSugestao);
    cardSugestao.appendChild(motivoSugestao);
    cardSugestao.appendChild(dataSugestao);
    cardSugestao.appendChild(btnExcluir);
    
    // 5. Adicionando a interatividade (Eventos de Mouse)
    
    // Mostra o botão ao passar o mouse
    cardSugestao.addEventListener('mouseover', () => {
        btnExcluir.style.opacity = '5';
    });

    // Esconde o botão ao tirar o mouse
    cardSugestao.addEventListener('mouseout', () => {
        btnExcluir.style.opacity = '0';
    });

    // Evento de clique para excluir a sugestão da tela
    btnExcluir.addEventListener('click', () => {
        cardSugestao.remove();
    });

    // 6. Inserindo o card finalizado na página
    containerSugestoes.appendChild(cardSugestao);

    // 7. Limpando o formulário para o usuário digitar a próxima
    formSugestao.reset();
    inputTitulo.focus(); // Devolve a setinha de digitação pro campo de título
});