import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() title = "";
  
  @Input() link = "";

  @Input() isSchoolProject = false;

  // TODO: optionally use a service to fetch READMEs via GitHub API for description
  // TODO: projects dates and technologies/languages used
  // TODO: icon/picture
  // TODO: something to indicate A. whether it's actively being worked on and B. whether it's "cleaned up"
  // TODO: indicator of what type of repo it is?

}
