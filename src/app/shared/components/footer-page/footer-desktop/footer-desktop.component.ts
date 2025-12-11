import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../../translate-content.service';

@Component({
  selector: 'app-footer-desktop',
  standalone: true,
  imports: [],
  templateUrl: './footer-desktop.component.html',
  styleUrl: './footer-desktop.component.scss'
})
export class FooterDesktopComponent {
  translateContent = inject(TranslateContentService);
}
