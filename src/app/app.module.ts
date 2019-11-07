import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';


@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      CompaniesComponent,
      CompanyDetailComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
