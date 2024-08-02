function adicionarParagrafo() {
    var inputTexto = document.getElementById('textoInput').value;
    var novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = inputTexto;
    document.getElementById('conteudo').appendChild(novoParagrafo);
}

function adicionarTitulo() {
    var inputTitulo = document.getElementById('titInput').value;
    var novoTit = document.createElement('h1');
    novoTit.textContent = inputTitulo;
    document.getElementById('conteudo').appendChild(novoTit);
}