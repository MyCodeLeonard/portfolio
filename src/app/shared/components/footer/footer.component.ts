import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../translate-content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translateContent = inject(TranslateContentService);
}
