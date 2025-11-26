import { Component, inject } from '@angular/core';
import { LinkButtonComponent } from "../hero/link-button/link-button.component";
import { SkillSetIconComponent } from "./skill-set-icon/skill-set-icon.component";
import { SpecialIconComponent } from "./skill-set-icon/special-icon/special-icon.component";
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LinkButtonComponent, SkillSetIconComponent, SpecialIconComponent, CommonModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  translateContent = inject(TranslateContentService)
}
