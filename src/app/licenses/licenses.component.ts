import { Component } from '@angular/core';
import { FooterPageComponent } from "../shared/components/footer-page/footer-page.component";
import { HeaderPageComponent } from "../shared/components/header-page/header-page.component";

@Component({
  selector: 'app-licenses',
  standalone: true,
  imports: [FooterPageComponent, HeaderPageComponent],
  templateUrl: './licenses.component.html',
  styleUrl: './licenses.component.scss'
})
export class LicensesComponent {
  text = '';

  ngOnInit() {
    fetch('/3rdpartylicenses.txt')
      .then(res => res.text())
      .then(txt => this.text = txt);
  }
}
