import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './mock-companies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return of (COMPANIES);
  }
}
