import { AuthenticationService } from './service/authentication.service';
import { Component, OnInit } from '@angular/core';
import {RedirectComponent} from './component/redirect/redirect.component'
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // isLoggedIn: boolean = false;
  title = 'English-Central-Spotify-Project';
  constructor(private authenticationService: AuthenticationService,
    private appstateService: AppStateService){}

  ngOnInit(): void {
    console.log('AppComponentcreated');
  }

  isLoginPageVisible(){
    console.log('isLoginPageVisible',this.appstateService.isLoginPageVisible());
    return this.appstateService.isLoginPageVisible();
  }
}

