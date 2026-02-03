import { Component, effect, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerButtonV1Component } from '../../hamburger-button-v1/hamburger-button-v1.component';
import { TranslateContentService } from '../../../translate-content.service';
import { RouterLink } from "@angular/router";
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [HamburgerButtonV1Component, CommonModule, RouterLink],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent implements OnDestroy{
  translateContent = inject(TranslateContentService);
  activeLink: 0 | 1 | 2 | 3 = 0;
  
  activeOverlay:boolean = false;
  mq = window.matchMedia('(max-width: 799px)');
    
  constructor(protected shared: SharedService) {
    effect(() => {
      // this.shared.getFooterTrigger() 
      // this.activeLink = 0

      if(this.shared.sectionHandover() == 0) this.activeLink = 0
      if(this.shared.sectionHandover() == 1) this.activeLink = 1
      if(this.shared.sectionHandover() == 2) this.activeLink = 2
      if(this.shared.sectionHandover() == 3) this.activeLink = 3
    });

    this.mq.addEventListener('change', () =>{
      if(!this.mq.matches) this.overlayClose();
    });
  }
  
  overlayOpen(){
    this.activeOverlay = true;
    document.body.style.overflow = 'hidden';
  }

  overlayClose(){
    if(this.activeOverlay){
      this.activeOverlay = false;
      document.body.style.removeProperty('overflow');
    }
  }
  
  stopClickBubbling(event: MouseEvent) {
    event.stopPropagation();
  } 

  ngOnDestroy() {
    this.mq.removeEventListener('change', () => this.activeOverlay = this.mq.matches);
  }
}
