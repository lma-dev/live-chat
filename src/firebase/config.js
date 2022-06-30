import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBfVSuJjGRjN9APERsvR0jUkZWhz4axS8s",
    authDomain: "vue-blog-system-a144d.firebaseapp.com",
    projectId: "vue-blog-system-a144d",
    storageBucket: "vue-blog-system-a144d.appspot.com",
    messagingSenderId: "141892367303",
    appId: "1:141892367303:web:2fed88952d10e77e6c1fe2"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    db,
    timestamp,
    auth
};