import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './mock-companies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private messageService: MessageService) { }

  getCompanies(): Observable<Company[]> {
    this.messageService.add('Company Service: fetched companies');
    return of(COMPANIES);
  }
}
