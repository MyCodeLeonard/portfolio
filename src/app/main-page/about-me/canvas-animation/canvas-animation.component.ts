import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Particle } from '../../../shared/classes/particale.class'

@Component({
  selector: 'app-canvas-animation',
  standalone: true,
  imports: [],
  templateUrl: './canvas-animation.component.html',
  styleUrl: './canvas-animation.component.scss'
})
export class CanvasAnimationComponent implements AfterViewInit{
  @ViewChild('profilePictureBg') canvasRef!: ElementRef<HTMLCanvasElement>;

  canvas!:HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  particles: Particle[] = [];
  
  symbols: string[] = [
    "{}", "</>", "()", "=>", "API", "SQL", "HTML", "CSS", "JS", "NODE", "PY"
  ];

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef?.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = this.canvas.clientHeight;
    this.canvas.height = this.canvas.clientWidth;

    this.init();
    this.animate();

    this.resizeCanvas();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resizeCanvas();
  }

  
  resizeCanvas(): void {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientWidth;
    this.init();
  }

  init() {
    this.particles = [];
    for (let i = 0; i < Math.floor(this.canvas.clientWidth/10); i++) {
      this.particles.push(new Particle(this.canvas, this.symbols));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.update();
      p.draw(this.ctx);
    });
    requestAnimationFrame(this.animate.bind(this));
  }
}