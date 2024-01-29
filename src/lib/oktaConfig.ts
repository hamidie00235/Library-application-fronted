export const oktaConfig = {
    clientId: '0oaerxu5t4babjoW15d7',
    issuer: 'https://dev-44390241.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}