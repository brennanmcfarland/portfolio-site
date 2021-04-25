import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BackendHealthcheckService } from '../shared/backend-healthcheck.service';

@Component({
  selector: 'app-live-indicator',
  templateUrl: './live-indicator.component.html',
  styleUrls: ['./live-indicator.component.scss']
})
export class LiveIndicatorComponent implements OnInit {

  public isBackendHit$ = this.backendHealthcheck.isBackendDown$.pipe(
    startWith(false),
    map(_ => true)
  );

  public isBackendDown$ = this.backendHealthcheck.isBackendDown$;

  constructor(
    private backendHealthcheck: BackendHealthcheckService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    ) {
    // import icons
    this.matIconRegistry.addSvgIcon(
      "live",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/live.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "off",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/off.svg")
    );
  }

  ngOnInit(): void {
  }

}
