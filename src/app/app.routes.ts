import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticePageComponent } from './legal-notice-page/legal-notice-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';

export const routes: Routes = [
    {path:'', component: MainPageComponent},
    {path:'legal-notice', component: LegalNoticePageComponent},
    {path:'privacy-policy', component: PrivacyPolicyPageComponent}
];
