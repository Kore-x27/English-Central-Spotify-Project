//Interface that shows the type of response we get for the POST request that provides the auth token and refresh token. (Deniz)


export interface spotifyAuthResponse {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    token_type: string,
}
