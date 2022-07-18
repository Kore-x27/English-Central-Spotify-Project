import { spotifyAuthResponse } from '../interface/spotifyAuthResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( 
    private http: HttpClient,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("this should be seen in the console if ngOnInit in authservice is working...");
    // this.fetchcode();

  }

  fetchcode() {
    // console.log(this.route.snapshot.queryParamMap.get('code'));
    // console.log("testing in service");
    return this.route.snapshot.queryParamMap.get('code');
  }
//   For now authenticator is not implemented.
 
//   public get_code(): Observable<spotifyAuthResponse> {
//     return this.http.get<spotifyAuthResponse>(environment.requestAuthUrl+"?client_id="+environment.client_id+"&scopes="+environment.scopes+"&response_type=code&redirect_uri="+environment.redirect_uri);
//   }
 
  public get_access_token(): Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Authorization' , 'Basic ' + environment.encoded_id_and_secret);
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('https://accounts.spotify.com/api/token', 
    { grant_type: "authorization_code",
  code: environment.authcode,
 redirect_uri: environment.redirect_uri}, {headers});
  }

}
