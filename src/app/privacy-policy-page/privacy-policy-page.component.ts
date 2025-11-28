import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { PrivacyPolicyEnglishComponent } from "./privacy-policy-english/privacy-policy-english.component";
import { PrivacyPolicyGermanComponent } from "./privacy-policy-german/privacy-policy-german.component";
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../shared/translate-content.service';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PrivacyPolicyEnglishComponent, PrivacyPolicyGermanComponent, CommonModule],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {
  translateContent = inject(TranslateContentService);
}
