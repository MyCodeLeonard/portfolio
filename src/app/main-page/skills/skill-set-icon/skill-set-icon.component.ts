import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-set-icon',
  standalone: true,
  imports: [],
  templateUrl: './skill-set-icon.component.html',
  styleUrl: './skill-set-icon.component.scss'
})
export class SkillSetIconComponent {
  @Input() skillUrl!:string;
  @Input() skilName!:string;
  @Input() skilName2!:string;
}
