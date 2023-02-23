import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnyCH9SPfROyoT7TfNyKH6fLTZfqaXoUg",
  authDomain: "vue-blog-9b2ad.firebaseapp.com",
  projectId: "vue-blog-9b2ad",
  storageBucket: "vue-blog-9b2ad.appspot.com",
  messagingSenderId: "375775648435",
  appId: "1:375775648435:web:1556e1f32e1a7413eeaec6"
};

firebase.initializeApp(firebaseConfig)

const firebaseProject = firebase.firestore()

export { firebaseProject }