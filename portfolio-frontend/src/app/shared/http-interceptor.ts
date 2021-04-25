import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Subject } from "rxjs";
import { startWith, switchMap, timeout } from "rxjs/operators";
import { BackendFallbackService } from "./backend-fallback.service";
import { BackendHealthcheckService } from "./backend-healthcheck.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient,
        private backendHealthcheck: BackendHealthcheckService,
        private backendFallback: BackendFallbackService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const response = new Subject<any>();
        // if backend known to be down, return backup and cancel any in-flight requests, else return request
        return this.backendHealthcheck.isBackendDown$.pipe(
            startWith(false),
            switchMap((isDown: boolean) => isDown ? this.backendFallback.handle(req) : next.handle(req)));
    }
}