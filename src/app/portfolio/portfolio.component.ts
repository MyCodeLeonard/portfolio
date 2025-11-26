import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../shared/translate-content.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translateContent = inject(TranslateContentService)
}
