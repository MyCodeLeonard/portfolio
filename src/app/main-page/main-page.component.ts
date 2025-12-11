import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { HeaderPageComponent } from "../shared/components/header-page/header-page.component";
import { FooterPageComponent } from "../shared/components/footer-page/footer-page.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactMeComponent, HeaderPageComponent, FooterPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
