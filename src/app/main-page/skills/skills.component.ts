import { Component, inject} from '@angular/core';
import { SkillSetIconComponent } from "./skill-set-icon/skill-set-icon.component";
import { SpecialIconComponent } from "./skill-set-icon/special-icon/special-icon.component";
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { HamburgerButtonV2Component } from '../../shared/components/hamburger-button-v2/hamburger-button-v2.component';
import { TranslateContentService } from '../../shared/translate-content.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LinkButtonComponent, SkillSetIconComponent, SpecialIconComponent, CommonModule, HamburgerButtonV2Component],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  translateContent = inject(TranslateContentService);
  
  isActiveFrontend:boolean = true;
  isActiveBackend:boolean = false;
  isActiveDevSecOps:boolean = false;

  selectedFrontend(){
    this.isActiveFrontend = true;
    this.isActiveBackend = false;
    this.isActiveDevSecOps = false;
  }

  selectedBackend(){
    this.isActiveFrontend = false;
    this.isActiveBackend = true;
    this.isActiveDevSecOps = false;
  }

  selectedDevSecOps(){
    this.isActiveFrontend = false;
    this.isActiveBackend = false;
    this.isActiveDevSecOps = true;
  }
}
