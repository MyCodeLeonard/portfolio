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
