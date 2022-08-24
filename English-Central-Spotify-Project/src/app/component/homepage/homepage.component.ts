import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/app-state.service';
import { environment } from 'src/environments/environment';
import {Tracks} from '../tracks';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  tracks?: Tracks[];
  name: string = "";
  albumType: string = "";
  image: any;

  constructor(private http: HttpClient,
              private AppStateService: AppStateService) { }

  ngOnInit(): void {
    console.log('HomepageComponentcreated');

    this.addTrackToPlaylist(environment.accesstoken);

    console.log('setLoginPageVisible');
    this.AppStateService.setLoginPageVisibility(false);
  }

  addTrackToPlaylist(authToken: string) {
    console.log("asdhgfajshdfgj ", authToken);
    
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Bearer ' + authToken);
    let searchUrl: string = 'https://api.spotify.com/v1/tracks';

    this.http.get(searchUrl, {headers, params: {ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"}})
    .subscribe(((response: any) => {
      this.tracks = response.tracks;
      this.name = response.tracks[0].album.name;
      this.albumType = response.tracks[0].album.album_type;
      this.image = response.tracks[0].album.images[0];
    }));
  }

  milisecondToSecond (duration_ms: number){
    let second: number;
    let minute: number;
    let remain: number;

    second = duration_ms / 1000;
    minute = second / 60;
  }
}