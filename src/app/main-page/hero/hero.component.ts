import { Component, inject, OnDestroy } from '@angular/core';
import { MarqueeComponent } from "./marquee/marquee.component";
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { TranslateContentService } from '../../shared/translate-content.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent, LinkButtonComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnDestroy{
  translateContent = inject(TranslateContentService);

  mq:MediaQueryList = window.matchMedia('(max-width: 799px)');
  isMobile:boolean = this.mq.matches;

  constructor() {
    this.mq.addEventListener('change', () => this.isMobile = this.mq.matches);
  }

  ngOnDestroy() {
    this.mq.removeEventListener('change', () => this.isMobile = this.mq.matches);
  }
}