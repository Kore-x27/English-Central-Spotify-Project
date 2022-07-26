import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { spotifyAuthResponse } from './../../interface/spotifyAuthResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})

export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { };

  
  ngOnInit() {
    // console.log("this should be seen in the console if ngOnInit in redirect is working..."); REMOVE
    // this.fetchcode(); REMOVE
    environment.authcode = this.fetchcode()!;
    this.fetchAccessToken(environment.authcode);
    // Maybe make it so redirect component onInit redirects back to the mainpage component later? (Deniz)

  }

  fetchcode() {
    return this.route.snapshot.queryParamMap.get('code');
  }

  fetchAccessToken(code:string){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization','Basic '+ btoa(`${environment.client_id}:${environment.client_secret}`));
    // headers = headers.append('Access-Control-Allow-Origin', '*'); THIS HEADER DOESN'T WORK, IN FACT IT CREATES AN ERROR FROM CORS PREFLIGHT RESPONSE.
    console.log(headers); //REMOVE IN THE FUTURE
    let body = new URLSearchParams();
    body.append('grant_type', 'authorization_code');
    body.append('code', environment.authcode);
    body.append('redirect_uri', environment.redirect_uri);
    console.log(body); //REMOVE IN THE FUTURE
    this.http.post<spotifyAuthResponse>(environment.tokenUrl, body, {headers})
    .subscribe(response => {
      console.log(response); //REMOVE IN THE FUTURE
      environment.accesstoken = response.access_token;
      environment.refreshtoken = response.refresh_token;
      this.redirectToHomePage();
    });

  }
  redirectToHomePage (){
    this.router.navigate(["homepage"]);
  }

  getData(){
    // let url = "https://api.spotify.com/tracks/{7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B}";
    // return this.http.get(url);
    // this.addTrackToPlaylist("2MuWTIM3b0YEAskbeeFE1i", environment.accesstoken);
  }

  // addTrackToPlaylist(authToken: string) {
  //   // params: new HttpParams().set('custom', 'Spo');
  //   let headers = new HttpHeaders();
  //   headers = headers.append('Authorization', 'Bearer ' + authToken);
  //   let searchUrl: string = 'https://api.spotify.com/v1/tracks/https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';

  //   return this.http.get(searchUrl, { headers })
  //   .pipe(((response: any) => response));
  // }
}