let pixels = [];
let quantidade = 45; // Quantidade ideal de blocos caindo

function setup() {
  // Cria o canvas cobrindo o fundo inteiro
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  
  // Cria os blocos iniciais em posições espalhadas
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
  // Rastro suave para efeito neon clássico
  background(13, 13, 26, 40); 
  
  // Loop para desenhar e mover cada pixel
  for (let i = 0; i < pixels.length; i++) {
    let p = pixels[i];
    
    noStroke();
    fill(p.cor);
    rect(p.x, p.y, p.tamanho, p.tamanho);
    
    // Atualiza a posição (movimento contínuo para baixo)
    p.y += p.velocidade;
    
    // Reset ao chegar ao fim da tela
    if (p.y > height) {
      p.y = random(-50, 0);
      p.x = random(width);
    }
  }
}

// Garante o redimensionamento dinâmico se a tela mudar de tamanho
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}