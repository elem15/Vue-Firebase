import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXBb4c79maICzR2VVpxam6W8PRD0Ac8JM",
  authDomain: "playlist-4db5e.firebaseapp.com",
  projectId: "playlist-4db5e",
  storageBucket: "playlist-4db5e.appspot.com",
  messagingSenderId: "747359315217",
  appId: "1:747359315217:web:069840525de536b04358b0"
};

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }