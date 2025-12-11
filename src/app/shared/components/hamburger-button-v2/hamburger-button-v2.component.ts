import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-button-v2',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-button-v2.component.html',
  styleUrl: './hamburger-button-v2.component.scss'
})

export class HamburgerButtonV2Component {
  @Input() isActive!:boolean;
}
