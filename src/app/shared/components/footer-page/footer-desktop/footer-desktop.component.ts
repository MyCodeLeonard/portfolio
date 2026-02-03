import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../../translate-content.service';
import { RouterLink } from "@angular/router";
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-footer-desktop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-desktop.component.html',
  styleUrl: './footer-desktop.component.scss'
})
export class FooterDesktopComponent {
  translateContent = inject(TranslateContentService);

  constructor(public shared: SharedService) {}
}
