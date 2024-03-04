class Pessoa {

    constructor(Nome, Idade, Profissao){
        this.Nome = Nome;
        this.Idade = Idade;
        this.Profissao = Profissao;
    }

    exibirInfo() {
        console.log("Nome: " + this.Nome + ", Idade: " + this.Idade + ", Profissao: " + this.Profissao)
    }
}

var pessoa1 = new Pessoa("Joao", 34, "Advogado")

pessoa1.exibirInfo();

