import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCR61Jvh9ABRHqhFWso8dIdeu0y1ihVR8I",
    authDomain: "tinder-clone-fdaec.firebaseapp.com",
    databaseURL: "https://tinder-clone-fdaec.firebaseio.com",
    projectId: "tinder-clone-fdaec",
    storageBucket: "tinder-clone-fdaec.appspot.com",
    messagingSenderId: "1044411895250",
    appId: "1:1044411895250:web:2e672a9855b23ea7790c0b",
    measurementId: "G-QBYRH66VDS"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;