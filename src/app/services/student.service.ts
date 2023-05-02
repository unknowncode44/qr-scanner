import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string = 'http://localhost:3000/api/'
   
  
  // para tener datos frescos creamos una instancia de Subject
  private _refresh$ = new Subject<void>()

  constructor(private http: HttpClient) { }
  //! Metodo para manejar bad requests
  handleError(error: HttpErrorResponse) {
    return throwError(() => error)
  }

  getStudents(): Observable<any> {
    let direction: string = this.url + 'students'
    return this.http.get<any>(direction).pipe(catchError(this.handleError))
  }
}
