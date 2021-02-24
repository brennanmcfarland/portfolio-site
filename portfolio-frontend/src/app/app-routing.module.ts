import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmedbComponent } from './aboutmedb/aboutmedb.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "aboutmedb", component: AboutmedbComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
