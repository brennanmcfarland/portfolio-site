import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendHealthcheckService {

  private isBackendDownSubject = new Subject<boolean>();
  public isBackendDown$ = this.isBackendDownSubject.asObservable();

  constructor(private http: HttpClient) {
    http.get<any>("https://svzwi7ndpf.execute-api.us-east-1.amazonaws.com/projects")
    .subscribe(
      value => this.isBackendDownSubject.next(false),
      err => this.isBackendDownSubject.next(true)
    );
}

}
