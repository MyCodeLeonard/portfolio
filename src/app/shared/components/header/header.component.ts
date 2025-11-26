import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../translate-content.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLink!: 1 | 2 | 3;
  translateContent = inject(TranslateContentService)
  
  constructor(){}

  setActive(linkNumber: 1 | 2 | 3) {
    this.activeLink = linkNumber;
  }
}
