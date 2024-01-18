import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  readonly apiUrl = 'https://localhost:7110/api';

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(() => error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(this.apiUrl + path, { params })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http
      .post(this.apiUrl + path, body)
      .pipe(catchError(this.formatErrors));
  }
}
