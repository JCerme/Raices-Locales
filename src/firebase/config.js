// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore' 
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArfgTQlkh0gbXyJGOsF41Sei4mbgqaTqI",
  authDomain: "raiceslocales-28d05.firebaseapp.com",
  projectId: "raiceslocales-28d05",
  storageBucket: "raiceslocales-28d05.appspot.com",
  messagingSenderId: "835501301011",
  appId: "1:835501301011:web:48334efe95c72aa767cee6",
  measurementId: "G-KW695HMWZV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = () => {
  return firebase.firestore(app)
};