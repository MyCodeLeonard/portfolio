export class Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  text: string;
  opacity: number;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, symbols: string[]) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 14 + 10;
    this.speed = Math.random() * 0.6 + 0.2;
    this.text = symbols[Math.floor(Math.random() * symbols.length)];
    this.opacity = Math.random() * 0.5 + 0.25;
  }

  update() {
    this.y += this.speed;
    if (this.y > this.canvas.height) {
      this.y = -20;
      this.x = Math.random() * this.canvas.width;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(100, 180, 255, ${this.opacity})`;
    ctx.font = `${this.size}px monospace`;
    ctx.fillText(this.text, this.x, this.y);
  }
}