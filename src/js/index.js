let totalCadastros = 0;
let nomes = [];
let telefones = [];
let datas = [];
let notas = [];

function minhaFuncao() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let dataInput = document.getElementById("data").value;
    data = new Date(dataInput);
    dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    let nota = document.getElementById("nota").value;
    nomes[totalCadastros] = nome;
    telefones[totalCadastros] = telefone;
    datas[totalCadastros] = dataFormatada;
    notas[totalCadastros] = nota;
    document.getElementById("usuarios").innerHTML += "<p onclick='exibir(" + totalCadastros + ")'>" + nome;
    
    alert("Cadastrado com Sucesso!");

    totalCadastros++;
}

function exibir(indice) {
    document.getElementById("cadastro").innerHTML = "<b>Nome: </b>" + nomes[indice] +
        "<b><br>Telefone: </b>" + telefones[indice] +
        "<b><br>Data: </b>" + datas[indice] +
        "<b><br>Nota: </b>" + notas[indice];
}
