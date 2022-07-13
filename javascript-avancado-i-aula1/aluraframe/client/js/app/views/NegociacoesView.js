class NegociacoesView {
    
    // elemento será o conteúdo da div id=negociacoesView
    constructor(elemento) {

        this._elemento = elemento;
    }

    // modelo onde vai está meu html que vai ser inserido no meu index.html
    _template(model) {

        // no tbody eu construo dinamicamente tr's com base em cada negociacao do meu listaNegociacoes que será recebido pelo paramêtro model
        // ainda no tbody eu percorro a lista de negociacoes e crio um novo array com uma string com os dados da negociacao
        // para que seja retornado um string uso .join('') que vai concatenar os itens do array numa string
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map (n => `
                
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                
                `).join('')}
            </tbody>
        
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    // vai atualizar minha div inserindo meu template
    // model vai ser os meus dados
    update(model) {

        // pegando a minha div e retornando o meu método template() que vai está com o conteúdo do html
        // .innerHTML: vai converter a minha string do template() em um elemento do DOM e vai ser inserido como filho da minha div
        this._elemento.innerHTML = this._template(model);
    }
}