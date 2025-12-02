import { Component, inject } from '@angular/core';
import { ClickButtonComponent } from "../shared/components/click-button/click-button.component";
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ClickButtonComponent, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  translateContent = inject(TranslateContentService);

  setFocus(input: HTMLInputElement) {
    input.focus();
  }

  highlight(prevHr: HTMLHRElement, nextHr: HTMLHRElement) {
    if (prevHr) prevHr.style.borderColor = '#3DCFB6';
    if (nextHr) nextHr.style.borderColor = '#3DCFB6';
  }

  reset(prevHr: HTMLHRElement, nextHr: HTMLHRElement) {
    if (prevHr) prevHr.attributeStyleMap.clear();
    if (nextHr) nextHr.attributeStyleMap.clear();
  }
}
