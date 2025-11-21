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
  test(){
    console.log('test');
  }
}
