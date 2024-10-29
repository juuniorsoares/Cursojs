

class Ultils {
    static configLinguagem = "pt-br";
    static configTime = {
        hour: "2-digit",
        minute: "2-digit"
    };


    static getFormatDate(){
        let date = new Date();
        return date.toLocaleDateString(this.configLinguagem, this.configTime)
    }
}

class Conta {
    constructor(nome, telefone, saldo) {
        this.nome = nome;
        this.telefone = telefone;
        this.saldo = saldo;
        this.extrato = []
    }


    get exibirExtrato() {
        console.log("--------- EXTRATO --------------");

        this.extrato.forEach(item => {
            console.log(item);
        })

        console.log("--------- FIM DO EXTRATO --------------");
    }

    registrarNovoExtrato(item) {
        this.extrato.push(item)
    }

}

class ContaPopanca extends Conta {
    #taxaDeSaque = 0.10;

    saque(valor) {
        let taxaDeSaqueDoValor = valor * this.#taxaDeSaque;
        let valorDeSaqueComTaxa = valor + taxaDeSaqueDoValor;


        if (valorDeSaqueComTaxa > this.saldo) {
            throw new Error("Saldo Insuficiente");
        }


        this.saldo = this.saldo - valorDeSaqueComTaxa;
        this.registrarNovoExtrato(`${Ultils.getFormatDate()} - Saque de ${valor} - saldo de ${this.saldo}`)
        console.log(`O saldo atual ápos o saque é de: ${this.saldo}`);
    }


    deposito(valor){
        this.saldo = this.saldo + valor;
        this.registrarNovoExtrato(`${Ultils.getFormatDate()} - Deposito de ${valor} - saldo de ${this.saldo}`);
        console.log(`O saldo atual ápos o deposito é de: ${this.saldo}`);

    }
}


let novaContaPopanca = new ContaPopanca("teste", "123", 1000);
novaContaPopanca.saque(100);
novaContaPopanca.saque(100);
novaContaPopanca.deposito(500)
novaContaPopanca.deposito(500)

novaContaPopanca.exibirExtrato;



