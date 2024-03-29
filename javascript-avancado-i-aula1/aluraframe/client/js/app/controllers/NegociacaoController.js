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
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        // pedindo para a view atualizar com os dados da listaNegociacoes
        this._negociacoesView.update(this._listaNegociacoes);

        // instanciando a classe mensagem
        this._mensagem = new Mensagem();
        // instanciando MensagemView que vai receber onde eu quero incluir essa mensagem no meu HTML
        this._mensagemView = new MensagemView($('#mensagemView'));
        // pedindo para o mensagemView adicionar a mensagem  
        this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event) {
        event.preventDefault();        

        // adiciona os dados preenchidos no formulário na minha lista de negociações
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        // assim que eu fizer uma adição a mensagem recebe esse texto 
        this._mensagem.texto = 'Negociação adicionada com sucesso.'
        this._mensagemView.update(this._mensagem);

        // quando o meu adiciona é chamado eu peço para a view mostrar o modelo
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    // coloquei o "_" para dizer que esse método só pode ser chamado pela própria classe NegociacaoController
    _criaNegociacao() {
        // criando a negociacao com base nos meus dados do formulário
        // usando os dados preenchidos e passando para como atributos da classe Negociacao
        return new Negociacao(
            // DateHelper: estou acessando o método direto
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    // coloquei o "_" para dizer que esse método só pode ser chamado pela própria classe NegociacaoController
    // método para limpar meu formulário quando eu clicar no botão incluir
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0,0;
        // foca o campo data
        this._inputData.focus();
    }

}