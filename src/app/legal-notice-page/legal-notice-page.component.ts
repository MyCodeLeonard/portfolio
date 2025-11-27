import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";

@Component({
  selector: 'app-legal-notice-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, LegalNoticeComponent],
  templateUrl: './legal-notice-page.component.html',
  styleUrl: './legal-notice-page.component.scss'
})
export class LegalNoticePageComponent {

}
