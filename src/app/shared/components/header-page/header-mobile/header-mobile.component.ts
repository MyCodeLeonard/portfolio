import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerButtonV1Component } from '../../hamburger-button-v1/hamburger-button-v1.component';
import { TranslateContentService } from '../../../translate-content.service';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [HamburgerButtonV1Component, CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent implements OnDestroy{
  translateContent = inject(TranslateContentService);
  activeLink!: 1 | 2 | 3;
  
  activeOverlay:boolean = false;
  mq = window.matchMedia('(max-width: 799px)');
    
  constructor() {
    this.mq.addEventListener('change', () =>{
      if(!this.mq.matches) this.overlayClose();
    });
  }
  
  setActive(linkNumber: 1 | 2 | 3) {
    this.activeLink = linkNumber;
  }
  
  overlayOpen(){
    this.activeOverlay = true;
    document.body.style.overflow = 'hidden';
  }

  overlayClose(){
    this.activeOverlay = false;
    document.body.style.removeProperty('overflow');
  }
  
  stopClickBubbling(event: MouseEvent) {
    event.stopPropagation();
  }

  closeTab() {
    window.close();
  } 

  ngOnDestroy() {
    this.mq.removeEventListener('change', () => this.activeOverlay = this.mq.matches);
  }
}
