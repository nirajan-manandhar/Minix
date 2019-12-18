import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Company } from './company';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      { id: 11, name: 'Calvin Klein', sales: null },
      { id: 12, name: 'Tommy Hilfiger', sales: null },
      { id: 13, name: 'Burberry', sales: null },
      { id: 14, name: 'Calvin 4', sales: null },
      { id: 15, name: 'Calvin 5', sales: null },
      { id: 16, name: 'Calvin 6', sales: null },
      { id: 17, name: 'Calvin 7', sales: null },
      { id: 18, name: 'Calvin 8', sales: null },
      { id: 19, name: 'Calvin 9', sales: null },
      { id: 20, name: 'Calvin 10', sales: null }
    ];
    return { companies };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the companies array is empty,
  // the method below returns the initial number (11).
  // if the companies array is not empty, the method below returns the highest
  // hero id + 1.
  genId(companies: Company[]): number {
    return companies.length > 0 ? Math.max(...companies.map(company => company.id)) + 1 : 11;
  }
}