import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSiteComponent } from './about-site/about-site.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "projects", component: ProjectsComponent, data: { title: "Projects" } },
  { path: "aboutsite", component: AboutSiteComponent, data: { title: "About Site" } },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
