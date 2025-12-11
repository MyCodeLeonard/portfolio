import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor!.style.left = e.clientX + "px";
  cursor!.style.top = e.clientY + "px";
});
