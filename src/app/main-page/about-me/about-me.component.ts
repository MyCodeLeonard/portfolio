import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../shared/translate-content.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  hovered = false;
  translateContent = inject(TranslateContentService)
}
