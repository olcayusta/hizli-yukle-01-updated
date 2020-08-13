import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public files: any;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      this.snackBar.open(error.error, 'DAHA FAZLA OKU');
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  upload(file) {
    const formData = new FormData();
    formData.append('file', file.data);

    // FIXME service worker POST problem
    const headers: HttpHeaders = new HttpHeaders({
      'ngsw-bypass': 'true',
      Authorization: `Bearer ${sessionStorage.getItem('TEMP_TOKEN')}`
    });

    return this.http.post<any>(`http://localhost:3333/images`, formData, {
      headers,
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}
