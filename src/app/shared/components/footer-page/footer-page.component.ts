import { Component } from '@angular/core';
import { FooterDesktopComponent } from "./footer-desktop/footer-desktop.component";
import { FooterMobileComponent } from "./footer-mobile/footer-mobile.component";

@Component({
  selector: 'app-footer-page',
  standalone: true,
  imports: [FooterDesktopComponent, FooterMobileComponent],
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.scss'
})
export class FooterPageComponent {

}
