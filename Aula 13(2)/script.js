class Animal {
    constructor(nome, idade, especie) {
       this.nome = nome;
       this.idade = idade;
       this.especie = especie;
    }

    cumprimentar() {
        console.log(this.nome + " disse oi");
    }       

    falar() {
        if (this.especie === "Cachorro") {
            console.log("Au au!");
        }
        if (this.especie === "Gato") {
            console.log("Miau!");
        }
    }
}

const cachorro = new Animal("Sammy", 6, "Cachorro");
const gato = new Animal("Mia", 3, "Gato");

cachorro.falar();
gato.falar();

