// Classe abstrata
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente");
        }
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("Método abstrato precisa ser implementado");
    }
}

// Classe herdeira 1
class Cachorro extends Animal {
    emitirSom() {
        return `${this.nome} faz: Au Au!`;
    }
}

// Classe herdeira 2
class Gato extends Animal {
    emitirSom() {
        return `${this.nome} faz: Miau!`;
    }
}

// Criando instâncias
const cachorro1 = new Cachorro('Rex', 5);
const gato1 = new Gato('Mimi', 2);
const cachorro2 = new Cachorro('Max', 3);

console.log(cachorro1.emitirSom()); 
console.log(gato1.emitirSom());     
console.log(cachorro2.emitirSom()); 
