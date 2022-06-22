import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhNNK_xMG15LutJ5ZwPdjFdEa6uAuEZV4",
    authDomain: "clone-f1033.firebaseapp.com",
    projectId: "clone-f1033",
    storageBucket: "clone-f1033.appspot.com",
    messagingSenderId: "930243112548",
    appId: "1:930243112548:web:84c99b62335dfed2f73971",
    measurementId: "G-GKZZ21NMC9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };