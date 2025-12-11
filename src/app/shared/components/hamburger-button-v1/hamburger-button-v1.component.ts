import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-button-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-button-v1.component.html',
  styleUrl: './hamburger-button-v1.component.scss'
})
export class HamburgerButtonV1Component {
  @Input() active!:boolean;
  @Output() activeChange = new EventEmitter<boolean>();

  setActive() {
     this.activeChange = this.activeChange;
    this.activeChange.emit(this.active);
  }
  
  overlayOpen(){
    this.active = true;
  }
}
