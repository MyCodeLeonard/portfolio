import { Component } from '@angular/core';
import { MarqueeComponent } from "./marquee/marquee.component";
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  checkMyWork:string = 'Check my work';
  contactMe:string = 'Contact me';

  checkMyWorkId:string = 'portfolio';
  contactMeId:string = 'contact';
}
