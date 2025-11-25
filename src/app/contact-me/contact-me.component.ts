import { Component } from '@angular/core';
import { ClickButtonComponent } from "./click-button/click-button.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ClickButtonComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

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
