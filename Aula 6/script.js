//enviar mensagem para o console do navegador
//console.log("Olá, mundo!");

//criando variáveis
//const nome = "Ofari";
//let idade = 30;

//console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

//console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//for(let i = 10; i >= 0; i--) {
   // console.log(i);
//}

let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "manga", "melancia", "pera", "pêssego", "kiwi"];

//console.log(frutas[0]); // maçã
//console.log(frutas[1]); // banana
//console.log(frutas[2]); // laranja

//for(let i = 0; i < frutas.length; i++) {
   // console.log(frutas[i]);
//}

function imprimelista() 
{

    const titulo = document.getElementById("Titulo");
    titulo.innerText = "Lista de Frutas";
    titulo.style.color = "blue";

    let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "manga", "melancia", "pera", "pêssego", "kiwi"];
    let container = document.getElementById("lista");

    container.innerHTML = ""; // Limpa o conteúdo anterior

    for(let i = 0; i < frutas.length; i++) {
       container.innerHTML += `<p>Item ${i + 1}: ${frutas[i]}</p>`; // Adiciona cada fruta como um parágrafo
    }

}

function calcula(){
        let resposta = document.getElementById("idade");

        let idade = Number(resposta.value);

        if(idade > 0) 
        { 
            let dias = idade * 365;

            let displayValor = document.getElementById("valor");
            let displayResultado = document.getElementById("resultado");

            displayValor.innerText = dias
            displayResultado.innerText = `Você tem ${dias} dias de vida!`;
        } else {
            alert("Por favor, insira uma idade válida.");
        }
    }