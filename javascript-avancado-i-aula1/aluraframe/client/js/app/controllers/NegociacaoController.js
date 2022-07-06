// o controller serve para capturar as ações do usuário e interagir com o modelo
class NegociacaoController {
    
    // definir dentro do construtor o $ e as propriedades melhora a perfomance de execução
    constructor() {
        // o querySelector é um método que quando jogado para uma variável ele passa a ser uma função que pertence a um objeto e acaba perdendo a associação com o document, por isso eu tenho usar o ".bind" para ele manter a associação com o document
        let $ = document.querySelector.bind(document);

        // esses inputs só devem ser acessados por NegociacaoController não devem ser acessados por fora da aplicação, só os métodos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._form = $('#formulario');
    }
    
    adiciona(event) {
        event.preventDefault();

        // '2022-11-12' para 2022, 10, 12

        // console.log(outraData.getDate()); // imprime o dia da data, outraData é a variável que recebe a data
        // console.log(outraData.getMonth()); // imprime o mês
        // console.log(outraData.getFullYear()); // imprime o ano

        // vendo que o tipo da data é uma string e por isso dá erro no .getTime()
        // console.log(typeof(this._inputData.value));


        // ... -> spread operator
        // método lista1.push(...lista2) o array lista1 vai receber cada item da lista2 e passar como paramêtro adicionando os itens da lista2 na lista1
        // método .reverse() vai inverter a ordem do array
        // método .join(',') vai juntar todos os elementos do array entre vírgulas
        // método .split('-') vai dividir os elementos em um array quando encontrar o hífen
        // o array funciona no Date
        // método replace passa uma expressão regular, .replace(/-/g, ',') vai pegar tudo que tiver hífen e trocar por vírgula
        // usando this._inputData.value apenas o dia fica errado, por isso é necessário usar alguns métodos para resolver esse problema

        // let data = new Date(this._inputData.value.replace(/-/g, ','));

        // new Date(this._inputData.value.split('-')) dessa forma aqui o Date vai receber um array

        // ...this._inputData.value.split('-') vai pegar o array que estava sendo passado e desmembrar ele para que cada item/elemento(ano, mês e dia) tenha seu próprio parâmetro do Date

        // console.log(...this._inputData.value.split('-'));

        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );
            // 0 % 2 == 0; 1 % 2 == 1; 2 % 2 == 0
            // encontrando a lista, pegando o mês e substituindo ele por -1 para que fica certo
            // a função .map() vai construir um novo array com base do retorno de uma função

            // .map(function(item, indice){
            //    return item - indice % 2;
            // })

            // para

            // .map((item, indice) => item - indice % 2) -> usando arrow function "=>", como meu bloco só tem uma instrução eu posso deixar tudo em uma linha, omitir os colchetes, omitir o ";" e omitir o "return"; poderia remover os paranteses de (item, indice) também


        // criando a negociacao com base nos meus dados do formulário
        // usando os dados preenchidos e passando para como atributos da classe Negociacao
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        
    }

}