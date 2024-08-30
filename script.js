// Função para gerenciar as abas
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab");

    // Remover a classe 'active' de todos os botões e conteúdos
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Adicionar a classe 'active' ao botão e conteúdo correspondente
    button.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
});

// Ativar a primeira aba ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const firstTabButton = document.querySelector(".tab-button");
  if (firstTabButton) {
    firstTabButton.click();
  }
});

// Ensure the modal is hidden when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; // Explicitly hide the modal
  console.log("Modal hidden on page load");

  // Adiciona event listeners para abrir o modal nas imagens da galeria
  document.querySelectorAll(".gallery-image").forEach((image) => {
    image.addEventListener("click", () => openModal(image.src));
  });

  // Adiciona event listener para fechar o modal ao clicar no 'x'
  document.querySelector(".close").addEventListener("click", closeModal);

  // Adiciona event listener para fechar o modal ao clicar fora da imagem
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    if (event.target === modal && event.target !== modalImg) {
      closeModal();
    }
  });
});

// Função para abrir o modal
function openModal(imageSrc) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  console.log("Opening modal with image:", imageSrc);
  modal.style.display = "flex"; // Show the modal
  modalImg.src = imageSrc; // Set the image in the modal
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("myModal");
  console.log("Closing modal");
  modal.style.display = "none"; // Hide the modal
}
