class Ultis {
    
    static linguagemDoSistema = "PT-BR";

    static obterDataProximosMes() {
        let now = new Date();
        let date;

        if (now.getMonth() === 11) {
            date = new Date(now.getFullYear() + 1, 0, now.getDate())
        } else {
            date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
        }

        return date.toLocaleDateString(this.linguagemDoSistema);
    }
}

console.log(` o proximo mês é: ${Ultis.obterDataProximosMes()}`);
console.log(` a linguagem do sistema é: ${Ultis.linguagemDoSistema}`);
