import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtLzHokW3uT5sOc0FBQVLij1GkZpLM3dg",
    authDomain: "liberation-by-design.firebaseapp.com",
    databaseURL: "https://liberation-by-design.firebaseio.com",
    projectId: "liberation-by-design",
    storageBucket: "liberation-by-design.appspot.com",
    messagingSenderId: "496878830254"
};

firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();

export {database as database}
export {auth as auth};