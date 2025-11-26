import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../../../shared/translate-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-icon.component.html',
  styleUrl: './special-icon.component.scss'
})
export class SpecialIconComponent {
  translateContent = inject(TranslateContentService)
}
