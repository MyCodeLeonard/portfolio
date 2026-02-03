import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../../translate-content.service';
import { RouterLink } from "@angular/router";
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss'
})

export class FooterMobileComponent {
  translateContent = inject(TranslateContentService);

  constructor(public shared: SharedService) {}
}
