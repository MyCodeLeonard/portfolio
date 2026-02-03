import { Component, effect, inject } from '@angular/core';
import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common';
import { TranslateContentService } from '../../../translate-content.service';
import { RouterLink } from "@angular/router";
import { SharedService } from '../../../shared.service';
// import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-header-desktop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss'
})

export class HeaderDesktopComponent{
  translateContent = inject(TranslateContentService);
  activeLink: 0 | 1 | 2 | 3 = 0;
  activeOverlay:boolean = false;

  constructor(protected shared: SharedService) {
    effect(() => {
      // this.shared.getFooterTrigger() 
      // this.activeLink = 0
      if(this.shared.sectionHandover() == 0) this.activeLink = 0
      if(this.shared.sectionHandover() == 1) this.activeLink = 1
      if(this.shared.sectionHandover() == 2) this.activeLink = 2
      if(this.shared.sectionHandover() == 3) this.activeLink = 3
    });
  }
}
