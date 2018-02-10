import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBtLzHokW3uT5sOc0FBQVLij1GkZpLM3dg",
    authDomain: "liberation-by-design.firebaseapp.com",
    databaseURL: "https://liberation-by-design.firebaseio.com",
    projectId: "liberation-by-design",
    storageBucket: "liberation-by-design.appspot.com",
    messagingSenderId: "496878830254"
}

firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()