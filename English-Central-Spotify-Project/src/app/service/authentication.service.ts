import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private requestAuthUrl = 'https://accounts.spotify.com/authorize';

  constructor(private http: HttpClient) {}

  // For now authenticator is not implemented.
  public get_query(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;    // common url
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAr2XNaHkRgSxk-lWKIUEjHTPT1pG7qj696yYQgdpTLKSuVL9oMGcENth0yynhRilrfN_FjFxtGd3f9poE' //header
    });
    console.log ("Query done.");

    // execute request
    return this.http.get(url, { headers });
    
  }
}
