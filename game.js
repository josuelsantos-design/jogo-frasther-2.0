const configuracao = {
type: Phaser .AUTO,
width: 640,
height: 480,
backgroundColor: '#00000',
physics: {
    default: 'arcade'
    arcade:{ debug: false }
},
    scene: {preload: preCarregar, create: criar, update: atualizar }
};

let jogador;
let teclas;
let paredes;
let inimigos; 
let moedas;
let textoPontuacao;
let textoFimDeJogo;
let pontuacao = 0;
let jogoTerminou = false;
let velocidade = 160;

const mapa = [
  '1111111111111111',
  '1000000001000001',
  '1011110101011101',
  '1010000101000001',
  '1010111101110101',
  '1000100000010001',
  '1110101111101011',
  '1000101000001011',
  '1011101011101011',
  '1000000010000001',
  '1111111111111111'
];

const tamanhoBloco = 40;

function preCarregar() {
    this.load.spritesheet('jogador', 'pacman_sheet.png',{ frameWidth: 32, frameHeight: 32 });
    this.load.spriteheet('inimigo', 'ghost_sheet.png',{ frameWidth: 32, frameHeight: 32 });

    // parece e moeda seguem gerados (sem asset externo)
    const grafico = this.add.graphics();
    grafico.fillStyle(0x2255cc, 1);
    grafico.fillRect(0, 0, tamanhoBloco, tamanhoBloco);
    grafico.generateTexture('parede', tamanhoBloco, tamanhoBloco);
    grafico.clear();
    graf
