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
document.querySelector('.tab-button').click();
