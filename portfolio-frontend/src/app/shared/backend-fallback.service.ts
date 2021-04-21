import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendFallbackService {

  // TODO: return fallback data
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of(new HttpResponse());
  }

  getProjects() {
    return []
  }

}
