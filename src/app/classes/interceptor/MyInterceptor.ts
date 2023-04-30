import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = this.newMethod(req);
    return next.handle(modifiedReq);
  }

    private newMethod(req: HttpRequest<any>) {
        const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmMWI0YWY5YzMyYjNmNjM2M2IxOTEiLCJpYXQiOjE2NjkzMjEzMzksImV4cCI6MTY2OTQwNzczOX0.ynFoQAgQOxkJxAnNYxlwDN6uFSiZR9h1_0AMskXzPY4';
        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${userToken}`),
        });
        return modifiedReq;
    }
}
