// Lista de frases
const phrases = [
  "Acredite em você!",
  "O sucesso é uma jornada, não um destino.",
  "Você é capaz de grandes coisas.",
  "Seja a mudança que você quer ver no mundo.",
  "Todo dia é uma nova oportunidade.",
  "A persistência é o caminho do êxito.",
  "A coragem é a resistência ao medo.",
  "Confie no processo.",
  "Seja gentil consigo mesmo.",
  "Grandes sonhos começam com pequenos passos.",
  "A prática leva à perfeição.",
  "Você nunca está sozinho.",
  "Todo esforço vale a pena.",
  "Sorria, a vida é bela!",
  "Cada erro é uma lição.",
  "O melhor ainda está por vir.",
  "Você é incrível do jeito que é.",
  "Acredite no seu potencial.",
  "Não desista, você está quase lá!",
  "A felicidade é feita de momentos."
];

// Seleciona os elementos HTML
const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote');

// Função para gerar uma frase aleatória
function generatePhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const newPhrase = phrases[randomIndex];
  
  // Animação de transição
  quoteElement.style.opacity = 0; // Some gradualmente
  setTimeout(() => {
    quoteElement.innerText = newPhrase; // Atualiza a frase
    quoteElement.style.opacity = 1; // Aparece gradualmente
  }, 500);
}

// Adiciona o evento de clique no botão
button.addEventListener('click', generatePhrase);

quoteElement.classList.add('fade-in');
setTimeout(() => quoteElement.classList.remove('fade-in'), 1000);

function createStars() {
  const starCount = 100; // Número de estrelas
  const body = document.body;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Posição aleatória
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    // Tamanho aleatório
    const size = Math.random() * 3 + 1 + "px";
    star.style.width = size;
    star.style.height = size;

    body.appendChild(star);
  }
}

createStars();
