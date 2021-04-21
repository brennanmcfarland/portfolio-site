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
  projects$: Observable<any> = this.http.get<any>("https://api.brennanmcfarland.com:9310/projects")
    .pipe(
      map(projects => projects.sort((a: any, b: any) => a.precedence - b.precedence)));

}
