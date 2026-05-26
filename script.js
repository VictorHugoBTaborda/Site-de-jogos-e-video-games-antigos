let pixels = [];
let quantidade = 45;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); 
  
  for (let i = 0; i < quantidade; i++) {
    pixels.push({
      x: random(width),
      y: random(-height, 0),
      tamanho: random(8, 16),
      velocidade: random(1.5, 4),
      cor: random(['#00ffcc', '#ff007f', '#3399ff', '#ffcc00'])
    });
  }

  // CONFIGURAÇÃO DOS CLIQUES DO SITE (INTEGRAÇÃO COM O HTML)
  configurarCliquesDoModal();
}

function draw() {
  background(13, 13, 26, 40); 
  
  for (let i = 0; i < pixels.length; i++) {
    let p = pixels[i];
    noStroke();
    fill(p.cor);
    rect(p.x, p.y, p.tamanho, p.tamanho);
    p.y += p.velocidade;
    if (p.y > height) {
      p.y = random(-50, 0);
      p.x = random(width);
    }
  }
}

function configurarCliquesDoModal() {
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal-container');
  const closeBtn = document.getElementById('close-btn');

  // Elementos internos do modal para preencher
  const mTitulo = document.getElementById('modal-titulo');
  const mCriador = document.getElementById('modal-criador');
  const mPais = document.getElementById('modal-pais');
  const mVendas = document.getElementById('modal-vendas');
  const mJogos = document.getElementById('modal-jogos');

  // Adiciona evento de clique para cada card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Puxa os dados que escrevemos nas tags data- do HTML
      mTitulo.innerText = card.getAttribute('data-nome');
      mCriador.innerText = card.getAttribute('data-criador');
      mPais.innerText = card.getAttribute('data-pais');
      mVendas.innerText = card.getAttribute('data-vendas');
      mJogos.innerText = card.getAttribute('data-jogos');

      // Torna o modal visível tirando a classe invisível
      modal.classList.remove('escondido');
    });
  });

  // Fechar o modal ao clicar no botão "X"
  closeBtn.addEventListener('click', () => {
    modal.classList.add('escondido');
  });

  // Fechar se o usuário clicar na área escura fora do modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('escondido');
    }
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}