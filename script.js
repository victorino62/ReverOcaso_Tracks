// Seleciona os elementos de áudio e os controles de volume
const track1 = document.getElementById('track1');


const volume1 = document.getElementById('volume1');


// Adiciona eventos para controlar o volume de cada faixa
volume1.addEventListener('input', function() {
    track1.volume = volume1.value;
});


// Função que alterna a visualização dos likes para você (admin)
function toggleAdminView() {
    const likeCountElements = document.querySelectorAll('.admin-only');
    likeCountElements.forEach(element => {
        element.classList.toggle('show-admin');
    });
}

// Função que incrementa a contagem de likes e salva no localStorage
function likeTrack(trackId) {
    const likeCountElement = document.getElementById(`like-count-${trackId}`);
    const likeButton = document.getElementById(`like-${trackId}`);

    // Verifica se o like já foi dado
    if (localStorage.getItem(`liked-${trackId}`)) {
        alert("Você já deu like nesta track!"); // Aviso para o usuário
        return; // Já foi curtido, não faça nada
    }

    // Incrementa o contador de likes
    let currentLikes = parseInt(localStorage.getItem(`likes-${trackId}`)) || 0;
    currentLikes++;

    // Atualiza o contador de likes no localStorage
    localStorage.setItem(`likes-${trackId}`, currentLikes);

    // Marca o trackId como curtido para não permitir mais cliques
    localStorage.setItem(`liked-${trackId}`, true);

    // Atualiza o botão de like
    likeButton.classList.add("clicked");
    likeButton.textContent = "Liked";
    likeButton.disabled = true; // Desativa o botão de like

    // Atualiza o campo de likes no HTML
    likeCountElement.textContent = `Likes: ${currentLikes}`;
    likeCountElement.style.display = "none"; // Mantém oculto, mas o valor foi atualizado
}

// Função que carrega o estado dos likes ao carregar a página
function loadLikes() {
    const trackIds = ['track1']; // Adicione mais IDs de tracks conforme necessário

    trackIds.forEach(trackId => {
        const likeButton = document.getElementById(`like-${trackId}`);
        const likeCountElement = document.getElementById(`like-count-${trackId}`);

        // Verifica se o elemento existe antes de tentar usar
        if (!likeButton || !likeCountElement) {
            console.error(`Elemento não encontrado para ${trackId}`);
            return;
        }

        // Carrega o número de likes do localStorage
        const currentLikes = localStorage.getItem(`likes-${trackId}`) || 0;

        // Atualiza o contador de likes
        if (currentLikes > 0) {
            likeCountElement.textContent = `Likes: ${currentLikes}`;
        }

        // Verifica se já foi curtido e desativa o botão se sim
        if (localStorage.getItem(`liked-${trackId}`)) {
            likeButton.classList.add("clicked");
            likeButton.textContent = "Liked";
            likeButton.disabled = true;
        }
    });
}

// Carrega os estados dos likes ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    loadLikes(); // Chama a função loadLikes
});

// Função para limpar o localStorage
function clearLocalStorage() {
    localStorage.clear();
}

// Carrega os estados dos likes ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    clearLocalStorage(); // Limpa o localStorage ao carregar a página
    loadLikes(); // Chama a função loadLikes
});



// Função que alterna a visualização dos likes para você (admin)
function toggleAdminView() {
    const likeCountElements = document.querySelectorAll('.admin-only');
    likeCountElements.forEach(element => {
        element.classList.toggle('show-admin');
    });
}


/*
// Exemplo de como ativar a visualização dos likes (pode ser adaptado)
// Digite "toggleAdminView()" no console do navegador para exibir os likes

//copie no console Para limpar o localStorage e testar novamente o botão de "Like", siga este passo a passo:

Abra o console do navegador:
No Chrome, pressione Ctrl + Shift + I (ou Cmd + Option + I no Mac) e vá para a aba "Console".
Digite o seguinte comando no console para limpar o localStorage:

localStorage.clear();



*/
