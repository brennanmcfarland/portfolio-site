import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Subject } from "rxjs";
import { switchMap, timeout } from "rxjs/operators";
import { BackendFallbackService } from "./backend-fallback.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    private isBackendDownSubject = new BehaviorSubject(false);
    private readonly timeoutInterval = 10000;

    constructor(private http: HttpClient, private backendFallback: BackendFallbackService) {
        http.get<any>("https://svzwi7ndpf.execute-api.us-east-1.amazonaws.com/projects").pipe(timeout(this.timeoutInterval))
        .subscribe(
          value => {},
          err => this.isBackendDownSubject.next(true)
        );
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const response = new Subject<any>();
        // if backend off, return backup, else return request
        // first will be behaviorsubject
        // after that just act on whichever first
        //return this.isBackendDown ? this.backendFallback.handle() : next.handle(req);
        return this.isBackendDownSubject.pipe(
            switchMap((isDown: boolean) => isDown ? this.backendFallback.handle(req) : next.handle(req)));
    }
}