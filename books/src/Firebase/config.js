import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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
export { db }
