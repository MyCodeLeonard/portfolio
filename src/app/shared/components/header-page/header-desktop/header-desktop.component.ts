import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../../../translate-content.service';

@Component({
  selector: 'app-header-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss'
})
export class HeaderDesktopComponent {
  translateContent = inject(TranslateContentService);
  activeLink!: 1 | 2 | 3;
  activeOverlay:boolean = false;
    
  constructor(){}
  
  setActive(linkNumber: 1 | 2 | 3) {
    this.activeLink = linkNumber;
  }
  
}
