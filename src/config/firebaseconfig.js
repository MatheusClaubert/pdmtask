import  firebase from "firebase"
import 'firebase/storage';


let firebaseConfig = {
  apiKey: "AIzaSyAtV_a4iN7-b6ab_-OhW90tGZFsKb8Ne6w",
  authDomain: "task-94ab4.firebaseapp.com",
  projectId: "task-94ab4",
  storageBucket: "task-94ab4.appspot.com",
  messagingSenderId: "758751828785",
  appId: "1:758751828785:web:73c5bc065593c10f952e10"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database