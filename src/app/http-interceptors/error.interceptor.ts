import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((err: HttpErrorResponse) => {
        let errMessage = '';

        if (err.error instanceof ErrorEvent) {
          errMessage = `An error occured: ${err.error.message}`;
        } else {
          errMessage = `Server error code: ${err.status}\nMessage: ${err.message}`;
        }

        console.error(errMessage);
        return throwError(errMessage);
      })
    );
  }
}
