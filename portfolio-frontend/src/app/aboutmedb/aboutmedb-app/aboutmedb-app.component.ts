import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// TODO: make this a microservice
@Component({
  selector: 'app-aboutmedb-app',
  templateUrl: './aboutmedb-app.component.html',
  styleUrls: ['./aboutmedb-app.component.scss']
})
export class AboutmedbAppComponent implements OnInit {

  // TODO: move to ngOnInit
  // TODO: change the api to have an object with the list of items so we can error validate more easily
  sources$: Observable<any> = this.http.get<any>('http://localhost:8080/sources').pipe(tap(console.log));

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.sources$.subscribe(r => console.log(r));
  }

}
