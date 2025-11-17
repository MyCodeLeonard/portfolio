import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLink!: number;
  select:"DE" | "EN" = 'EN';

  setActive(linkNumber: number) {
    this.activeLink = linkNumber;
  }

  setSelect(selectInitials:"DE" | "EN"){
    this.select = selectInitials
  }
}
