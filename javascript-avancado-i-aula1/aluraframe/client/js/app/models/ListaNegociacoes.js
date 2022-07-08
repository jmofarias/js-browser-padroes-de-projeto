//objetivo adicionar todas as negociações em uma lista; só posso adicionar negociações, uma vez adiciona eu não posso remover e não posso trocar essa negociação da lista por outra
//solucao: criar um modelo de uma lista de negociação que vai encapsular essa nossa regra de negócio
class ListaNegociacoes {

    constructor(){
        // "_" para dizer que ninguém de fora deve usar essa lista
        // quando eu instanciar ListaNegociacoes eu vou ter uma lista de negociações em branco
        this._negociacoes = [];
    }

    // adiciona novas negociacoes com o .push()
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // blindando o minha lista para que ela não seja alterada
        // [].concat() faz a concatenacao criando uma nova lista com os dados da minha negociação, fazendo com que se alguém tentar alterar essa lista vai está alterando um cópia dela e não ela original
        return [].concat(this._negociacoes);
    }

}