import { Component, Input } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})

export class LinkButtonComponent {
  @Input() content!:string;
  @Input() contentId!:string;

  mouseleave(event: Event){
    const target = event.currentTarget as HTMLElement;
    const children = target.children;

    Array.from(children).forEach(child => {
      const x = new DOMMatrix(getComputedStyle(child).transform).m41;

      (child as HTMLElement).style.animation = 'none';
      (child as HTMLElement).style.transform = `translateX(${x}px)`;

      requestAnimationFrame(() => {
        (child as HTMLElement).style.transition = 'transform 0.3s ease-out';
        (child as HTMLElement).style.transform = 'translateX(0)';
      });

      setTimeout(() => {
        (child as HTMLElement).style.animation = '';
        (child as HTMLElement).style.transition = '';
        (child as HTMLElement).style.transform = '';
      }, 305);
    });
  }
}