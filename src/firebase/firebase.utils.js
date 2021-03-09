import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC8xUoWzI6Iq9kwgzuy7DT8yZ9MDehzl0k",
    authDomain: "crwn-db-7437d.firebaseapp.com",
    projectId: "crwn-db-7437d",
    storageBucket: "crwn-db-7437d.appspot.com",
    messagingSenderId: "44228785818",
    appId: "1:44228785818:web:03ca83a3424fc1ba9c1123",
    measurementId: "G-JTC9GGJ87M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
