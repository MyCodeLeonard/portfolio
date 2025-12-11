import { Component } from '@angular/core';
import { HeaderDesktopComponent } from "./header-desktop/header-desktop.component";
import { HeaderMobileComponent } from "./header-mobile/header-mobile.component";

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [HeaderDesktopComponent, HeaderMobileComponent],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent {

}
