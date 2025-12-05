import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../shared/translate-content.service';
import { OverlayComponent } from './overlay/overlay.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, OverlayComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translateContent = inject(TranslateContentService)

  isOpenOverlay:boolean = false;
  selectedProject!: "projectOne" | "projectTwo" | "projectThree";
}
