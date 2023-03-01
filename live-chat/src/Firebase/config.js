// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0x4EV6E3W0DHUDYgEOSy6AYIWcR0iQOc",
  authDomain: "live-chat-27f75.firebaseapp.com",
  projectId: "live-chat-27f75",
  storageBucket: "live-chat-27f75.appspot.com",
  messagingSenderId: "1059652262965",
  appId: "1:1059652262965:web:ba129214c4a88caa25a57c"
};
firebase.initializeApp(firebaseConfig)
const app = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export { app, timestamp, auth }