import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyClOYDudLG6DOLbB9IoadicjZBtjivG8y0",
    authDomain: "e-story-hub.firebaseapp.com",
    projectId: "e-story-hub",
    storageBucket: "e-story-hub.appspot.com",
    messagingSenderId: "178820763213",
    appId: "1:178820763213:web:32090782cc179844afd604",
    measurementId: "G-HTC2PTMEW3",
    database_URL:"https://console.firebase.google.com/u/0/project/e-story-hub/firestore/data/~2F"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()