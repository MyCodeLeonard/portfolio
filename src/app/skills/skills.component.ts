import { Component } from '@angular/core';
import { LinkButtonComponent } from "../hero/link-button/link-button.component";
import { SkillSetIconComponent } from "./skill-set-icon/skill-set-icon.component";
import { SpecialIconComponent } from "./skill-set-icon/special-icon/special-icon.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LinkButtonComponent, SkillSetIconComponent, SpecialIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  LetsTalk:string = "Let's Talk";

}
