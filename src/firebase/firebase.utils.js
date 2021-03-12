import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDE0fn5bgdZD16H67b_Qk6aUXLjQR8Drho",
    authDomain: "crwn-db-dc673.firebaseapp.com",
    projectId: "crwn-db-dc673",
    storageBucket: "crwn-db-dc673.appspot.com",
    messagingSenderId: "485429746293",
    appId: "1:485429746293:web:e784242aa2e8661ede763c",
    measurementId: "G-4K94KQ67QX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;