// classe que será responsável por exibir uma mensagem no html de sucesso quando o usuário clicar em incluir
// MensaView vai herdar de View, herda o método update e o construtor (todas as características de View)
class MensagemView extends View {

    // essa classe vai poder receber um elemento e o pai dessa classe (super) também vai receber esse elemento
    constructor(elemento) {

        super(elemento);
    }

    // método que vai adicionar o html
    template(model) {
        
        // fazendo if ternário, dizendo que se o model.texto for false ele retorna <p></p> e se for true retorna o paragráfo com o texto (exibindo o conteúdo da div)
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}
