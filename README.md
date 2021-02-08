# Spotify Unwrapped

> A web app that visualizes your Spotify insights

Deployed with Heroku
![example badge](badges/succeeded.svg)

Built and bootstrapped with:

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Express](https://expressjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://www.styled-components.com/)

## Installation & Set Up

1. [Register a Spotify App](https://developer.spotify.com/dashboard/applications) and add `http://localhost:8888/callback` as a Redirect URI in the app settings.

2. Clone this repository.

3. Create an `.env` file in the root directory with the following configurations:

   ```
   CLIENT_ID=<your-client-id>
   CLIENT_SECRET=<your-client-serent>
   REDIRECT_URI=https://localhost:8888/callback
   FRONTEND_URI=https://localhost:3000
   ```

4. Install dependencies for the server.

   ```bash
   npm install
   ```

5. Install dependencies for the client.

   ```bash
   npm run client-install
   ```

6. To start development:

   ```bash
   npm run dev
   ```

7. The app is now running on http://localhost:3000/
