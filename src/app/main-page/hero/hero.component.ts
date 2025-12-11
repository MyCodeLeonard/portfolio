import { Component, inject } from '@angular/core';
import { MarqueeComponent } from "./marquee/marquee.component";
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { TranslateContentService } from '../../shared/translate-content.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent, LinkButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  translateContent = inject(TranslateContentService);
}