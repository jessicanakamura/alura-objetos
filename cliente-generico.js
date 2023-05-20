function cliente (nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const jessica = new cliente("Jessica", "12345678910", "jessicanakamuram@gmail.com", 100);

console.log(jessica);