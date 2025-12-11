import { Component, inject } from '@angular/core';
import { PrivacyPolicyEnglishComponent } from "./privacy-policy-english/privacy-policy-english.component";
import { PrivacyPolicyGermanComponent } from "./privacy-policy-german/privacy-policy-german.component";
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../shared/translate-content.service';
import { HeaderPageComponent } from '../shared/components/header-page/header-page.component';
import { FooterPageComponent } from "../shared/components/footer-page/footer-page.component";

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [HeaderPageComponent, PrivacyPolicyEnglishComponent, PrivacyPolicyGermanComponent, CommonModule, FooterPageComponent],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {
  translateContent = inject(TranslateContentService);
}
