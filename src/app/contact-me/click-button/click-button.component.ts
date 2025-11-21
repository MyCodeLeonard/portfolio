import { AfterViewInit, Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'app-click-button',
  standalone: true,
  imports: [],
  templateUrl: './click-button.component.html',
  styleUrl: './click-button.component.scss'
})
export class ClickButtonComponent implements AfterViewInit{
  @Input() content!:string;
  
  private host = inject(ElementRef<HTMLElement>).nativeElement;
  
  ngAfterViewInit(): void {
    const div = this.host.querySelectorAll('div');
  
    this.host.addEventListener('mouseenter', () => {
      div.forEach((el:HTMLElement) => {
        el.style.animation = '';
        el.style.transition = '';
        el.style.transform = '';
      });
    });
  
    this.host.addEventListener('mouseleave', () => {
      div.forEach((el:HTMLElement) => {
        const computed = getComputedStyle(el);
        const matrix = computed.transform == 'none' ? new DOMMatrix(): new DOMMatrix(computed.transform);
        const x = matrix.m41;
  
        el.style.animation = 'none';
        el.style.transform = `translateX(${x}px)`;
  
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.3s ease-out';
          el.style.transform = 'translateX(0)';
        });
      });
    });
  }
}
