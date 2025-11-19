import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { OverlayComponent } from "../portfolio/overlay/overlay.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent, HeaderComponent, AboutMeComponent, FooterComponent, SkillsComponent, PortfolioComponent, OverlayComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
