// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace with your staging firebase config
  firebase: {
    apiKey: 'your-staging-api-key',
    authDomain: 'your-staging-app.firebaseapp.com',
    databaseURL: 'https://your-staging-app.firebaseio.com',
    projectId: 'your-staging-app',
    storageBucket: 'your-staging-app.appspot.com',
    messagingSenderId: 'your-staging-message-sender-id'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
