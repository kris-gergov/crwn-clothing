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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // If user doesn't already exists
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            // create new user
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user - ", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
