import { Component, inject } from '@angular/core';
import { FooterPageComponent } from "../shared/components/footer-page/footer-page.component";
import { HeaderPageComponent } from "../shared/components/header-page/header-page.component";
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-licenses',
  standalone: true,
  imports: [CommonModule, FooterPageComponent, HeaderPageComponent],
  templateUrl: './licenses.component.html',
  styleUrl: './licenses.component.scss'
})
export class LicensesComponent {
  translateContent = inject(TranslateContentService);
  text = '';

  ngOnInit() {
    fetch('/3rdpartylicenses.txt')
      .then(res => res.text())
      .then(txt => this.text = txt);
  }
}
