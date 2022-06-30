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
  
}
