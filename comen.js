document.getElementById('comentarioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Criando o elemento para exibir o comentário
    const comentarioDiv = document.createElement('div');
    comentarioDiv.classList.add('comentario');
    comentarioDiv.innerHTML = `<strong>${nome}</strong><p>${comentario}</p>`;

    // Adicionando o comentário na lista de comentários
    document.getElementById('comentariosContainer').appendChild(comentarioDiv);

    // Limpar os campos do formulário
    document.getElementById('comentarioForm').reset();
});
