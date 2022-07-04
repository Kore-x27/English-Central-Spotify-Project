import { spotifyAuthResponse } from '../interface/spotifyAuthResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  // For now authenticator is not implemented.
  public get_code(): Observable<spotifyAuthResponse> {
    return this.http.get<spotifyAuthResponse>(environment.requestAuthUrl+"?client_id="+environment.client_id+"&scopes="+environment.scopes+"&response_type=code&redirect_uri="+environment.redirect_uri);
  }
  public get_access_token(): Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Authorization' , 'Basic ' + environment.encoded_id_and_secret);
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('https://accounts.spotify.com/api/token', 
    { grant_type: "authorization_code",
  code: "AQDUHP49EDYqJ6atYT3w_Kix14_YuK263XmkJnyarJAU90uTccebgY6sgMg5K01KcXlrmdrLAXdY6C9sv-Y6HkopucyFW0_FT5EkvNENEt_XKODZ2JABlSiab4vD9nKAEdXB852jR2T4ldI5BySubU9YFv_7jVsIdGIF5HX8e87mOGJu6s29bCD2XLXvhZlR",
 redirect_uri: environment.redirect_uri}, {headers});
  }

}
