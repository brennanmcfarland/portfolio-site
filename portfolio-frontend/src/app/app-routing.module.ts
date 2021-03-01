import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmedbComponent } from './aboutmedb/aboutmedb.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "projects", component: ProjectsComponent, data: { title: "Projects" } },
  { path: "aboutmedb", component: AboutmedbComponent, data: { title: "AboutMeDB" } },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
