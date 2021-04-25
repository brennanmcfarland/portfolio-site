import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendFallbackService {

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (req.url.endsWith("/projects")) {
      return of(new HttpResponse({ body: this.getProjects() }));
    }
    return of(new HttpResponse());
  }

  getProjects() {
    return [{"name":"arc23","displayName":"Arctic Flaming Monkey Typhoon (arc23)","description":"A deep learning library built on/to be used in conjunction with PyTorch.\n","sourceUrl":"https://github.com/brennanmcfarland/arc23","isSchoolProject":false,"precedence":0},{"name":"bbsbbs","displayName":"BBSBBS","description":"A good old-fashioned bulletin board system.","sourceUrl":"https://github.com/brennanmcfarland/networksclass/tree/master/project4","isSchoolProject":true,"precedence":9},{"name":"cardinal","displayName":"Cardinal","description":"A digital voice assistant and accessibility tool.","sourceUrl":"https://github.com/brennanmcfarland/Cardinal","isSchoolProject":false,"precedence":3},{"name":"jobs-manager","displayName":"Jobs Manager","description":"Manages tasks and schedules their related processes.","sourceUrl":"https://github.com/brennanmcfarland/jobs-manager","isSchoolProject":true,"precedence":11},{"name":"keras-projects","displayName":"Keras Projects","description":"I'll write a more detailed description after dinner.  There's a recurrent neural network in there that generates text (and it works)!","sourceUrl":"https://github.com/brennanmcfarland/keras","isSchoolProject":false,"precedence":7},{"name":"osprey","displayName":"Osprey","description":"A client-server application that messages people when they're being too loud.","sourceUrl":"https://github.com/brennanmcfarland/Osprey","isSchoolProject":false,"precedence":4},{"name":"portfolio-site","displayName":"Portfolio Site","description":"This site! My portfolio/about me website.\n","sourceUrl":"https://github.com/brennanmcfarland/portfolio-site","isSchoolProject":false,"precedence":1},{"name":"stylegan2","displayName":"StyleGAN2","description":"My unfinished attempt at replicating StyleGAN2, a generative adversarial neural network.","sourceUrl":"https://github.com/brennanmcfarland/stylegan2","isSchoolProject":false,"precedence":8},{"name":"torch-art","displayName":"Torch Art","description":"A classifier convolutional neural network trained on the Cleveland Museum of Art dataset I made to try out/get familiar with PyTorch.","sourceUrl":"https://github.com/brennanmcfarland/torch-art","isSchoolProject":false,"precedence":2},{"name":"unity-strategy-game","displayName":"Unity Strategy Game Prototype","description":"A prototype turn-based strategy game I made in the Unity Game Engine when I was learning the fundamentals.","sourceUrl":"https://github.com/brennanmcfarland/hexagons","isSchoolProject":false,"precedence":6},{"name":"weiver","displayName":"Weiver","description":"A review aggregation and analytics program hackathon project.","sourceUrl":"https://github.com/brennanmcfarland/Weiver","isSchoolProject":false,"precedence":5},{"name":"wireframes","displayName":"Wireframes","description":"A representational model of UI elements on a canvas.","sourceUrl":"https://github.com/brennanmcfarland/softwarecraftsmanship/tree/master/wireframes","isSchoolProject":true,"precedence":10}];
  }

}
