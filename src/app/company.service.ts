import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './mock-companies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HeaderRowOutlet } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private messageService: MessageService) { }

  getCompanies(): Observable<Company[]> {
    this.messageService.add('Company Service: fetched companies');
    return of(COMPANIES);
  }

  getCompany(id: number): Observable<Company> {
    // Sends the message after fetching the company
    this.messageService.add(`SHeroService: fetched company id=${id}`);
    return of(COMPANIES.find(company => company.id === id));
  }
}
