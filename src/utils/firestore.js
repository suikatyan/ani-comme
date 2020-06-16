import firebase from 'firebase/app'
// eslint-disable-next-line sort-imports
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCyHRNyIzFLjSZbqhrljt0dUcm348DHxMg',
  authDomain: 'ani-comme.firebaseapp.com',
  databaseURL: 'https://ani-comme.firebaseio.com',
  projectId: 'ani-comme',
  storageBucket: 'ani-comme.appspot.com',
  messagingSenderId: '708897797649',
  appId: '1:708897797649:web:0eb1765067b846d80163b0',
})

const db = firebase.firestore()

export {
  firebase,
  db,
}
