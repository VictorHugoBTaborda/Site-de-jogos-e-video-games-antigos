let pixels = [];
let quantidade = 45;

// Configuração do Novo Código Secreto "link91"
let codigoLink = ['l', 'i', 'n', 'k', '9', '1'];
let linkIndex = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Garante o canvas no fundo
  
  // Inicialização estável dos pixels
  for (let i = 0; i < quantidade; i++) {
    pixels.push({
      x: random(width),
      y: random(-height, 0),
      tamanho: random(8, 16),
      velocidade: random(1.5, 4),
      cor: random(['#00ffcc', '#ff007f', '#3399ff', '#ffcc00'])
    });
  }
}

function draw() {
  background(13, 13, 26, 40); 
  
  // Renderização contínua da chuva de pixels
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

// Ouve as teclas para capturar o código "link91"
function keyPressed() {
  if (key.toLowerCase() === codigoLink[linkIndex]) {
    linkIndex++;
    if (linkIndex === codigoLink.length) {
      ativarSegredoLink();
      linkIndex = 0; // Reseta após a ativação
    }
  } else {
    linkIndex = 0; // Se errar uma letra/número, reinicia
  }
}

function ativarSegredoLink() {
  // 1. Altera as cores da chuva para a paleta do Zelda (Verde e Ouro)
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].cor = random(['#00ff55', '#ffd700', '#00aa33']);
    pixels[i].velocidade += 1.5; // Dá uma acelerada no fundo
  }
  
  // 2. Torna visível a imagem do Link na frente do título
  let imagemLink = document.getElementById('link-secreto-img');
  if (imagemLink) {
    imagemLink.classList.remove('escondido');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}