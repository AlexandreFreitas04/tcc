import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAngHgvWF0eK4ZQp-GEzpr7gR5bcRj8Apw",
  authDomain: "tcca-8e180.firebaseapp.com",
  projectId: "tcca-8e180",
  storageBucket: "tcca-8e180.firebasestorage.app",
  messagingSenderId: "1030125489113",
  appId: "1:1030125489113:web:c02c06e8e4a07b03f9a7c8",
  measurementId: "G-0TK9DESM0R"
};
  
  
let app;
if (firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { auth, firestore, storage };