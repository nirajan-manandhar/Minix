import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
