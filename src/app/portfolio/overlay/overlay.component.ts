import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../shared/translate-content.service';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  translateContent = inject(TranslateContentService);
}
