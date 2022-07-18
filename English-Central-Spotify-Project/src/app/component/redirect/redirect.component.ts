import { HttpClient, HttpHeaders } from '@angular/common/http';
import { spotifyAuthResponse } from './../../interface/spotifyAuthResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})

export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { };

  
  ngOnInit() {
    // console.log("this should be seen in the console if ngOnInit in redirect is working...");
    // this.fetchcode();
    environment.authcode = this.fetchcode()!;
    this.fetchAccessToken(environment.authcode);

  }

  fetchcode() {
    return this.route.snapshot.queryParamMap.get('code');
  }

  fetchAccessToken(code:string){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization','Basic '+environment.encoded_id_and_secret);
    // headers = headers.append('Access-Control-Allow-Origin', '*');
    console.log(headers);
    let body = new URLSearchParams();
    body.append('grant_type', 'authorization_code');
    body.append('code', environment.authcode);
    body.append('redirect_uri', environment.redirect_uri);
    console.log(body);
    this.http.post<spotifyAuthResponse>(environment.tokenUrl, body, {headers})
    .subscribe(response => {
      console.log(response); //REMOVE IN THE FUTURE
      environment.accesstoken = response.access_token;
      environment.refreshtoken = response.refresh_token;
    });

}
}