import { Component, inject} from '@angular/core';
import { TranslateContentService } from '../../shared/translate-content.service';
import { CommonModule } from '@angular/common';

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
