// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: '28eae9b58df04f79b47821ee0a65bf15', // Our client id
  client_secret: '7d2a373a17f14a82bb929a507b7be938', // Our secret
  encoded_id_and_secret: 'MjhlYWU5YjU4ZGYwNGY3OWI0NzgyMWVlMGE2NWJmMTU6N2QyYTM3M2ExN2YxNGE4MmJiOTI5YTUwN2I3YmU5Mzg=',
  redirect_uri: 'http://127.0.0.1:5500/src/app/component/redirect/redirect.component.html', // Our ngredirect uri (curently unencoded)
  api_base_url: "https://api.spotify.com/v1", //base uri for all api calls
  scopes: "playlist-read-private", //scope for playlist reading, more may need to be added later
  requestAuthUrl: 'https://accounts.spotify.com/authorize', //url to which we send an auth request
  playlisturl: 'https://open.spotify.com/playlist/6Jm5avE8TNKvN1U43xLrFa?si=68d3b0387eef4349', //url of one of my open spotify playlists
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
