import { AuthenticationService } from './service/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'English-Central-Spotify-Project';
  constructor(private authenticationService: AuthenticationService){}

  ngOnInit(): void {
    // this.onGetAccessToken();
    // console.log("app.component.ts initialized");
  }

}