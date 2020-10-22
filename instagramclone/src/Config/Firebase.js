import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBx4WapWC6YDlHBqYVN4HAhwjFxit1CeNM",
    authDomain: "instagram-clone-react-83887.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-83887.firebaseio.com",
    projectId: "instagram-clone-react-83887",
    storageBucket: "instagram-clone-react-83887.appspot.com",
    messagingSenderId: "476179128299",
    appId: "1:476179128299:web:237aa90b80886fdb5543ae",
    measurementId: "G-2FZN3DF7GP"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };