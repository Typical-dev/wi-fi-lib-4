import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBRjo3YTpsOOY-wJX6jlzG_xuzoutYIqX8",
    authDomain: "wi-fi-library.firebaseapp.com",
    projectId: "wi-fi-library",
    storageBucket: "wi-fi-library.appspot.com",
    messagingSenderId: "105780634605",
    appId: "1:105780634605:web:4dce7d084e09a330757de4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()