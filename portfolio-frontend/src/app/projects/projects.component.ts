import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projects: ProjectsService) { }

  projects$ = this.projects.projects$;

  ngOnInit(): void {
  }

}
