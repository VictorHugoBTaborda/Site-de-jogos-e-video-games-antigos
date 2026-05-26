
let pixels = [];
let quantidade = 40; 

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  
  for (let i = 0; i < quantidade; i++) {
    pixels.push({
      x: random(width),
      y: random(-height, 0),
      tamanho: random(8, 16),
      velocidade: random(1, 4),
      cor: random(['#00ffcc', '#ff007f', '#3399ff', '#ffcc00'])
    });
  }
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}