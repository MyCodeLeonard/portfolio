import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../../../shared/translate-content.service';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  translateContent = inject(TranslateContentService)
}
