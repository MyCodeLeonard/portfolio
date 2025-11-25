import { AfterViewInit, Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'app-click-button',
  standalone: true,
  imports: [],
  templateUrl: './click-button.component.html',
  styleUrl: './click-button.component.scss'
})
export class ClickButtonComponent {
  @Input() content!:string;
  
  mouseenter(event: Event){
    // const target= event.currentTarget as HTMLElement;
    // const children = target.children;

    // Array.from(children).forEach(child => {
    //   (child as HTMLElement).style.animation = '';
    //   (child as HTMLElement).style.transition = '';
    //   (child as HTMLElement).style.transform = '';
    // });
  }

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
