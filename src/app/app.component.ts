import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import AOS from 'aos';
import 'aos/dist/aos.css';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Initiales AOS init
    this.initAOS();

    // Bei jeder Navigation neu initialisieren
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initAOS();
      }
    });
  }

  private initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,
        once: false,
        mirror: true
      });
      AOS.refresh(); // WICHTIG: damit neue Inhalte erkannt werden
    }
  }
}
