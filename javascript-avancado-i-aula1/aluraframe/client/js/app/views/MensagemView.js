// classe que será responsável por exibir uma mensagem no html de sucesso quando o usuário clicar em incluir
class MensagemView {

    // recebe um elemento do DOM
    constructor(elemento) {
        this._elemento = elemento;
    }

    // método que vai adicionar o html
    _template(model) {
        
        // fazendo if ternário, dizendo que se o model.texto for false ele retorna <p></p> e se for true retorna o paragráfo com o texto (exibindo o conteúdo da div)
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}
