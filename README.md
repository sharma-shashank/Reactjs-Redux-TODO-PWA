## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Technologies Used
Language:- Javascript, HTML/CSS
Framworks:- Reactjs, Redux

- Uses concepts of Hooks and functional components

- Utilises concepts of Redux for managing the states.

### PWA functionalities

This app uses features of an PWA based applications:-
- Service-Worker: Background script which handels the lifecycle and cahche responses. We can also integrate features of google-workbox for handeling complex caches   but not required for this app as it doesn't include complex structures. 
- Offline support: Cached page to show user when they were having no internet connection.
- Caches the index.html as well as offline.html to support in low or no network connection
- Manifest File: To cache the icons and images
