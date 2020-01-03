import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  // Calls getCompanies() from the company service
  getCompanies(): void {
    this.companyService.getCompanies() // This is referencing the Observable
      .subscribe(companies => this.companies = companies); // This is Observable.Subscribe(...)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return };
    this.companyService.addCompany({ name } as Company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }

  constructor(private companyService: CompanyService) { }

  // Calls this class' getCompanies() method
  ngOnInit() {
    this.getCompanies();
  }

}
