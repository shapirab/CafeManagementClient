import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { DashboardComponent } from './components/features/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthorizedComponent } from './components/shared/not-authorized/not-authorized.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
