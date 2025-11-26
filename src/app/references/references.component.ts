import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../shared/translate-content.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
translateContent = inject(TranslateContentService);
}
