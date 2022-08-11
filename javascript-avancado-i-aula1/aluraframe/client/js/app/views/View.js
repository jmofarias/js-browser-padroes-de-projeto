// classe que vai extrair o que tinha em comum nas classes NegociacoesView e MensagemView, e colocar nessa classe

class View {

    // elemento será o conteúdo da div id=negociacoesView
    // recebe um elemento do DOM
    constructor(elemento) {

        this._elemento = elemento;
    }

    // avisando ao programador que ele não deve esquecer de implementar o método template() quando usar a classe View
    // obs.: se outra classe que está herdando essa classe View possuir uma classe com o mesmo nome desta (template()) ela vai sobrescrever esse método da classe pai, mas caso ela não sobrescreva (quer dizer que não possui esse método) esse erro será lançado no console para o programador
    template() {

        // lançando uma exceção
        throw new Error('O método template deve ser implementado.');
    }

    // vai atualizar minha div inserindo meu template
    // model vai ser os meus dados
    update(model) {

        // pegando a minha div e retornando o meu método template() que vai está com o conteúdo do html
        // .innerHTML: vai converter a minha string do template() em um elemento do DOM e vai ser inserido como filho da minha div
        this._elemento.innerHTML = this.template(model);
    }
}