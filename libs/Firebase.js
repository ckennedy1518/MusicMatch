// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const FBauth = firebase.auth();
export const FBanalytics = firebase.firestore();
export const FBstorage = firebase.storage();
