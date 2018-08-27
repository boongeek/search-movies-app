// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCWWmA88eaDHFfsL__d4YgtEqguSvkCu0s",
    authDomain: "movie-search-e28e8.firebaseapp.com",
    databaseURL: "https://movie-search-e28e8.firebaseio.com",
    projectId: "movie-search-e28e8",
    storageBucket: "movie-search-e28e8.appspot.com",
    messagingSenderId: "427503754618"
  }
};
