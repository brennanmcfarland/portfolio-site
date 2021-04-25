import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AboutmedbComponent } from './aboutmedb/aboutmedb.component';
import { HomeComponent } from './home/home.component';
import { AboutmedbAppComponent } from './aboutmedb/aboutmedb-app/aboutmedb-app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectComponent } from './projects/project/project.component';
import { LiveIndicatorComponent } from './live-indicator/live-indicator.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutSiteComponent } from './about-site/about-site.component'; 

// TODO: split out these modules
@NgModule({
  declarations: [
    AppComponent,
    AboutmedbComponent,
    HomeComponent,
    AboutmedbAppComponent,
    ProjectsComponent,
    ContentBlockComponent,
    PageNotFoundComponent,
    ProjectComponent,
    LiveIndicatorComponent,
    AboutSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,       
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
