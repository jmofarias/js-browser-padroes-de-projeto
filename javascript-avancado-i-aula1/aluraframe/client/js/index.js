// criando uma variável que é um array para capturar os campos do form
var campos = [
    // pegando os campos que quero do meu form
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos);

// pegando minha tbody para depois adicionar os valores do form nela
var tbody = document.querySelector('table tbody');

// submeter formulario quando eu clicar em incluir, para isso pego meu formulário pela classe aqui e adiciono um evento de submissão que executa uma função
document.querySelector('.form').addEventListener('submit', function(event){
    // quando eu submeter meu formulário vou varrer cada item do meu array pegar o valor deles e criar uma tr

    // pedindo para o js que meu formulario não deve ser atualizado e limpado quando submeter ele (que é o padrão)
    event.preventDefault();

    // criando a tr
    var tr = document.createElement('tr');

    // criando os td's da minha tr, que para cada item do array campos ele vai me passar o valor
    campos.forEach(function(campo){
        var td = document.createElement('td');
        // o conteúdo da td será o valor do campo
        td.textContent = campo.value;

        // dizendo que a td será filha de tr
        tr.appendChild(td);
    });

    // criando o volume para adicionar na tabela
    var tdVolume = document.createElement('td');
    // calculando o volume e colocando dentro do td
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    // limpando os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // colocando foco no primeiro campo para melhor experiência do usuário
    campos[0].focus();
})