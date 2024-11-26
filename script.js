// script.js
// Configuração de datas
const startDate = new Date(2022, 10, 27); // Data do início do relacionamento (27/11/2022)
const currentYear = new Date().getFullYear();
let nextAnniversary;

// Verifica se o próximo aniversário já passou neste ano
if (new Date(currentYear, 10, 27) > new Date()) {
  nextAnniversary = new Date(currentYear, 10, 27); // Aniversário deste ano
} else {
  nextAnniversary = new Date(currentYear + 1, 10, 27); // Aniversário do próximo ano
}

// Atualizar contadores e mensagem
function updateCounters() {
  const now = new Date();
  const timeTogether = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const timeUntilNext = Math.ceil((nextAnniversary - now) / (1000 * 60 * 60 * 24));

  document.getElementById('timer').innerText = `Tempo juntos: ${timeTogether} dias`;
  document.getElementById('next-anniversary').innerText = `Próximo aniversário de namoro em: ${timeUntilNext} dias`;
}

setInterval(updateCounters, 1000); // Atualiza o contador e mensagem a cada segundo
updateCounters(); // Chamada inicial

// Slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Troca a cada 3 segundos
}
showSlides();
