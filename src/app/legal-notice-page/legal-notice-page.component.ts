import { Component, inject } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { LegalNoticeEnglishComponent } from "./legal-notice-english/legal-notice-english.component";
import { LegalNoticeGermanComponent } from "./legal-notice-german/legal-notice-german.component";
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, LegalNoticeEnglishComponent, LegalNoticeGermanComponent, CommonModule],
  templateUrl: './legal-notice-page.component.html',
  styleUrl: './legal-notice-page.component.scss'
})
export class LegalNoticePageComponent {
  translateContent = inject(TranslateContentService);
}
