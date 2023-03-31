import { Injectable } from '@angular/core';
import { Login } from '../models/login.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'


//* Creamos el servicio para correr nuestra API-REST
@Injectable({
  providedIn: 'root'
})
export class QrScannerService {

  url: string = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  //! Login service
  login(form: Login): Observable<any> {
    let direction: string = this.url + 'auth/login'
    return this.http.post<any>(direction, form).pipe(catchError(this.handleError))
  }
  //! PARA MANEJAR LOS BAD REQUEST
  handleError(error: HttpErrorResponse) {
    return throwError(() => error)
  }
}
