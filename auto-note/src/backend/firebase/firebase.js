// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN7_5ROel2ccXVsLEqeOb1EDL7zYdyoOw",
  authDomain: "autonote-80f6f.firebaseapp.com",
  projectId: "autonote-80f6f",
  storageBucket: "autonote-80f6f.appspot.com",
  messagingSenderId: "930914480122",
  appId: "1:930914480122:web:09fba548b185d1281afe43",
  measurementId: "G-5PG706VCT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
