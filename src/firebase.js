// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAyWD_VXP8VMuPpWxLdghe_PjNg8iB7Jec",
//     authDomain: "to-do-list-d9a91.firebaseapp.com",
//     projectId: "to-do-list-d9a91",
//     storageBucket: "to-do-list-d9a91.appspot.com",
//     messagingSenderId: "974953127829",
//     appId: "1:974953127829:web:13e0593744c3d06520e09c",
//     measurementId: "G-5PMWEWNV2K"
//   };

// the below is extra coding which we can ALWAYS use to link our app with firebase
// also, remember to go to firestore (in firebase website) and CREATE DATABASE for this project in TEST MODE.
// after that, click +START COLLECTION and create a new array. call it "todos" and give one task example

// import firebase from "firebase";
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// line 17-23 is taken from your firebase website which links YOUR firebase app with this project
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyWD_VXP8VMuPpWxLdghe_PjNg8iB7Jec",
    authDomain: "to-do-list-d9a91.firebaseapp.com",
    projectId: "to-do-list-d9a91",
    storageBucket: "to-do-list-d9a91.appspot.com",
    messagingSenderId: "974953127829",
    appId: "1:974953127829:web:13e0593744c3d06520e09c",
    measurementId: "G-5PMWEWNV2K"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;
// or..
// export { db };

   