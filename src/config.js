import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import "firebase/compat/credentials";
//import "firebase/auth";
//import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDKq7ac8s-ZlpDmlShbqgPAOzio-zKA-3I",
  authDomain: "hit-with-database.firebaseapp.com",
  projectId: "hit-with-database",
  storageBucket: "hit-with-database.appspot.com",
  messagingSenderId: "674336402509",
  appId: "1:674336402509:web:de9c2fecaf15c008aa8004",
  measurementId: "G-D6VXTFGF0R"
};

const firebaseInitial = firebase.initializeApp(firebaseConfig);
const db = firebaseInitial.firestore();

export { firebaseInitial, db };