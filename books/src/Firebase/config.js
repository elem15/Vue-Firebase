import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore/lite' // for getData()
import { getFirestore } from 'firebase/firestore' // for snapShot
const firebaseConfig = {
  apiKey: "AIzaSyASMRJPOy2O8lCKYjnjLZnd7BggoYNVYiM",
  authDomain: "books-3b7aa.firebaseapp.com",
  projectId: "books-3b7aa",
  storageBucket: "books-3b7aa.appspot.com",
  messagingSenderId: "701762401008",
  appId: "1:701762401008:web:16c0fcf64a6f0dc1ee0835"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app)
export { db, auth }
