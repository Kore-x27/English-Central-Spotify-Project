import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/app-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAuthenticationTestUrl(): string {
    // this.appStateService.setLoginPageVisibility(false);
    return `https://accounts.spotify.com/authorize?client_id=${environment.client_id}&scopes=playlist-read-private&response_type=code&redirect_uri=${environment.redirect_uri}`;
  }
}
