// Configurando a data de início
const startDate = new Date("2024-06-03T00:00:00");

// Atualizar o contador
function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("timer").innerText = 
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualizar a cada segundo
setInterval(updateCounter, 1000);
updateCounter();

// Referências aos elementos do modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Selecionar todas as imagens da galeria
const galleryImages = document.querySelectorAll(".gallery img");

// Abrir o modal ao clicar em uma imagem
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src; // Definir a imagem clicada no modal
    modalImage.alt = img.alt;
  });
});

// Fechar o modal ao clicar no "X"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar o modal ao clicar fora da imagem
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
const playVideoBtn = document.getElementById("playVideoBtn");
const videoContainer = document.querySelector(".video-container");
const specialVideo = document.getElementById("specialVideo");

playVideoBtn.addEventListener("click", () => {
  videoContainer.style.display = "block";
  specialVideo.play();
});