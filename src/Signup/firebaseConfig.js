
//import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/database'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAXlS438uyxjgH-vpU-0k1llH-yofKwFmI",
  authDomain: "react-firebase-auth-959e5.firebaseapp.com",
  projectId: "react-firebase-auth-959e5",
  storageBucket: "react-firebase-auth-959e5.appspot.com",
  messagingSenderId: "810450830253",
  appId: "1:810450830253:web:9e7884920404f72b925724"
};


const app = firebase.initializeApp(firebaseConfig);

export default app