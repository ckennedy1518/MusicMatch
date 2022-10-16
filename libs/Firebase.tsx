// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe6UcNYiCy-Cx-QdOEqc_HmbCtn9LcKbM",
  authDomain: "musicmatch-be96b.firebaseapp.com",
  projectId: "musicmatch-be96b",
  storageBucket: "musicmatch-be96b.appspot.com",
  messagingSenderId: "130618642270",
  appId: "1:130618642270:web:7108b490f68efe011809cf",
  measurementId: "G-JNGLM1KJQ6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
