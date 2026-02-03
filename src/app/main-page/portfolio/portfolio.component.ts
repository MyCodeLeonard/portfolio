import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OverlayComponent } from './overlay/overlay.component';
import { TranslateContentService } from '../../shared/translate-content.service';

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
  selectedProject!: "projectOne" | "projectTwo";

  openOverlay(selectedProject: "projectOne" | "projectTwo"){
    this.isOpenOverlay = true;
    this.selectedProject = selectedProject
    document.body.style.overflow = 'hidden';
  }
}
