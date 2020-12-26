import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsL3KDK2g6pOdUWNNj94mERkUrhLIEvak",
  authDomain: "linkedin-30a9f.firebaseapp.com",
  projectId: "linkedin-30a9f",
  storageBucket: "linkedin-30a9f.appspot.com",
  messagingSenderId: "5317142650",
  appId: "1:5317142650:web:e18da98f39b0161c6633c3",
  measurementId: "G-KM4N30Y70B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
