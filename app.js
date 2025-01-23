function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    if (amigo == '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Verificar se o amigo já existe na lista
    if (Array.from(listaAmigos.children).some(li => li.textContent == amigo)) {
        alert('Este amigo já está na lista.');
        return;
    }

    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigo;
    listaAmigos.appendChild(novoAmigo);

    // Limpar o campo de input
    document.getElementById('amigo').value = '';
}
function sortearAmigo() {
    const amigos = document.querySelectorAll('#listaAmigos li');

    if (amigos.length == 0) {
        alert('Por favor, insira pelo menos um amigo na lista.');
        return;
    }

    // Sortear um amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado.textContent}`;

    // Remover o amigo sorteado da lista
    amigoSorteado.parentNode.removeChild(amigoSorteado);
}















