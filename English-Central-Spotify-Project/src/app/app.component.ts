import { AuthenticationService } from './service/authentication.service';
import { Component, OnInit } from '@angular/core';
import {RedirectComponent} from './component/redirect/redirect.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'English-Central-Spotify-Project';
  constructor(private authenticationService: AuthenticationService){}
    // private user: RedirectComponent){this.user.getData().subscribe((data: any)=>{console.warn(data)})}

  ngOnInit(): void {
    console.log('AppComponentcreated');
    
    // this.onGetAccessToken();
    // console.log("app.component.ts initialized");
  }

}

