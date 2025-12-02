import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-button.component.html',
  styleUrl: './hamburger-button.component.scss'
})

export class HamburgerButtonComponent {
  @Input() isActive!:boolean;
}
