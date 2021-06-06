import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAIZavHt2dSzumnsfdqBR7n0uRgwNPNTXo',
  authDomain: 'chamala-317a8.firebaseapp.com',
  databaseURL:
    'https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chamala-317a8',
  storageBucket: 'chamala-317a8.appspot.com',
  messagingSenderId: '747912512246',
  appId: '1:747912512246:web:e2363a9fb5de9b2255e2d7',
  measurementId: 'G-NVQJQP3Z0Y'
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}
export const firestore = firebase.firestore()
export const storage = firebase.storage()

// const provider = new firebase.auth.GoogleAuthProvider()
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider)
// }
// import firebase from 'firebase'
// import 'firebase/storage'

// export const app = firebase.initializeApp({
//   apiKey: 'AIzaSyAIZavHt2dSzumnsfdqBR7n0uRgwNPNTXo',
//   authDomain: 'chamala-317a8.firebaseapp.com',
//   databaseURL:
//     'https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'chamala-317a8',
//   storageBucket: 'chamala-317a8.appspot.com',
//   messagingSenderId: '747912512246',
//   appId: '1:747912512246:web:e2363a9fb5de9b2255e2d7',
//   measurementId: 'G-NVQJQP3Z0Y'
// })

// export const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
//   signInWithEmailAndPassword: new firebase.auth.EmailAuthProvider(),
//   facebookProvider: new firebase.auth.FacebookAuthProvider()
// }

// export const firebaseAppAuth = app.auth()
// export const firebaseAppStorage = app.storage()