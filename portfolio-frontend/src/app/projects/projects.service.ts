import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  constructor(private http: HttpClient) { }

  // TODO: type everything
  // TODO: make url configurable and obviously deployable
  projects$: Observable<any> = this.http.get<any>("http://localhost:8080/projects")
    .pipe(
      map(projects => projects.sort((a: any, b: any) => a.precedence - b.precedence)));

}
