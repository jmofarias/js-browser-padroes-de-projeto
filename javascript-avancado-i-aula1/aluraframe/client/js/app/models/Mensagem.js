// classe para mostrar ao usuário uma mensagem ao clicar no botao incluir

class Mensagem {

    constructor(texto=''){
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    // o set vai permitir que o usuário insira um texto
    set texto(texto) {
    
        this._texto = texto;
    }
}