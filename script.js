// Função para gerenciar as abas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remover a classe 'active' de todos os botões e conteúdos
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Adicionar a classe 'active' ao botão e conteúdo correspondente
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Ativar a primeira aba ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const firstTabButton = document.querySelector('.tab-button');
    if (firstTabButton) {
        firstTabButton.click();
    }
});

// Função para abrir o modal
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = modal.querySelector('.modal-image');
    modal.style.display = 'flex'; // Mostra o modal
    modalImg.src = imageSrc; // Define a imagem no modal
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Oculta o modal
}

// Adiciona event listeners para abrir o modal nas imagens da galeria
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', () => openModal(image.src));
});

// Adiciona event listener para fechar o modal ao clicar no 'x'
document.querySelector('.close').addEventListener('click', closeModal);

// Adiciona event listener para fechar o modal ao clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('myModal')) {
        closeModal();
    }
});
