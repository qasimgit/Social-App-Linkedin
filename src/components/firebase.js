import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMSxUSyutTZBu2t0_-tM_e89n9sWKiAiY",
  authDomain: "react-firebase-social-ap-fca02.firebaseapp.com",
  databaseURL: "https://react-firebase-social-ap-fca02.firebaseio.com",
  projectId: "react-firebase-social-ap-fca02",
  storageBucket: "react-firebase-social-ap-fca02.appspot.com",
  messagingSenderId: "266467347844",
  appId: "1:266467347844:web:41eee8d2687cfa5910e1d1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, auth };
