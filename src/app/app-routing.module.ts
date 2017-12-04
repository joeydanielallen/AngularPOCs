import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/components/about/about.component';

const routes: Routes = [
    { pathMatch: 'full', path: '', redirectTo: '/dashboard' },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    //, { enableTracing: true }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }