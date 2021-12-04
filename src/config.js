import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDKq7ac8s-ZlpDmlShbqgPAOzio-zKA-3I",
  authDomain: "hit-with-database.firebaseapp.com",
  projectId: "hit-with-database",
  storageBucket: "hit-with-database.appspot.com",
  messagingSenderId: "674336402509",
  appId: "1:674336402509:web:4527992724f50c76aa8004",
  measurementId: "G-PPKFSB0ML3"
};

const firebaseInitial = firebase.initializeApp(firebaseConfig);
const db = firebaseInitial.firestore();

export { firebaseInitial, db };