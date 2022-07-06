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

  // ngOnInit(): void {
  //   this.onGetAccessToken();
  // }

  // onGetAccessToken(): void{
  //   this.authenticationService.get_access_token().subscribe(
  //     (response: any) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log("hopefully this onGetAccessToken call worked!")
  //   );
  // }

  // onGetAuth(): void {
  //   this.authenticationService.get_code().subscribe(
  //     (response: any) => console.log(response),
  //     (error: any) =>  console.log(error),
  //     () => console.log("done with onGetAuth()")
  //   );
  // }
}