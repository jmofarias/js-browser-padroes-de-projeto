// classe ajudante que vai lidar só com a data
class DateHelper {

    // obs: se eu não definir o constructor() eu vou ter ele como padrão só que vazio
    constructor() {
        // para que quando alguém for instanciar (new) aparecer esse erro
        throw new Error('Está classe não pode ser instanciada')
    }

    // static: para conseguir acessar esse método diretamente por outra classe
    static dataParaTexto(data) {
        // chamando os valores das datas pelo template string `${variavel} e texto`
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

        // exibindo a data no formato dia/mes/ano
        // .getDate() pega o dia da data
        // .getMonth() pega o mês
        // .getFullYear() pega o ano
        // (negociacao.data.getMonth() + 1) para somar o dia do mês com 1
    }

    static textoParaData(texto) {
        // tratando por expressão regular quando for passado uma data inválida ex:11/12/2022
        // .teste() método que vai testar se o texto segue o padrão definido
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve está no formato aaaa-mm-dd');

        return new Date(...texto.split('-')
                .map((item, indice) => item - indice % 2));

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

        // 0 % 2 == 0; 1 % 2 == 1; 2 % 2 == 0
        // encontrando a lista, pegando o mês e substituindo ele por -1 para que fica certo
        // a função .map() vai construir um novo array com base do retorno de uma função

        // .map(function(item, indice){
        //    return item - indice % 2;
        // })

        // para

        // .map((item, indice) => item - indice % 2) -> usando arrow function "=>", como meu bloco só tem uma instrução eu posso deixar tudo em uma linha, omitir os colchetes, omitir o ";" e omitir o "return"; poderia remover os paranteses de (item, indice) também
    }
}