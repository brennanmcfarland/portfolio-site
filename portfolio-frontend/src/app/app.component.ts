import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // TODO: move to ngOnInit
  // TODO: change the api to have an object with the list of items so we can error validate more easily
  sources$: Observable<any> = this.http.get<any>('http://localhost:8080/sources').pipe(tap(console.log));

  ngOnInit(): void {
    this.sources$.subscribe(r => console.log(r));
  }

  constructor(private http: HttpClient) {
  }
}
