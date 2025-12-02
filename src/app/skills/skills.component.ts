import { Component, inject, Input } from '@angular/core';
import { LinkButtonComponent } from "../shared/components/link-button/link-button.component";
import { SkillSetIconComponent } from "./skill-set-icon/skill-set-icon.component";
import { SpecialIconComponent } from "./skill-set-icon/special-icon/special-icon.component";
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';
import { HamburgerButtonComponent } from "../shared/components/hamburger-button/hamburger-button.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LinkButtonComponent, SkillSetIconComponent, SpecialIconComponent, CommonModule, HamburgerButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  translateContent = inject(TranslateContentService);
  
  isActiveFrontend:boolean = true;
  isActiveBackend:boolean = false;

  toggle(){
    if(this.isActiveFrontend){
      this.isActiveFrontend = false;
      this.isActiveBackend = true;
    }
    else{
      this.isActiveFrontend = true;
      this.isActiveBackend = false;
    }
  }
}
