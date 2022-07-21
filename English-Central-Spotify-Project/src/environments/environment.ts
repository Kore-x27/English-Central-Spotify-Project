// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: '28eae9b58df04f79b47821ee0a65bf15', // Our client id
  client_secret: '7d2a373a17f14a82bb929a507b7be938', // Our secret
  redirect_uri: 'http://localhost:4200/redirect', // Our ngredirect uri (curently unencoded)
  api_base_url: "https://api.spotify.com/v1", //base uri for all api calls
  scopes: "playlist-read-private", //scope for playlist reading, more may need to be added later
  requestAuthUrl: 'https://accounts.spotify.com/authorize', //url to which we send an auth request
  tokenUrl: 'https://accounts.spotify.com/api/token', //url to which we send a post request to get token
  playlisturl: 'https://open.spotify.com/playlist/6Jm5avE8TNKvN1U43xLrFa?si=68d3b0387eef4349', //url of one of my open spotify playlists
  accesstoken: '',
  refreshtoken: '',
  authcode : ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
