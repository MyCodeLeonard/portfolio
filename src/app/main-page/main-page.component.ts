import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent, HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
