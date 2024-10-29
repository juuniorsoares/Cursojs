
// AULA SOBRE ATRIBUTOS E METODOS PRIVADOS 

class Imposto {
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

    #pocentagemdoImposto = 0.20;
    
    #calcularSalario() {
        return this.salario * this.#pocentagemdoImposto;
    }

    obterSalarioLiquido(){
        return this.salario - this.#calcularSalario();
    }
}

let pessoa9 = new Imposto("Junior", 1000);
console.log(`O SALARIO DE ${pessoa9.nome} é R$ ${pessoa9.obterSalarioLiquido()}`);
