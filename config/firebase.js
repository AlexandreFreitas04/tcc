import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAT3fgycxbNuTrVeRrkVozinXhCggLebGc",
  authDomain: "deujogo-a49d5.firebaseapp.com",
  projectId: "deujogo-a49d5",
  storageBucket: "deujogo-a49d5.firebasestorage.app",
  messagingSenderId: "634084992196",
  appId: "1:634084992196:web:234c0ea2b3b8c211261591",
  measurementId: "G-N53MV6D2EH"
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