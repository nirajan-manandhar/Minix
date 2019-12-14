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
  selectedCompany: Company;

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

  // Calls getCompanies() from the company service
  getCompanies(): void {
    this.companyService.getCompanies() // This is referencing the Observable
      .subscribe(companies => this.companies = companies); // This is Observable.Subscribe(...)
  }

  constructor(private companyService: CompanyService) { }

  // Calls this class' getCompanies() method
  ngOnInit() {
    this.getCompanies();
  }

}
