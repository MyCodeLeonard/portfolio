import { Component, inject } from '@angular/core';
import { LegalNoticeEnglishComponent } from "./legal-notice-english/legal-notice-english.component";
import { LegalNoticeGermanComponent } from "./legal-notice-german/legal-notice-german.component";
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from "../shared/components/header-page/header-page.component";
import { FooterPageComponent } from "../shared/components/footer-page/footer-page.component";

@Component({
  selector: 'app-legal-notice-page',
  standalone: true,
  imports: [ LegalNoticeEnglishComponent, LegalNoticeGermanComponent, CommonModule, HeaderPageComponent, FooterPageComponent],
  templateUrl: './legal-notice-page.component.html',
  styleUrl: './legal-notice-page.component.scss'
})
export class LegalNoticePageComponent {
  translateContent = inject(TranslateContentService);
}
