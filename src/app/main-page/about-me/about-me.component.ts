import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../shared/translate-content.service';
import { CanvasAnimationComponent } from "./canvas-animation/canvas-animation.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CanvasAnimationComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  hovered = false;
  translateContent = inject(TranslateContentService)
}
