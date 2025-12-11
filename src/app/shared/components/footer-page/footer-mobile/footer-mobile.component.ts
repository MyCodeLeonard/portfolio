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
  newTab: Window | null = null
  isPathname!:string;
  allowed = ["legal-notice", "privacy-policy"];

  closeTab() {
    window.close();
  }

  openPrivacyPolicy() {
    this.pathname();
    if (!this.allowed.includes(this.isPathname) && (!this.newTab || this.newTab.closed)){
      this.newTab = window.open('legal-notice', '_blank');
    }
    else if(this.isPathname == 'legal-notice'){
      window.scrollTo(0, 0);
    }
    else if(this.isPathname == 'privacy-policy'){
      this.newTab = window.open('privacy-policy', '_self');
    }
    else this.newTab?.focus();
  }

  pathname(){
    window.location.pathname.split('/').forEach(element => {
      if(element == 'legal-notice') this.isPathname = 'legal-notice';
      else if(element == 'privacy-policy') this.isPathname = 'privacy-policy';
      else this.isPathname = '';
    });
  }
}
