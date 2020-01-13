import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HeaderRowOutlet } from '@angular/cdk/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesUrl = 'api/companies'; // URL to web api

  private log(message: string) {
    this.messageService.add(`CompanyService: ${message}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl)
      .pipe(
        tap(_ => this.log('fetched companies')), // _ => used because the parameter is not important
        catchError(this.handleError<Company[]>('getcompanies', []))
      );
  }

  /** GET company by id. Will 404 if id not found */
  getCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get<Company>(url).pipe(
      tap(_ => this.log(`fetched company id=${id}`)),
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }

  updateCompany (company: Company): Observable<any> {
    return this.http.put(this.companiesUrl, company, this.httpOptions).pipe(
      tap(_ => this.log(`updated company id=${company.id}`)),
      catchError(this.handleError<any>('updateCompany'))
    );
  }

  addCompany (company: Company): Observable<Company> {
    return this.http.post<Company>(this.companiesUrl, company, this.httpOptions).pipe(
      tap((newCompany: Company) => this.log(`added company w/ id=${newCompany.id}`)),
      catchError(this.handleError<Company>(`addCompany`))
    );
  }

  deleteCompany (company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this.companiesUrl}/${id}`;

    return this.http.delete<Company>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted company id=${id}`)),
      catchError(this.handleError<Company>('deleteCompany'))
    );
  }

  /* GET companies whose name contains search term */
  searchCompanies(term: string): Observable<Company[]> {
    if (!term.trim()) {
      // if not search term, return empty company array.
      return of([]);
    }
    return this.http.get<Company[]>(`${this.companiesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found companies matching "${term}"`)),
      catchError(this.handleError<Company[]>('searchCompanies', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}
