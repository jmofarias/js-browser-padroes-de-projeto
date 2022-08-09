// models: modelo, uma abstração do mundo real, os dados da aplicação e suas regras de negócio
// js com letra maiúscula "Negociacao" para dizer que é uma classe
class Negociacao {
    // constructor para definir os atributos/características da minha negociação
    constructor(data, quantidade, valor) {
        // a data ao criar a negociação terá a data atual do nosso sistema; o this aponta para a instância quando ela é criada
        // ao receber a data criar uma nova data baseada nessa data para que ela não seja alterada depois
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // congelando o objeto para não poder alterar as propriedades da minha instância; o detalhe é que o object freeze não entra nas propriedades do objeto data tornando as propriedades congeladas
        Object.freeze(this);
    }

    // se eu estou criando uma função dentro da classe eu chamo de método, se eu crio uma função fora da classe chamo de função
    get volume() {
        return this._quantidade * this._valor;
    }

    // uma negociação após criada não pode ser alterada, aqui resolvemos isso colocando "_" para dizer ao programador que essas propriedades só podem ser usadas pelos métodos da própria classe, ninguém de fora deveria acessá-los, e criando os acessores get

    // método acessador
    get data() {
        // devolvendo uma nova referência para data que recebe no seu construtor a data com o getTime que vai retornar um número representando essa data
        // estou criando uma nova data baseado na data da minha negociação
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}