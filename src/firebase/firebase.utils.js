import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA5wkXzOcQnm2esREws7YzfAR1siUHOBPI",
  authDomain: "or-back.firebaseapp.com",
  projectId: "or-back",
  storageBucket: "or-back.appspot.com",
  messagingSenderId: "407770497637",
  appId: "1:407770497637:web:1450a6ac3da04722eb7c8c"
};


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'  });
export const signInWithGoogle = () => (
  auth.signInWithPopup(provider).catch(error => console.log(error))
);

export default firebase; 

