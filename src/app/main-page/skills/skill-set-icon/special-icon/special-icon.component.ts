import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../../../../shared/translate-content.service';

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
