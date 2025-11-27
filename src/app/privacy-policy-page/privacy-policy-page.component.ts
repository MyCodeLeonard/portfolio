import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PrivacyPolicyComponent],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {

}
