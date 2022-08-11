class NegociacoesView extends View {

    constructor(elemento) {

        super(elemento);
    }
    
    // modelo onde vai está meu html que vai ser inserido no meu index.html
    template(model) {

        // no tbody eu construo dinamicamente tr's com base em cada negociacao do meu listaNegociacoes que será recebido pelo paramêtro model
        // ainda no tbody eu percorro a lista de negociacoes e crio um novo array com uma string com os dados da negociacao
        // para que seja retornado um string uso .join('') que vai concatenar os itens do array numa string

        // tfoor, rodapé que vai servir para totalizar o volume
        // reduce: vai processar o array, pegar cada item, acumular em volume que começa com 0.0 e me retornar um único resultado no fim que é o valor do total
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
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>

        </table>
        `;
    }
}