import { Component } from '@angular/core';
import { MarqueeComponent } from "./marquee/marquee.component";
import { LinkButtonComponent } from "./link-button/link-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent, LinkButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  checkMyWork:string = 'Check my work';
  contactMe:string = 'Contact me';

  checkMyWorkId:string = 'portfolio';
  contactMeId:string = 'contact';
}
