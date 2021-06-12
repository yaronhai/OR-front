import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWHmBmMAIi79Ga0VySUeTPP5DT666X3eU",
    authDomain: "or-backend.firebaseapp.com",
    projectId: "or-backend",
    storageBucket: "or-backend.appspot.com",
    messagingSenderId: "291835866102",
    appId: "1:291835866102:web:e5361e7992ba814358b5d7",
    measurementId: "G-724JWC7KMK"
};


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'  });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;