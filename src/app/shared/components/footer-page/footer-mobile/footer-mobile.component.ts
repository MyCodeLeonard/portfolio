import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../../translate-content.service';

@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss'
})
export class FooterMobileComponent {
  translateContent = inject(TranslateContentService);
}
