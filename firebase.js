
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
 
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
 app = firebase.app();
}

firebase.firestore();
export default firebase;