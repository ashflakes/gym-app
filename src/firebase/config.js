import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAxQAVvC6UgVWNwOCt3Hwn53cmfXJO1-Cc",
    authDomain: "gym-app-61212.firebaseapp.com",
    projectId: "gym-app-61212",
    storageBucket: "gym-app-61212.appspot.com",
    messagingSenderId: "609420605790",
    appId: "1:609420605790:web:36fa51ceb06c910aa877cf"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }